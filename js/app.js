'use strict'

// Initialize a variable to keep track of correct answers
let correctAnswers = 0;

// Function to ask a yes or no question and validate the response
function askYesNoQuestion(question, correctAnswer) {
    let userResponse = prompt(question).toLowerCase(); // Normalize input to lowercase

    // Check if the user's response is correct
    if (userResponse === 'y' || userResponse === 'yes') {
        alert('Correct!');
        correctAnswers++;
    } else if (userResponse === 'n' || userResponse === 'no') {
        alert('Incorrect.');
    } else {
        alert('Please enter "yes" or "no".');
    }https://github.com/Diana43gek/-about-me.git
}

// Ask five yes or no questions
askYesNoQuestion('Question 1: Is my name Diana?', 'yes');
askYesNoQuestion('Question 2: am I a coder?', 'yes');
askYesNoQuestion('Question 3: Do i like cats?', 'yes');
askYesNoQuestion('Question 4: Is the Earth flat?', 'no');
askYesNoQuestion('Question 5: Are there 365 days in a year?', 'yes');

// Display the total number of correct answers
alert(`You got ${correctAnswers} out of 5 questions correct.`);
// Ask the user for their name
let userName = prompt("What's your name?");

// Check if the user provided a name
if (userName !== null && userName !== "") {
    // Create a personalized greeting
    let greeting = `Hello, ${userName}! Welcome to our website.`;

    // Display the greeting to the user
    alert(greeting);

    // Display the user's name in a final message
    alert(`Thank you, ${userName}, for visiting our site.`);
} else {
    // Handle the case where the user didn't provide a name
    alert("You didn't provide your name, but welcome to our site!");
}