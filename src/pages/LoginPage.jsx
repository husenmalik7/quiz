import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { login } from '../utils/api';

function LoginPage({ loginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function onLoginHandler(event) {
    event.preventDefault();

    try {
      const { error, data } = await login({ username, password });
      if (error) {
        toast.error('Invalid credential');
        return;
      }

      loginSuccess(data);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  return (
    <section className="flex min-h-screen flex-col bg-amber-100">
      <div className="m-auto w-full max-w-md">
        <h2 className="flex justify-center pb-4 text-2xl">Login Form</h2>

        <form onSubmit={onLoginHandler} className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2 text-sm font-medium text-gray-900 focus:outline-gray-300"
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="block w-full rounded-sm border border-gray-300 bg-gray-50 p-2 text-sm font-medium text-gray-900 focus:outline-gray-300"
          />

          <button type="submit" className="mt-2 cursor-pointer rounded-lg bg-[#FFC50F] p-2">
            Login
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
}

export default LoginPage;
