import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../components/Button';

function ResultPage() {
  const { state } = useLocation();
  const score = state?.score || {};

  return (
    <section className="flex min-h-screen flex-col bg-amber-100">
      <div className="m-auto w-full max-w-md">
        {Object.keys(score).length !== 0 ? (
          <>
            <div className="mb-12 flex items-center justify-between">
              <div className="w-32">
                <p className="rounded-2xl bg-white p-4 py-12 text-center text-2xl shadow-lg">{score?.totalCorrect}</p>
                <p className="mt-2 text-center text-2xl">Correct</p>
              </div>

              <div className="w-32">
                <p className="rounded-2xl bg-white p-4 py-12 text-center text-2xl shadow-lg">{score?.totalAnswer}</p>
                <p className="mt-2 text-center text-2xl">Answered</p>
              </div>

              <div className="w-32">
                <p className="rounded-2xl bg-white p-4 py-12 text-center text-2xl shadow-lg">{score?.totalFalse}</p>
                <p className="mt-2 text-center text-2xl">Incorrect</p>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="mb-6 text-center text-2xl">You haven't filled in the quiz</p>
          </>
        )}

        <Button type="button" to="/" color="bg-[#FFC50F]">
          Back to Home
        </Button>
      </div>
    </section>
  );
}

export default ResultPage;
