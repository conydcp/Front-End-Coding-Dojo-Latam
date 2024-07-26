document.addEventListener('DOMContentLoaded', function() {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const likesCount = this.previousElementSibling;
            let likes = parseInt(likesCount.textContent);
            likesCount.textContent = `${++likes} like(s)`;
        });
    });
});
