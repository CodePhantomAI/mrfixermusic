/*
  # Create Blog Posts Table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text, required) - The title of the blog post
      - `slug` (text, unique, required) - URL-friendly version of the title
      - `excerpt` (text) - Brief summary or description of the post
      - `content` (text) - Full content of the blog post
      - `cover_image` (text) - URL to the cover image
      - `author` (text) - Author name, defaults to "Mr. Fixer"
      - `published` (boolean) - Whether the post is published or draft
      - `created_at` (timestamptz) - When the post was created
      - `updated_at` (timestamptz) - When the post was last updated
      - `published_at` (timestamptz) - When the post was published

  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for public to read published posts
    - Add policies for authenticated users to manage all posts
*/

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

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read published posts"
  ON blog_posts
  FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can read all posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can insert posts"
  ON blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update posts"
  ON blog_posts
  FOR UPDATE
  TO authenticated
  USING (auth.uid() IS NOT NULL)
  WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete posts"
  ON blog_posts
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);
