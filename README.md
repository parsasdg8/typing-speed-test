# ⌨️ Programming Facts Typing Test

[English](README.md) | [فارسی](README-fa.md)

A simple and interactive typing speed test built with HTML, CSS, and Vanilla JavaScript.

Instead of typing random sentences, this project uses programming facts as typing exercises. Each test randomly selects a programming fact from a JSON file, measures the time required to type it, and stores the result locally in the browser.

---
## 🌐 Live Demo

You can try the Typing Speed Test directly in your browser without downloading or installing anything.

👉 **[Try the Live Demo](https://typingspeedtest-tst.netlify.app/)**

---

## 📸 Preview

![Typing Speed Test Screenshot](./image/screenshot.png)

![Typing Speed Test Screenshot 2](./image/screenshot2.png)

---

## 📖 About

Programming Facts Typing Test is a browser-based typing practice application designed around programming-related content.

The application loads 200 programming facts from a JSON file and randomly displays one of them for each typing session.

When the user starts typing, a timer automatically starts. Once the typed text exactly matches the displayed fact, the timer stops and the final result is saved to the browser using `localStorage`.

The project was created as a practical JavaScript project to combine typing practice with programming concepts and browser-based data storage.

---

## ✨ Features

### ⌨️ Typing Speed Test

- Type randomly selected programming facts.
- Timer starts automatically when typing begins.
- Timer stops when the text is completed correctly.
- Real-time feedback while typing.
- Input is disabled after successfully completing a test.

### 📚 Programming Facts

- Contains 200 programming facts.
- Facts are stored in a separate `texts.json` file.
- A random fact is selected for every new test.
- Facts cover different programming and web development topics.

### 🎲 Random Text

A new programming fact is randomly selected using JavaScript's random number functionality.

### ⏱️ Typing Timer

The application measures the time taken to complete each typing test using:

- `Date.now()`
- `setInterval()`
- Millisecond calculations

The result is displayed in seconds with two decimal places.

### 📊 Scoreboard

The application includes a scoreboard for viewing previous typing results.

Results are stored in the browser using `localStorage`, allowing them to remain available after refreshing the page.

### 🗑️ Clear History

Users can remove all saved typing results using the **Clear History** button.

### 🔄 Reset Test

The current typing session can be reset at any time without reloading the page.

### 📱 Responsive Design

The interface is designed to work across different screen sizes, including:

- Desktop
- Laptop
- Tablet
- Mobile

---

## 🛠️ Technologies

| Technology | Usage |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Application logic and interactivity |
| JSON | Storing programming facts |
| Fetch API | Loading facts from `texts.json` |
| LocalStorage | Saving typing results |
| Font Awesome | Icons |

---

## 📄 Programming Facts

The project includes a `texts.json` file containing 200 programming facts.

The facts cover topics such as:

- JavaScript
- Python
- C
- C++
- Java
- C#
- PHP
- HTML
- CSS
- Git & GitHub
- APIs
- REST APIs
- HTTP & HTTPS
- JSON
- SQL
- PostgreSQL
- SQLite
- MongoDB
- Backend Development
- Frontend Development
- Web Development
- Networking Basics
- Software Engineering
- Object-Oriented Programming
- Algorithms & Data Structures
- Async Programming
- Frameworks
- Cybersecurity Basics
- General Programming Concepts

---

## ⚡ How It Works

The general application flow is:

```text
Load Website
     │
     ▼
Fetch texts.json
     │
     ▼
Load Programming Facts
     │
     ▼
Select Random Fact
     │
     ▼
Display Text
     │
     ▼
User Starts Typing
     │
     ▼
Start Timer
     │
     ▼
Compare Input With Original Text
     │
     ├── Incorrect → Continue Typing
     │
     └── Correct
            │
            ▼
       Stop Timer
            │
            ▼
       Save Result
            │
            ▼
        LocalStorage
            │
            ▼
         Scoreboard
🧠 Main JavaScript Concepts Used

This project demonstrates several practical JavaScript concepts.

Async / Await

The programming facts are loaded asynchronously from the JSON file.

const response = await fetch("./texts.json");
const data = await response.json();
Fetch API

The Fetch API is used to load the programming facts.

const response = await fetch("./texts.json");
Random Selection

A random programming fact is selected from the loaded array.

const randomIndex = Math.floor(
    Math.random() * texts.length
);
LocalStorage

Typing results are stored locally in the browser.

localStorage.setItem(
    "typingScores",
    JSON.stringify(scores)
);
JSON

The scores array is converted to JSON before being stored.

JSON.stringify(scores);

The stored data is converted back into a JavaScript array when the application starts.

JSON.parse(
    localStorage.getItem("typingScores")
);
DOM Manipulation

JavaScript dynamically updates:

Displayed text
Timer
Input field
Scoreboard
Modal
Buttons
Input styling
Event Listeners

The application uses events to handle:

Typing
New text
Reset
Scoreboard
Closing the modal
Clearing saved results
Timers

The typing timer is updated every 10 milliseconds using setInterval() and Date.now().

📂 Project Structure
programming-facts-typing-test/
│
├── image/
│   ├── icon.png
│   ├── TST.png
│   ├── screenshot.png
│   └── screenshot2.png
│
├── texts.json
├── index.html
├── style.css
├── script.js
│
├── README.md
└── README-fa.md
💻 Running Locally
1. Clone the repository
git clone https://github.com/parsasdg8/programming-facts-typing-test.git
2. Open the project
cd programming-facts-typing-test

Open the project folder in your preferred code editor.

3. Run with a local server

Because the application uses the Fetch API to load texts.json, it is recommended to run the project using a local development server.

If you are using VS Code, you can use the Live Server extension.

Then:

Right Click → Open with Live Server

The application will load the programming facts from:

texts.json
🎯 Project Purpose

This project was created as a practical JavaScript project to practice and combine several fundamental web development concepts.

The main goals were to work with:

DOM Manipulation
Event Handling
Async / Await
Fetch API
JSON
LocalStorage
Timers
Arrays
Dynamic HTML
Browser-based data storage
Basic application logic

The programming facts also make the typing practice more useful for developers by combining typing practice with programming-related knowledge.
```


👨‍💻 Creator

Parsa Sadeghi

<a href="https://github.com/parsasdg8"> <img src="https://img.shields.io/badge/GitHub-parsasdg8-181717?style=for-the-badge&logo=github" alt="GitHub"> </a>
<a href="https://www.linkedin.com/in/parsa-sadeghi-141a0b389?utm_source=share_via&utm_content=profile&utm_medium=member_android"> <img src="https://img.shields.io/badge/LinkedIn-Parsa%20Sadeghi-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"> </a> 



⭐ Project

If you find this project useful or interesting, consider giving it a star.
