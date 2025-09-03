'use client';

import { LoginForm } from '@/components/login-form';
import api from '@/lib/axios';

export default function LoginPage() {
  const handleLogin = (data: LoginForm): void => {
    api
      .post('auth/login', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <LoginForm onLogin={(data) => handleLogin(data)} />
    </>
  );
}
