import prisma from '@/lib/prisma';
import EditPostForm from '@/components/EditPostForm';
import Navbar from '@/components/Navbar';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic'; // ---> ensures latest data is fetched


export default async function EditPost({ params }: { params: { id: string }}) {
  const id = parseInt(params.id);
  
  if (isNaN(id)) {
    notFound();
  }
  
  const post = await prisma.post.findUnique({
    where: { id },
  });
  
  if (!post) {
    notFound();
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Edit Post</h1>
        <EditPostForm
          id={post.id}
          initialTitle={post.title}
          initialContent={post.content}
        />
      </main>
    </div>
  );
}