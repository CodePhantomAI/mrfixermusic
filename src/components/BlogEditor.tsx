import { useState } from 'react';
import { Save, X, AlertCircle, Image as ImageIcon, Tag as TagIcon, FolderOpen } from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import { BlogPost } from '../lib/supabase';

interface BlogEditorProps {
  post: Partial<BlogPost>;
  isNew: boolean;
  onSave: (post: Partial<BlogPost>) => Promise<void>;
  onCancel: () => void;
}

export default function BlogEditor({ post: initialPost, isNew, onSave, onCancel }: BlogEditorProps) {
  const [post, setPost] = useState<Partial<BlogPost>>(initialPost);
  const [warnings, setWarnings] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [tagInput, setTagInput] = useState('');

  const metaDescLength = post.meta_description?.length || 0;
  const metaDescRemaining = 160 - metaDescLength;

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleTitleChange = (title: string) => {
    setPost({
      ...post,
      title,
      slug: generateSlug(title),
    });
  };

  const handleAddTag = () => {
    if (tagInput.trim()) {
      const currentTags = post.tags || [];
      if (!currentTags.includes(tagInput.trim())) {
        setPost({
          ...post,
          tags: [...currentTags, tagInput.trim()],
        });
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setPost({
      ...post,
      tags: (post.tags || []).filter(tag => tag !== tagToRemove),
    });
  };

  const handleSave = async () => {
    if (!post.title?.trim()) {
      alert('Title is required');
      return;
    }

    if (!post.slug?.trim()) {
      alert('Slug is required');
      return;
    }

    setSaving(true);
    try {
      await onSave(post);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          {isNew ? 'Create New Post' : 'Edit Post'}
        </h2>
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="w-5 h-5" />
            {saving ? 'Saving...' : 'Save Post'}
          </button>
          <button
            onClick={onCancel}
            className="flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-300 transition-colors"
          >
            <X className="w-5 h-5" />
            Cancel
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={post.title || ''}
              onChange={(e) => handleTitleChange(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900 text-2xl font-bold"
              placeholder="Enter your post title (will be used as H1)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              URL Slug <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={post.slug || ''}
              onChange={(e) => setPost({ ...post, slug: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
              placeholder="post-url-slug"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-slate-700">
                Meta Description
              </label>
              <span className={`text-sm font-medium ${metaDescRemaining < 0 ? 'text-red-600' : metaDescRemaining < 20 ? 'text-amber-600' : 'text-slate-500'}`}>
                {metaDescLength}/160 characters
              </span>
            </div>
            <textarea
              value={post.meta_description || ''}
              onChange={(e) => setPost({ ...post, meta_description: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
              rows={3}
              placeholder="Brief description for search engines (160 characters max)"
              maxLength={160}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Content
            </label>
            <RichTextEditor
              value={post.content || ''}
              onChange={(content) => setPost({ ...post, content })}
              onWarningsChange={setWarnings}
            />
          </div>

          {warnings.length > 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">SEO Suggestions</h4>
                  <ul className="space-y-1 text-sm text-amber-800">
                    {warnings.map((warning, index) => (
                      <li key={index}>• {warning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <ImageIcon className="w-5 h-5" />
              Featured Image
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Image URL
                </label>
                <input
                  type="text"
                  value={post.cover_image || ''}
                  onChange={(e) => setPost({ ...post, cover_image: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              {post.cover_image && (
                <img
                  src={post.cover_image}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Alt Text
                </label>
                <input
                  type="text"
                  value={post.featured_image_alt || ''}
                  onChange={(e) => setPost({ ...post, featured_image_alt: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                  placeholder="Describe the image"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <FolderOpen className="w-5 h-5" />
              Category
            </h3>
            <input
              type="text"
              value={post.category || ''}
              onChange={(e) => setPost({ ...post, category: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
              placeholder="e.g., AI, SEO, Web Development"
            />
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <TagIcon className="w-5 h-5" />
              Tags
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                  placeholder="Add a tag"
                />
                <button
                  onClick={handleAddTag}
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Add
                </button>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="hover:text-blue-900"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Publishing</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={post.author || ''}
                  onChange={(e) => setPost({ ...post, author: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                  placeholder="Author name"
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={post.published || false}
                  onChange={(e) => setPost({ ...post, published: e.target.checked })}
                  className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="published" className="text-sm font-medium text-slate-700">
                  Publish this post
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
