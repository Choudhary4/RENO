import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const [rows] = await pool.execute(
      'SELECT * FROM schools WHERE id = ?',
      [id]
    );
    
    const schools = rows as any[];
    
    if (schools.length === 0) {
      return NextResponse.json(
        { error: 'School not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(schools[0]);
  } catch (error) {
    console.error('Error fetching school:', error);
    return NextResponse.json(
      { error: 'Failed to fetch school' },
      { status: 500 }
    );
  }
}
