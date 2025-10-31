import React from 'react';

import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import { formatQuestions } from '../utils/index';
import { getQuiz } from '../utils/api';

function HomePage({ authedUser, logout }) {
  const navigate = useNavigate();

  async function handleStartQuiz() {
    const { error, data } = await getQuiz();
    if (error) return toast.error('Something wrong');

    const formattedData = formatQuestions(data);
    localStorage.setItem('timer', 120);
    localStorage.setItem('questions', JSON.stringify(formattedData));
    localStorage.setItem('questionIndex', 0);
    localStorage.setItem('selectedAnswers', '{}');

    navigate('/quiz');
  }

  return (
    <section className="flex min-h-screen flex-col bg-amber-100">
      <div className="m-auto w-full max-w-sm">
        <p className="text-center text-2xl">Welcome {authedUser}</p>

        <div className="mt-12 flex flex-col gap-2">
          <button type="button" onClick={handleStartQuiz} className="cursor-pointer rounded-xl bg-[#FFC50F] p-2">
            Start Quiz
          </button>

          <button onClick={logout} type="button" className="cursor-pointer rounded-xl bg-[#FFC50F] p-2">
            Logout
          </button>
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default HomePage;
