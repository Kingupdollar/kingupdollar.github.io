 //making question-answer objects in an array
  let questions = [
  {
  "question": "Question 1: What is the highest building in Taiwan?",
  "answer": "Answer: Taipei 101",
  },
  {
  "question": "Question 2: What is the capital city of Taiwan?",
  "answer": "Answer: Taipei City",
  },
  {
  "question": "Question 3: How much is Taiwan's population?",
  "answer": "Answer: 23 million",
  }
];
 
 //declare a variable to count the number of the clicking behavior
let count1=0;
let count2=0;

 //the function to iterate the question statement
function displayQuestion(event) {
  document.getElementById("question").innerHTML = questions[count1%3].question;
  document.getElementById("answer").innerHTML = "";
  ++count1;
 //adjusting the display of the answer 
 count2=count1-1;
}
 //the function to iterate the answer
function displayAnswer(event) {
 //showing answer corresponding to the question
  if (count1===count2+1){
    document.getElementById("answer").innerHTML = questions[count2%3].answer;
    count2=count1;
  }
 //asking the user to click the question button first
  else {
    document.getElementById("answer").innerHTML = "Please click the question first.";
    count2=count1;
  }
}
