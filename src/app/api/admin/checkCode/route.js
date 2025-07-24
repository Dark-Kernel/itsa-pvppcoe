// app/api/admin/checkCode/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import Code from '@/models/Code';

export async function POST(req) {
  await connectDB();
  const { value } = await req.json();

  if (!value) {
    return NextResponse.json({ valid: false, error: 'Code required' }, { status: 400 });
  }

  const code = await Code.findOne({ value });
  return NextResponse.json({ valid: !!code });
}
