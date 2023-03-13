const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = form.elements.username.value;
    const password = form.elements.password.value;

    console.log(`Username: ${username}, Password: ${password}`);
});