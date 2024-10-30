const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.toggle-icon');
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

        icon.textContent = icon.textContent === '+' ? '−' : '+';
    });
});
