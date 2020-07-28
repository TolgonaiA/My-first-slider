
//SLIDER

//Объявление переменных

let dots = document.querySelectorAll('.dot')  //поместила в переменную dots все данные с классом .dot)
let slides = document.querySelectorAll('.slide')    //поместила в переменную slides все данные с классом .slide)
let navigations = document.querySelectorAll('.block_projects_navigation_item')   //поместила в переменную navigations все данные с классом .block_projects_navigation_item)
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

let index = 0;

function activeDot(index) {                                //функция для активной dot
    if (index == 0) {
        dots[index].classList.add('active')
        dots[1].classList.remove('active')
        dots[2].classList.remove('active')
    } else if (index == 1) {
        dots[index].classList.add('active')
        dots[0].classList.remove('active')
        dots[2].classList.remove('active')
    } else if (index == 2) {
        dots[index].classList.add('active')
        dots[1].classList.remove('active')
        dots[0].classList.remove('active')
    } 
};

//activeDot(2);

function activeNavigation(index) {                                //функция для активной навигации
    if (index == 0) {
        navigations[index].classList.add('active')
        navigations[1].classList.remove('active')
        navigations[2].classList.remove('active')
    } else if (index == 1) {
        navigations[index].classList.add('active')
        navigations[0].classList.remove('active')
        navigations[2].classList.remove('active')
    } else if (index == 2) {
        navigations[index].classList.add('active')
        navigations[1].classList.remove('active')
        navigations[0].classList.remove('active')
    }  
};

//activeNavigation(0);


function activeSlide(index) {                                   //функция для активного слайда
    if (index == 0) {
        slides[index].classList.add('active')
        slides[1].classList.remove('active')
        slides[2].classList.remove('active')
    } else if (index == 1) {
        slides[index].classList.add('active')
        slides[0].classList.remove('active')
        slides[2].classList.remove('active')
    } else if (index == 2) {
        slides[index].classList.add('active')
        slides[1].classList.remove('active')
        slides[0].classList.remove('active')
    } 
};

//activeSlide(0);


function activeItem(index) {
    activeNavigation(index),                //объединила все функции в одну
    activeSlide(index),
    activeDot(index)
};

//activeItem(2);



dots.forEach((item, indexDot) => {                     //вешаю обработчик на каждую точку
    item.addEventListener('click', () => {         
        index = indexDot;
        activeItem(index);
    });
});

navigations.forEach((item, indexNavigation) => {        //вешаю обработчик
    item.addEventListener('click', () => {
        index = indexNavigation;
        activeItem(index);
    });
});


next.addEventListener('click', () => {              //обработчик на стрелку next
    if (index == 2) {
        index = 0
        activeItem(index);
    } else {
        index++;
        activeItem(index);
    }
});


prev.addEventListener('click', () => {               //обработчик на стрелку prev
    if (index == 0) {
        index = 2;
        activeItem(index);
    } else {  
        index--;
        activeItem(index);
    }
});



