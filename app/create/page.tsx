import PostForm from '@/components/PostForm';
import Navbar from '@/components/Navbar';

export default function CreatePost() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
        <PostForm />
      </main>
    </div>
  );
}