import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

// Demo user - replace with DB lookup in production
const DEMO_USER = {
  username: 'admin',
  password: 'password123', // In production, use hashed passwords!
  id: 1,
  name: 'Admin User',
};

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'; // Set in env for production
const JWT_EXPIRES_IN = '1h';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Basic validation
    if (!email || !password) {
      return NextResponse.json({ error: 'Username and password are required.' }, { status: 400 });
    }

    // Authenticate user (replace with DB logic)
    if (email === DEMO_USER.username && password === DEMO_USER.password) {
      // Generate JWT
      const token = jwt.sign(
        { id: DEMO_USER.id, username: DEMO_USER.username, name: DEMO_USER.name },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN },
      );

      return NextResponse.json({
        token,
        user: {
          id: DEMO_USER.id,
          username: DEMO_USER.username,
          name: DEMO_USER.name,
        },
      });
    } else {
      return NextResponse.json({ error: 'Invalid username or password.' }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
