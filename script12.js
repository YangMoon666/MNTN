window.onload = function () {
    document.querySelector('.load').classList.add('_un_active');
}
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


const animItems = document.querySelectorAll('.flex_box__body');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_look');
            } else {
                animItem.classList.remove('_look');
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}
"use strict"
// Паралакс
const parallax = document.querySelector('.page');
if (parallax){
    const content = document.querySelector('.box_1');
    const clouds = document.querySelector('.page__img_parallax_item_clouds');
    const mountains = document.querySelector('.page__img_parallax_item_mountains');
    const human = document.querySelector('.page__img_parallax_item_human');

    const forClouds = 40;
    const forMountains = 20;
    const forHuman = 10;

    const speed = 0.05;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle() {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);

        clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;
        mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;
        human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;

        requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;

    });


    // let thresholdSets = [];
    // for (let i = 0; i <= 1.0; i += 0.005) {
    //     thresholdSets.push(i);
    // }
    // const callback = function(entries, observer) {
    //     const scrollTopProcent = window.pageYOffset / parallax.offsetHeight * 100;
    //     setParallaxItemsStyle(scrollTopProcent);
    // };
    // const observer = new IntersectionObserver(callback, {
    //     threshold: thresholdSets
    // });

    // observer.observe(document.querySelector('.flex_box'));

    // function setParallaxItemsStyle(scrollTopProcent) {
    //     content.style.cssText = `transform: translate(0%,-${scrollTopProcent / 9}%);`;
    //     mountains.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 6}%);`;
    //     human.parentElement.style.cssText = `transform: translate(0%,-${scrollTopProcent / 3}%);`;
    // }
}



