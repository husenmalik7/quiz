const TRIVIA_URL = 'https://opentdb.com/api.php?amount=5&category=31&difficulty=easy&type=multiple';

const MOCK_USERNAME = 'admin123';
const MOCK_PASSWORD = 'admin123';

async function login({ username, password }) {
  if (username !== MOCK_USERNAME || password !== MOCK_PASSWORD) return { error: true, data: null };

  return { error: false, data: { username: username } };
}

function putAccessUsername(username) {
  return localStorage.setItem('username', username);
}

function removeAccessUsername() {
  return localStorage.removeItem('username');
}

async function getUserLogged() {
  return localStorage.getItem('username');
}

async function fetchAPI(url) {
  return fetch(url);
}

async function getQuiz() {
  const response = await fetchAPI(TRIVIA_URL);
  const responseJson = await response.json();

  if (responseJson.response_code !== 0) {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.results };
}

export { login, putAccessUsername, getUserLogged, removeAccessUsername, getQuiz };
