import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, EyeOff, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, type BlogPost } from '../lib/supabase';
import BlogEditor from './BlogEditor';

export default function AdminDashboard() {
  const { user, signOut, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<Partial<BlogPost> | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/admin');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      loadPosts();
    }
  }, [user]);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error loading posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewPost = () => {
    setEditingPost({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      cover_image: '',
      meta_description: '',
      featured_image_alt: '',
      category: '',
      tags: [],
      author: 'Mr. Fixer',
      published: false,
    });
    setIsNewPost(true);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setIsNewPost(false);
  };

  const handleCancel = () => {
    setEditingPost(null);
    setIsNewPost(false);
  };

  const handleSave = async (postData: Partial<BlogPost>) => {
    if (!postData.title || !postData.slug) {
      alert('Title and slug are required');
      return;
    }

    try {
      if (isNewPost) {
        const { error } = await supabase.from('blog_posts').insert([
          {
            ...postData,
            published_at: postData.published ? new Date().toISOString() : null,
          },
        ]);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .update({
            ...postData,
            updated_at: new Date().toISOString(),
            published_at: postData.published ? (postData.published_at || new Date().toISOString()) : null,
          })
          .eq('id', postData.id);
        if (error) throw error;
      }

      await loadPosts();
      setEditingPost(null);
      setIsNewPost(false);
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Failed to save post');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase.from('blog_posts').delete().eq('id', id);
      if (error) throw error;
      await loadPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Blog Dashboard
          </h1>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>

        {editingPost ? (
          <BlogEditor
            post={editingPost}
            isNew={isNewPost}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        ) : (
          <>
            <button
              onClick={handleNewPost}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all mb-8"
            >
              <Plus className="w-5 h-5" />
              New Post
            </button>

            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
                      {post.published ? (
                        <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          <Eye className="w-4 h-4" />
                          Published
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                          <EyeOff className="w-4 h-4" />
                          Draft
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600 mb-2">{post.excerpt}</p>
                    <p className="text-sm text-slate-500">
                      {new Date(post.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(post)}
                      className="p-3 bg-blue-100 text-blue-600 rounded-xl hover:bg-blue-200 transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-3 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}

              {posts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-xl text-slate-600">No posts yet. Create your first post!</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
