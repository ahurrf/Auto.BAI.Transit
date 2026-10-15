// 1. Мобильное меню (бургер)
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('navMenu');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Закрытие меню при клике на ссылки
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// 2. Логика переключения вкладок (Страны)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок и панелей
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));

        // Добавляем активный класс нажатой кнопке
        button.classList.add('active');

        // Находим и показываем нужную вкладку по атрибуту data-tab
        const targetTabId = button.getAttribute('data-tab');
        document.getElementById(targetTabId).classList.add('active');
    });
});

// 3. Логика раскрытия дополнительной информации в услугах по кнопке «Подробнее»
const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.service-card');
        card.classList.toggle('show-details');

        // Меняем текст кнопки в зависимости от состояния
        if (card.classList.contains('show-details')) {
            button.textContent = 'Скрыть';
        } else {
            button.textContent = 'Подробнее';
        }
    });
});