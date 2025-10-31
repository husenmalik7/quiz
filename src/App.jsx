import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getUserLogged, putAccessUsername, removeAccessUsername } from './utils/api';

import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import ResultPage from './pages/ResultPage';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    async function fetchUserLogged() {
      const username = await getUserLogged();
      setAuthedUser(username);
      setInitializing(false);
    }

    fetchUserLogged();
  }, []);

  async function onLoginSuccess({ username }) {
    putAccessUsername(username);
    setAuthedUser(username);
  }

  function onLogout() {
    setAuthedUser(null);
    removeAccessUsername();
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<HomePage authedUser={authedUser} logout={onLogout} />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
