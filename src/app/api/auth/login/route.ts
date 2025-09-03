import { NextRequest, NextResponse } from 'next/server';

import { LoginForm } from '@/components/login-form';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export const POST = async (request: NextRequest) => {
  const { email, password }: LoginForm = await request.json();

  if (!email || !password) {
    return NextResponse.json({});
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
      password: password,
    },
  });

  return NextResponse.json(user);
};
