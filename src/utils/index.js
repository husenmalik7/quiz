function formatQuestions(question) {
  const shuffle = (array) => array.sort(() => Math.random() - 0.5);

  const formatted = question.map((item) => {
    return {
      ...item,
      answers: shuffle([item.correct_answer, ...item.incorrect_answers]),
    };
  });

  return formatted;
}

function calculateScore(selectedAnswers, questions) {
  const correctAnswers = questions.map((item) => {
    return item.correct_answer;
  });

  let totalCorrect = 0;
  let totalFalse = 0;
  const totalAnswer = Object.keys(selectedAnswers).length;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (selectedAnswers[i] === correctAnswers[i]) {
      totalCorrect = totalCorrect + 1;
    } else {
      totalFalse = totalFalse + 1;
    }
  }

  return {
    totalCorrect: totalCorrect,
    totalFalse: totalFalse,
    totalAnswer: totalAnswer,
  };
}

export { formatQuestions, calculateScore };
