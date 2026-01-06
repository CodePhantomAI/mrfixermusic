import { useEffect, useRef, useState } from 'react';
import { Bold, List, ListOrdered, Quote, Link as LinkIcon, Type } from 'lucide-react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  onWarningsChange?: (warnings: string[]) => void;
}

export default function RichTextEditor({ value, onChange, onWarningsChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const savedSelectionRef = useRef<Range | null>(null);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
    }
  }, [value]);

  useEffect(() => {
    checkForWarnings(value);
  }, [value]);

  const checkForWarnings = (content: string) => {
    const warnings: string[] = [];

    if (!content.includes('<h2') && !content.includes('<H2')) {
      warnings.push('No H2 headings found - consider adding section headings for better SEO');
    }

    if (!content.includes('<a ') && !content.includes('<A ')) {
      warnings.push('No links found - consider adding relevant links to improve content value');
    }

    onWarningsChange?.(warnings);
  };

  const handleInput = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML;
      onChange(content);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  };

  const handleHeading = (level: 2 | 3) => {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;

    const range = selection.getRangeAt(0);
    const heading = document.createElement(`h${level}`);

    try {
      range.surroundContents(heading);
    } catch {
      heading.textContent = selection.toString();
      range.deleteContents();
      range.insertNode(heading);
    }

    handleInput();
  };

  const handleLink = () => {
    const selection = window.getSelection();
    if (!selection || selection.toString().length === 0) {
      alert('Please select text first to create a link');
      return;
    }

    if (selection.rangeCount > 0) {
      savedSelectionRef.current = selection.getRangeAt(0).cloneRange();
    }

    setShowLinkModal(true);
  };

  const insertLink = () => {
    if (!linkUrl.trim()) return;

    let url = linkUrl.trim();

    if (!url.match(/^https?:\/\//i)) {
      url = 'https://' + url;
    }

    if (savedSelectionRef.current) {
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(savedSelectionRef.current);
      }
    }

    document.execCommand('createLink', false, url);

    if (editorRef.current) {
      const links = editorRef.current.querySelectorAll('a');
      links.forEach(link => {
        if (!link.hasAttribute('target')) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      });
    }

    setShowLinkModal(false);
    setLinkUrl('');
    savedSelectionRef.current = null;
    handleInput();
    editorRef.current?.focus();
  };

  const preventH1 = (e: React.KeyboardEvent) => {
    if (editorRef.current) {
      const h1Elements = editorRef.current.querySelectorAll('h1');
      h1Elements.forEach(h1 => {
        const p = document.createElement('p');
        p.innerHTML = h1.innerHTML;
        h1.replaceWith(p);
      });
    }
  };

  return (
    <div className="border border-slate-300 rounded-xl overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-300 p-2 flex flex-wrap gap-1">
        <button
          type="button"
          onClick={() => handleHeading(2)}
          className="p-2 hover:bg-slate-200 rounded transition-colors"
          title="Heading 2"
        >
          <Type className="w-5 h-5 text-slate-700" />
          <span className="text-xs font-bold ml-1">H2</span>
        </button>
        <button
          type="button"
          onClick={() => handleHeading(3)}
          className="p-2 hover:bg-slate-200 rounded transition-colors"
          title="Heading 3"
        >
          <Type className="w-5 h-5 text-slate-700" />
          <span className="text-xs ml-1">H3</span>
        </button>
        <div className="w-px bg-slate-300 mx-1" />
        <button
          type="button"
          onClick={() => execCommand('bold')}
          className="p-2 hover:bg-slate-200 rounded transition-colors"
          title="Bold"
        >
          <Bold className="w-5 h-5 text-slate-700" />
        </button>
        <div className="w-px bg-slate-300 mx-1" />
        <button
          type="button"
          onClick={() => execCommand('insertUnorderedList')}
          className="p-2 hover:bg-slate-200 rounded transition-colors"
          title="Bullet List"
        >
          <List className="w-5 h-5 text-slate-700" />
        </button>
        <button
          type="button"
          onClick={() => execCommand('insertOrderedList')}
          className="p-2 hover:bg-slate-200 rounded transition-colors"
          title="Numbered List"
        >
          <ListOrdered className="w-5 h-5 text-slate-700" />
        </button>
        <div className="w-px bg-slate-300 mx-1" />
        <button
          type="button"
          onClick={() => execCommand('formatBlock', 'blockquote')}
          className="p-2 hover:bg-slate-200 rounded transition-colors"
          title="Quote"
        >
          <Quote className="w-5 h-5 text-slate-700" />
        </button>
        <button
          type="button"
          onClick={handleLink}
          className="p-2 hover:bg-slate-200 rounded transition-colors"
          title="Insert Link"
        >
          <LinkIcon className="w-5 h-5 text-slate-700" />
        </button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onPaste={handlePaste}
        onKeyUp={preventH1}
        className="p-4 min-h-[400px] focus:outline-none text-slate-900 prose prose-slate max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-bold prose-h3:text-slate-900 prose-h3:mt-6 prose-h3:mb-3 prose-p:text-slate-700 prose-p:mb-4 prose-strong:text-slate-900 prose-strong:font-bold prose-ul:my-4 prose-ol:my-4 prose-li:text-slate-700 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-600 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-700"
        style={{
          fontSize: '16px',
          lineHeight: '1.6',
        }}
      />

      {showLinkModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Insert Link</h3>
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 mb-4"
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  insertLink();
                }
              }}
            />
            <div className="flex gap-3">
              <button
                onClick={insertLink}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Insert
              </button>
              <button
                onClick={() => {
                  setShowLinkModal(false);
                  setLinkUrl('');
                }}
                className="flex-1 px-4 py-2 bg-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
