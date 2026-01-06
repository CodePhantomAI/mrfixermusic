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
        description={post.excerpt}
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
                alt={post.title}
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

          <div className="prose prose-lg prose-slate max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('# ')) {
                return (
                  <h2 key={index} className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                    {paragraph.replace('# ', '')}
                  </h2>
                );
              } else if (paragraph.trim().startsWith('## ')) {
                return (
                  <h3 key={index} className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              } else if (paragraph.trim().startsWith('- ')) {
                return (
                  <li key={index} className="text-slate-700 leading-relaxed ml-6">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              } else if (paragraph.trim()) {
                return (
                  <p key={index} className="text-slate-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              }
              return null;
            })}
          </div>

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
