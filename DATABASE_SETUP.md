# Database Setup Instructions

## Step 1: Database Table (COMPLETED ✓)

The `blog_posts` table has already been created automatically via migration.

Skip to Step 2 to create your admin user.

```sql
-- Create blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text DEFAULT '',
  content text DEFAULT '',
  cover_image text DEFAULT '',
  author text DEFAULT 'Mr. Fixer',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published_at timestamptz
);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published posts
CREATE POLICY "public_read_published"
  ON blog_posts
  FOR SELECT
  USING (published = true);

-- Policy: Authenticated users can read all posts
CREATE POLICY "auth_read_all"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Authenticated users can insert posts
CREATE POLICY "auth_insert"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Authenticated users can update posts
CREATE POLICY "auth_update"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Authenticated users can delete posts
CREATE POLICY "auth_delete"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (true);
```

## Step 2: Create Admin User

In your Supabase Dashboard, go to Authentication > Users and click "Add User":

- Email: `eranfixer@example.com` (or your preferred email)
- Password: `7198258`
- Auto Confirm User: YES (check this box)

## Step 3: Access the Magazine

### Public Magazine Page
Visit: `/magazine`

### Admin Login
Visit: `/admin`

Login with:
- Email: `eranfixer@example.com`
- Password: `7198258`

### Admin Dashboard
After login, you'll be redirected to: `/admin/dashboard`

Here you can:
- Create new blog posts
- Edit existing posts
- Publish/unpublish posts
- Delete posts
- Add cover images (use image URLs)

## Routes Available

- `/magazine` - Public blog page showing all published posts
- `/magazine/:slug` - Individual blog post page
- `/admin` - Admin login page
- `/admin/dashboard` - Admin dashboard for managing posts
