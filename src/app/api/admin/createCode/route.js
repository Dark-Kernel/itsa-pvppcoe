// app/api/admin/createCode/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/dbConnect';
import Code from '@/models/Code';

function generateRandomCode(length = 12) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

export async function POST() {
  await connectDB();
  const value = generateRandomCode();

  try {
    const existing = await Code.findOne({ value });
    if (existing) return NextResponse.json({ error: "Code already exists" }, { status: 409 });

    const saved = await Code.create({ value });
    return NextResponse.json({ success: true, code: saved.value });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
