function correctFeedback1(event) {
  var feedback = document.getElementById('feedback1');
  feedback.innerHTML = '<h3 class="feedbackCorrect">✓ Good job!</h3>'
}

function incorrectFeedback1(event) {
  var feedback = document.getElementById('feedback1');
  feedback.innerHTML = '<h3 class="feedbackInorrect">✗ Try again!</h3>'
}

function correctFeedback2(event) {
  var feedback = document.getElementById('feedback2');
  feedback.innerHTML = '<h3 class="feedbackCorrect">✓ Good job!</h3>'
}

function incorrectFeedback2(event) {
  var feedback = document.getElementById('feedback2');
  feedback.innerHTML = '<h3 class="feedbackInorrect">✗ Try again!</h3>'
}
