//---HUMBURGER-----------------------------------------------------------

const humburger = document.querySelector('.menu__humburger');
const menu = document.querySelector('.menu');
const list = document.querySelector('.menu__list');

humburger.addEventListener('click', () => {
    humburger.classList.toggle('active');
    menu.classList.toggle('active');

    if (humburger.classList.contains('active')) {
        console.log("The function works correctly!");
        menu.classList.remove('close')
        list.style.display = 'block';
    } else {
        menu.classList.add('close');
        window.setTimeout(function () {
            list.style.display = 'none';
        }, 2000);
    };
});





