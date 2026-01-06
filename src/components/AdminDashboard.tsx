import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, EyeOff, LogOut, Save, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, type BlogPost } from '../lib/supabase';

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

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleNewPost = () => {
    setEditingPost({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      cover_image: '',
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

  const handleSave = async () => {
    if (!editingPost || !editingPost.title || !editingPost.slug) {
      alert('Title and slug are required');
      return;
    }

    try {
      if (isNewPost) {
        const { error } = await supabase.from('blog_posts').insert([
          {
            ...editingPost,
            published_at: editingPost.published ? new Date().toISOString() : null,
          },
        ]);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .update({
            ...editingPost,
            updated_at: new Date().toISOString(),
            published_at: editingPost.published ? (editingPost.published_at || new Date().toISOString()) : null,
          })
          .eq('id', editingPost.id);
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
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {isNewPost ? 'Create New Post' : 'Edit Post'}
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
                <input
                  type="text"
                  value={editingPost.title || ''}
                  onChange={(e) => {
                    const title = e.target.value;
                    setEditingPost({
                      ...editingPost,
                      title,
                      slug: generateSlug(title),
                    });
                  }}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                  placeholder="Enter post title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Slug</label>
                <input
                  type="text"
                  value={editingPost.slug || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                  placeholder="post-url-slug"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Excerpt</label>
                <textarea
                  value={editingPost.excerpt || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                  rows={3}
                  placeholder="Brief description of the post"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Content</label>
                <textarea
                  value={editingPost.content || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none font-mono text-sm text-slate-900"
                  rows={15}
                  placeholder="Write your post content here. Use # for headings, - for lists"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Cover Image URL</label>
                <input
                  type="text"
                  value={editingPost.cover_image || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, cover_image: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Author</label>
                <input
                  type="text"
                  value={editingPost.author || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-slate-900"
                  placeholder="Author name"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={editingPost.published || false}
                  onChange={(e) => setEditingPost({ ...editingPost, published: e.target.checked })}
                  className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="published" className="text-sm font-medium text-slate-700">
                  Publish this post
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
                >
                  <Save className="w-5 h-5" />
                  Save Post
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                  Cancel
                </button>
              </div>
            </div>
          </div>
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
