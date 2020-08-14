
//SLIDER

//Объявление переменных

let dots = document.querySelectorAll('.dot')  //поместила в переменную dots все данные с классом .dot)
let slides = document.querySelectorAll('.slide')    //поместила в переменную slides все данные с классом .slide)
let navigations = document.querySelectorAll('.block_projects_navigation_item')   //поместила в переменную navigations все данные с классом .block_projects_navigation_item)
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

let index = 0;

const entities = [
    {
        city: 'Rostov-on-Don LCD admiral',
        area: '81 m2',
        time: '3.5 months'
    },
    {
        city: 'Sochi Thieves',
        area: '105 m2',
        time: '4 months'
    },
    {
        city: 'Rostov-on-Don Patriotic',
        area: '93 m2',
        time: '3 months'
    }
]

const city = document.querySelector('.citytext')
const area = document.querySelector('.areatext')
const time = document.querySelector('.timetext')


const setEntity = (index) => {
    city.innerHTML = entities[index].city
    area.innerHTML = entities[index].area
    time.innerHTML = entities[index].time
}

function activeDot(index) {
    dots.forEach((item) => {
        item.classList.remove('active')
    });
    dots[index].classList.add('active');
}


//activeDot(1);

function activeNavigation(index) {
    navigations.forEach((item) => {
        item.classList.remove('active')
    });
    navigations[index].classList.add('active');
}




//activeNavigation(1);

function activeSlide(index) {
    slides.forEach((item) => {
        item.classList.remove('active')
    });
    slides[index].classList.add('active');
}



//activeSlide(0);


function activeItem(index) {
    activeNavigation(index),                //объединила все функции в одну
    activeSlide(index),
    activeDot(index),
    setEntity(index)
};

//activeItem(1);



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


//let currentIndex = 0
next.addEventListener('click', () => {                               //обработчик на стрелку next
    if (index === entities.length - 1) {
        index = 0;
        //activeItem(index);
        //console.log(index);
    } else {
        index++;
        //activeItem(index);
        //console.log(index);
    }
    activeItem(index);
});



prev.addEventListener('click', () => {               //обработчик на стрелку prev
    if (index === 0) {
        index = entities.length - 1;
        activeItem(index);
    } else {
        index--;
        activeItem(index);
    }
});



