'use client';

import { LoginForm } from '@/components/login-form';

export default function LoginPage() {
  const handleLogin = (data: LoginForm): void => {
    console.log(data);
  };

  return (
    <>
      <LoginForm onLogin={(data) => handleLogin(data)} />
    </>
  );
}
