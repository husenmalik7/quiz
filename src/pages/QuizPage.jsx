import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import parser from 'html-react-parser';
import { Link, useNavigate } from 'react-router-dom';

import CountdownTimer from '../components/CountdownTimer';
import { calculateScore } from '../utils';

function QuizPage() {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    async function fetchQuiz() {
      const data = localStorage.getItem('questions');
      const parsedData = JSON.parse(data);

      setQuestions(parsedData);
    }

    async function fetchAnswer() {
      const data = localStorage.getItem('selectedAnswers');
      const parsedData = JSON.parse(data) || {};

      setSelectedAnswers(parsedData);
    }

    async function fetchQuestionIndex() {
      const data = localStorage.getItem('questionIndex');
      const parsedData = parseInt(data);

      setQuestionIndex(parsedData);
    }

    fetchQuiz();
    fetchAnswer();
    fetchQuestionIndex();
  }, []);

  function handleChangeAnswer(questionIndex, answer) {
    setSelectedAnswers((prev) => {
      const newAnswer = { ...prev, [questionIndex]: answer };
      localStorage.setItem('selectedAnswers', JSON.stringify(newAnswer));
      return newAnswer;
    });

    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      localStorage.setItem('questionIndex', questionIndex + 1);
    }
  }

  function handleChangeIndex(event, index) {
    event.preventDefault();

    setQuestionIndex(index);
    localStorage.setItem('questionIndex', index);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const numberOfKeys = Object.keys(selectedAnswers).length;

    if (numberOfKeys !== questions.length) {
      toast.error('Please answer all questions');
      return;
    }

    const score = calculateScore(selectedAnswers, questions);
    navigate('/result', { state: { score } });
  }

  function onTimeUp() {
    toast.error(`Time's up`);

    setTimeout(() => {
      const score = calculateScore(selectedAnswers, questions);
      navigate('/result', { state: { score } });
    }, 2000);
  }

  return (
    <section className="flex min-h-screen flex-col bg-amber-100">
      <div className="mt-12 mb-6">
        <CountdownTimer onTimeUp={onTimeUp} />
      </div>

      <div className="grid grid-cols-3">
        <div className="mx-2 flex gap-4">
          <div className="w-32">
            <p className="rounded-2xl bg-white p-4 py-12 text-center text-2xl shadow-lg">{questions.length}</p>
            <p className="mt-2 text-center text-xl">Total Questions</p>
          </div>

          <div className="w-32">
            <p className="rounded-2xl bg-white p-4 py-12 text-center text-2xl shadow-lg">
              {Object.keys(selectedAnswers).length || 0}
            </p>
            <p className="mt-2 text-center text-xl">Answered</p>
          </div>
        </div>

        <div className="col-span-2">
          <p className="text-md">{parser(questions[questionIndex]?.question || '')}</p>

          <form onSubmit={handleSubmit} className="my-2">
            {questions[questionIndex]?.answers.map((item, index) => (
              <label className="flex" key={index}>
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={item}
                  checked={selectedAnswers[questionIndex] === item}
                  onChange={() => handleChangeAnswer(questionIndex, item)}
                />
                <p className="ml-1">{parser(item || '')}</p>
              </label>
            ))}

            <div className="my-2 flex gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`cursor-pointer rounded-lg bg-orange-200 p-2 px-4 ${questionIndex === index ? 'bg-orange-400' : null} `}
                  onClick={(event) => handleChangeIndex(event, index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button type="submit" className="mt-4 cursor-pointer rounded-lg bg-orange-500 p-2">
              submit
            </button>
          </form>
        </div>
      </div>

      <Toaster />
    </section>
  );
}

export default QuizPage;
