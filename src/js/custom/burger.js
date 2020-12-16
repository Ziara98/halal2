    const hamburger = document.getElementById('menu__button'); // Получаем бургер
    const menu = document.querySelector('.nav__inner'); // Получаем меню
    const body = document.getElementsByTagName('body')[0]; // Получаем body
    const nav_link = document.querySelectorAll('.nav__link');
    let screenWidth = window.screen.availWidth; // Получаем текущий размер экрана


    if ($(hamburger).length) {
        hamburger.addEventListener('click', mobileMenu);


        function mobileMenu() {

            if (!hamburger.classList.contains('active')) { // Если бургер не имеет активного класса, то он добавляется
                hamburger.classList.add('active');
                menu.classList.add('nav__inner--open'); // Открытие меню
                body.classList.add('no-scroll'); // Запрет на прокрутку экрана
            } else {
                hamburger.classList.remove('active'); // В противном случае активный класс убирается
                menu.classList.remove('nav__inner--open'); // Меню закрывается
                body.classList.remove('no-scroll'); // Запрет на прокрутку экрана снимается
            }
        }

        // При изменении экрана мобильное меню исчезает при заданной ширине экрана (на текущий момент 1024px)
        window.addEventListener('resize', () => {
            screenWidth = window.screen.availWidth;
            if (screenWidth > 768) {
                hamburger.classList.remove('active'); // В противном случае активный класс убирается
                menu.classList.remove('nav__inner--open'); // Меню закрывается
                body.classList.remove('no-scroll'); // Запрет на прокрутку экрана снимается
            }
        });

        //убираем запрет на скролл страницы,после того как нажали на ссылку в бургер менб
        function addScrollToBody(links) {
            links.forEach(item => {
                item.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    menu.classList.remove('nav__inner--open');
                    body.classList.remove('no-scroll');
                });
            });

        }

        addScrollToBody(nav_link);

    };