const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert('Button clicked!');
    });
});

function toggleAnswer(icon) {
    const answer = icon.parentNode.nextElementSibling;
    const iconClass = icon.classList.contains('plus-icon') ? 'minus-icon' : 'plus-icon';
    icon.classList.toggle(iconClass);
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  }