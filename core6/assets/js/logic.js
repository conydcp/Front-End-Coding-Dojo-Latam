document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const addDefinitionButton = document.getElementById('addDefinitionButton');
    const likeButtons = document.querySelectorAll('.likeButton');

    // Toggle login/logout text
    loginButton.addEventListener('click', () => {
        if (loginButton.textContent === 'Iniciar sesión') {
            loginButton.textContent = 'Cerrar sesión';
        } else {
            loginButton.textContent = 'Iniciar sesión';
        }
    });

    // Remove the add definition button
    addDefinitionButton.addEventListener('click', () => {
        addDefinitionButton.style.display = 'none';
    });

    // Like button functionality
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const title = button.getAttribute('data-title');
            alert(`${title} was liked`);

            // Increment like count
            const likeText = button.textContent;
            const likeCount = parseInt(likeText.match(/\d+/)[0], 10);
            button.textContent = likeText.replace(/\d+/, likeCount + 1);
        });
    });
});