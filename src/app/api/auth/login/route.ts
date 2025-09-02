import { NextRequest } from 'next/server';

import { LoginForm } from '@/components/login-form';

export const POST = async (request: NextRequest) => {
  const { email, password }: LoginForm = await request.json();
  console.log(email, password);
};
