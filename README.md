# Quiz App

Quiz App is a web application that allows users to log in, complete quizzes, and view their results. It is built using React, with Tailwind used for styling

---

## 📑 Table of Contents

- [🚀 Features](#-features)
- [🎬 Demo](#-demo)
- [📁 Folder Structure](#-folder-structure)
- [🛠️ Instalasi \& Konfigurasi](#️-instalasi--konfigurasi)
- [🧰 Tech Stack / Dependencies](#-tech-stack--dependencies)
- [🛎️ Tools](#️-tools)
- [👨‍💻 Developer](#-developer)

---

## 🚀 Features

- User login system
- Displays total number of questions and number of questions answered
- Built-in timer with customizable quiz duration
- One question per page — automatically moves to the next question after selecting an answer
- Auto-submit and show results (correct, wrong, and answered questions) when the timer runs out
- Resume mechanism using localStorage to save progress if the browser is closed

## 🎬 Demo

[quiz-three-ashen.vercel.app](https://quiz-three-ashen.vercel.app)

## 📁 Folder Structure

```

.
├── src/                    # All source code of the application
│   ├── assets/             # Static assets such as the "not found" image
│   ├── components/         # Reusable UI components
│   ├── pages/              # Components for each page
│   ├── styles/             # Main CSS file that imports Tailwind
│   └── utils/              # Helper or utility functions, such as API handling and question formatting

```

## 🛠️ Installation & Configuration

<details>
<summary>Installation & Configuration (click me)</summary>

### 1. Clone this repository

```
git clone https://github.com/husenmalik7/quiz.git

```

### 2. Install repository

```
npm install

```

### 3. Run the server via start or development mode

```
npm run start
or
npm run dev
```

</details>

## 🧰 Tech Stack / Dependencies

- [![vite](https://img.shields.io/badge/vite-v7.1.7-blue)](https://www.npmjs.com/package/vite) **used as the build tool, in this case with React**
- [![eslint](https://img.shields.io/badge/eslint-v9.36.0-blue)](https://www.npmjs.com/package/eslint) **used as a linter to detect errors, duplicate variables, and more**
- [![@tailwindcss/vite](https://img.shields.io/badge/@tailwindcss/vite-v4.1.16-blue)](https://www.npmjs.com/package/@tailwindcss/vite) **the main CSS framework integration for this project**
- [![tailwindcss](https://img.shields.io/badge/tailwindcss-v4.1.16-blue)](https://www.npmjs.com/package/tailwindcss) **the main CSS framework used in this project**
- [![react](https://img.shields.io/badge/react-v19.1.1-blue)](https://www.npmjs.com/package/react) **the main frontend framework used**
- [![react-dom](https://img.shields.io/badge/react--dom-v19.1.1-blue)](https://www.npmjs.com/package/react-dom) **connects React components to the DOM**
- [![react-router-dom](https://img.shields.io/badge/react--router--dom-v7.9.4-blue)](https://www.npmjs.com/package/react-router-dom) **used for routing management**
- [![react-hot-toast](https://img.shields.io/badge/react--hot--toast-v2.6.0-blue)](https://www.npmjs.com/package/react-hot-toast) **used as an alert for error or success notifications**

## 🛎️ Tools

- **VSCode** the code editor
- **Google Chrome** as the development platform and for visually monitoring results

## 👨‍💻 Developer

[Husen Malik](https://github.com/husenmalik7)
