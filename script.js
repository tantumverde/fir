document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('.nav-menu');
    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Анимация кнопки бургер-меню
        this.classList.toggle('active');
    });
});
// Добавляем обработчик для кнопки прокрутки
document.getElementById('scrollButton').addEventListener('click', function() {
    document.getElementById('targetParagraph').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById("scrollButton").addEventListener("click", function() {
    const targetElement = document.getElementById("targetParagraph");
    targetElement.scrollIntoView({ behavior: 'smooth' });
});
