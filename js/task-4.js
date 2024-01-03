document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const user = {};

        for (const [key, value] of formData.entries()) {
            if (!value.trim()) {
                alert('All form fields must be filled in');
                return;
            }
            user[key] = value.trim();
        }

        console.log(user);
        loginForm.reset();
    });
});
