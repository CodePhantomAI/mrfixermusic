import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { supabase, type BlogPost } from '../lib/supabase';
import SEOHead from './SEOHead';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      loadPost();
    }
  }, [slug]);

  const loadPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;

      if (!data) {
        setNotFound(true);
      } else {
        setPost(data);
      }
    } catch (error) {
      console.error('Error loading post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link
            to="/magazine"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Magazine
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={`${post.title} - EranFixer Magazine`}
        description={post.meta_description || post.excerpt}
        canonicalUrl={`https://eranfixer.com/magazine/${post.slug}`}
      />
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            to="/magazine"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Magazine
          </Link>

          {post.cover_image && (
            <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={post.cover_image}
                alt={post.featured_image_alt || post.title}
                className="w-full h-96 object-cover"
              />
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.published_at || post.created_at)}</span>
              </div>
            </div>
          </header>

          {post.excerpt && (
            <div className="text-xl text-slate-600 mb-8 pb-8 border-b border-slate-200 italic">
              {post.excerpt}
            </div>
          )}

          <div
            className="prose prose-lg prose-slate max-w-none prose-h2:text-3xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-bold prose-h3:text-slate-900 prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6 prose-strong:text-slate-900 prose-strong:font-bold prose-ul:my-6 prose-ol:my-6 prose-li:text-slate-700 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-slate-600 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              to="/magazine"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Magazine
            </Link>
          </div>
        </article>
      </div>
    </>
  );
}
