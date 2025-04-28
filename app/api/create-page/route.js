import clientPromise from '@/lib/mongo';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const { title, content, category , metaTitle , metaDescription } = await req.json();
  const slug = title.toLowerCase().replace(/\s+/g, '-');

  const client = await clientPromise;
  const db = client.db(); // default DB
  const collection = db.collection(category);

  const existing = await collection.findOne({ slug });
  if (existing) {
    return NextResponse.json({ error: 'Page already exists' }, { status: 400 });
  }

  await collection.insertOne({ title, slug, content , metaTitle , metaDescription });

  return NextResponse.json({ success: true, category, slug });
}
