import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    console.log('Received POST request to /api/posts');
    
    const body = await request.json();
    console.log('Request body:', body);
    
    const { title, content } = body;
    
    if (!title || !content) {
      console.log('Missing title or content');
      return NextResponse.json(
        { error: 'Title and content are required' },
        { status: 400 }
      );
    }
    
    console.log('Creating post in database');
    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    
    console.log('Post created successfully:', post);
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/posts:', error);
    return NextResponse.json({ 
      error: 'Failed to create post',
      details: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}