// function to start the quiz
function startQuiz() {
  document.querySelector('.quiz-intro').style.display = 'none';
  document.querySelector('.question-one').style.display = 'block';
}

// function to show a specific question based on index
function showQuestion(index) {
  const intro = document.querySelector('.quiz-intro');
  const questions = document.querySelectorAll('.question');
  if (index === -1) {
    intro.style.display = 'block';
    questions.forEach(q => q.style.display = 'none');
  } else {
    intro.style.display = 'none';
    questions.forEach((question, i) => {
      question.style.display = i === index ? 'block' : 'none';
    });
  }
}

// start quiz button logic
document.getElementById('start-quiz').addEventListener('click', startQuiz);

// next question button logic
document.querySelectorAll('#next-question').forEach((button, index) => {
  button.addEventListener('click', () => {
    showQuestion(index + 1);
  });
});

// previous question button logic
document.querySelectorAll('#previous-question').forEach((button, index) => {
  button.addEventListener('click', () => {
    showQuestion(index - 1);
  });
});

// submit quiz button logic
document.getElementById('submit-quiz').addEventListener('click', submitQuiz);

// quiz submission logic
function submitQuiz() {
  const questions = document.querySelectorAll('.question');
  const answers = [];
  questions.forEach((question, i) => {
    const selected = question.querySelector('input[type="radio"]:checked');
    answers.push(selected ? selected.value : null);
  });
  console.log('Quiz submitted:', answers);
  // Display results to the user
  const resultContainer = document.createElement('div');
  resultContainer.classList.add('quiz-results');
  resultContainer.innerHTML = `
    <h2>Quiz Results</h2>
    <p>Your answers: ${answers.join(', ')}</p>
  `;
  document.body.appendChild(resultContainer);
}
// restart quiz button logic
document.querySelectorAll('#restart-quiz').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.quiz-results')?.remove();
    document.querySelector('.quiz-intro').style.display = 'block';
    showQuestion(0);
  });
});
// Initialize the quiz by hiding all questions except the intro
document.querySelectorAll('.question').forEach((question, index) => {
  question.style.display = index === 0 ? 'block' : 'none';
});

// correct answers
const correctAnswers = {
  q1: 1,
  q2: 1,
  q3: 2,
  q4: 2,
  q5: 1
};
