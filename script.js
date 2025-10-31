document.addEventListener('DOMContentLoaded', () => {
    const startMenuButton = document.querySelector('.start-menu-button');
    const startMenu = document.querySelector('.start-menu');
    const desktop = document.querySelector('.desktop');

    startMenuButton.addEventListener('click', (event) => {
        event.stopPropagation();
        startMenu.classList.toggle('hidden');
    });

    desktop.addEventListener('click', () => {
        if (!startMenu.classList.contains('hidden')) {
            startMenu.classList.add('hidden');
        }
    });

    startMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
