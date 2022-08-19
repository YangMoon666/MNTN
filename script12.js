// Меню
const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.navbar');
const logBody = document.querySelector('.header__body_box_logo_login');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        logBody.classList.toggle('_active');
    });
}

//Навигатор
const menuLinks = document.querySelectorAll('.navigator_system[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            
            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

// Изменение цвета при наведении
function ChangeOver() {
    var a = document.querySelectorAll('.color_header');
    a[0].style.fill = '#FBD784';
    a[1].style.fill = '#FBD784';
    a[2].style.color = '#FBD784';
};
function ChangeOut() {   
    var a = document.querySelectorAll('.color_header');
    a[0].style.fill = 'white';
    a[1].style.fill = 'white';
    a[2].style.color = 'white';
}

function ChangeOver2() {
    var a = document.querySelectorAll('.color_header_2');
    a[0].style.color = '#FBD784';
    a[1].style.fill = '#FBD784';
};
function ChangeOut2() {   
    var a = document.querySelectorAll('.color_header_2');
    a[0].style.color = 'white';
    a[1].style.fill = 'white';
}

function ChangeOver3() {
    var a = document.querySelectorAll('.color_header_3');
    a[0].style.color = 'white';
    a[1].style.fill = 'white';
};
function ChangeOut3() {   
    var a = document.querySelectorAll('.color_header_3');
    a[0].style.color = '#FBD784';
    a[1].style.fill = '#FBD784';
}

