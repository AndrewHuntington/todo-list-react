# Another Stupid Todo List (React Version)

A simple todo list app built with React, JavaScript, and CSS.

# Project Screen Shot

![Screenshot of Todo App](/other/ASTLR_Screenshot.png "Todo App")

# Installation and Setup Instructions

Clone down the repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`http://localhost:3000`

# Reflection

This is a project that was built for Colt Steele's excellent [The Modern React Bootcamp](https://www.udemy.com/course/modern-react-bootcamp) on Udemy. The main purpose of this project was to solidify my understanding of how to implement HTML forms in React. The secondary objective of this project was to practice passing state and functions between components.

One of the main challenges I faced while creating this app was getting the browser's `localStorage` to save the last task entered into the todo list. I think the problem has to do with the asynchronous nature of React's `setState` function, and I was able to overcome it with a hacky solution that involves using `async/await`. To be honest, I'm not certain how it works completely, and asynchronous JavaScript is definitely an area in which I need more study.

# Additional Acknowledgements

This project was bootstrapped with `react-create-app` and its styles are based [Sawsan's Todo List UI with VueJs](https://codepen.io/saawsan/pen/jayzeq) (with further tweaks made by me.) All other code is my own.

Copywrite 2021, Andrew Huntington.
