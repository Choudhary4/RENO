import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import pool from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const address = formData.get('address') as string;
    const city = formData.get('city') as string;
    const state = formData.get('state') as string;
    const contact = formData.get('contact') as string;
    const email_id = formData.get('email_id') as string;
    const image = formData.get('image') as File;

    if (!name || !address || !city || !state || !contact || !email_id) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    let imagePath = '';
    
    if (image && image.size > 0) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), 'public', 'schoolImages');
      await mkdir(uploadDir, { recursive: true });

      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
      const extension = image.name.split('.').pop();
      const filename = `school-${uniqueSuffix}.${extension}`;
      
      await writeFile(path.join(uploadDir, filename), buffer);
      imagePath = `/schoolImages/${filename}`;
    }

    const [result] = await pool.execute(
      'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [name, address, city, state, contact, imagePath, email_id]
    );

    return NextResponse.json(
      { message: 'School added successfully', id: (result as any).insertId },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding school:', error);
    return NextResponse.json(
      { error: 'Failed to add school' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const [rows] = await pool.execute('SELECT * FROM schools ORDER BY id DESC');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error fetching schools:', error);
    return NextResponse.json(
      { error: 'Failed to fetch schools' },
      { status: 500 }
    );
  }
}
