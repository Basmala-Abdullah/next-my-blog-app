'use client';

import { useState } from 'react';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type PostListProps = {
  initialPosts: Post[];
};

export default function PostList({ initialPosts }: PostListProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);

  const handleDelete = async (id: number) => {      
      try {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete post');
        }
        
      setPosts(posts.filter(post => post.id !== id));
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post');
      }
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No posts yet. Create your first post!</p>
        <Link href="/create" className="mt-4 inline-block text-fuchsia-600 hover:underline">
          Create Post
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div key={post.id} className="bg-white p-6 rounded-lg border-fuchsia-300 shadow-lg border-2">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-700 mb-4">
            {post.content}
          </p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p>
              Posted: {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <div className="space-x-2">
              <Link href={`/edit/${post.id}`}className="text-fuchsia-500 hover:underline">
                Edit
              </Link>
              <button onClick={() => handleDelete(post.id)} className="text-fuchsia-900 hover:underline disabled:text-gray-400">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}