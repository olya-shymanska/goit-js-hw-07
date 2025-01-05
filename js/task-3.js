const inputEl = document.querySelector('#name-input');

const inputSpan = document.querySelector('#name-output')

inputSpan.textContent = '';

inputEl.addEventListener('input', () => {
    inputSpan.textContent = inputEl.value.trim() || 'Anonymous';
}); 