import User from '@/models/User';
import bcrypt from 'bcryptjs';
import dbConnect from '@/lib/dbConnect';

export async function GET() {
  try {
    await dbConnect();
    
    const hashPassword = await bcrypt.hash('amisha', 10);
    const user = new User({
      name: 'Primary Admin',
      email: 'admin@gmail.com',
      password: hashPassword
    });
    
    await user.save();
    
    return new Response(JSON.stringify({ data: 'seeded successfully' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in seed route:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}