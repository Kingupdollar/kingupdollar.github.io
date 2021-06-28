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
let count1=0;
let count2=0;

function displayQuestion(event) {
  document.getElementById("question").innerHTML = questions[count1%3].question;
  document.getElementById("answer").innerHTML = "";
  ++count1;
  count2=count1-1;
}
 
function displayAnswer(event) {
  if (count1===count2+1){
    document.getElementById("answer").innerHTML = questions[count2%3].answer;
    count2=count1;
  }
  else {
    document.getElementById("answer").innerHTML = "Please click the question first.";
    count2=count1;
  }
}
