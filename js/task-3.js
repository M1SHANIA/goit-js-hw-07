document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#name-input');
    const output = document.querySelector('#name-output');

    input.addEventListener('input', () => {
        const trimmedInput = input.value.trim();
        output.textContent = trimmedInput ? trimmedInput : 'Anonymous';
    });
});
