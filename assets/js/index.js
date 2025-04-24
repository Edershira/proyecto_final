'use strict'

/* Funcion para detectar el ancho del dsipositivo o de la panatalla para poder determinar cuando se pueden hacer los efectos o poder modificar los efectos  */
const detectarWidth = function getWidth() {
    return window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;  
}

/* Función para hacer que el menú se vuelva fixed cuando se hace scroll */
window.addEventListener('scroll', () => {
    let body = document.querySelector('body')
    let scrollPosition = window.scrollY
    const header = document.querySelector('.header')
    /* Aquí uso la función para que cuando el ancho de la pantalla sea mayor a 1000 se haga el efecto de menú fixed */
    if(detectarWidth() > 1000) {
        if(scrollPosition > 150) {
            header.classList.add('header__scroll')
        } else {
            header.classList.remove('header__scroll')
        }
    }
}) 

/* Constantes para el menú responsive */
const btnHamburguesa = document.querySelector('.header__hamburguesa');
const headerNav = document.querySelector('.header__nav');

/* Función para hacer que el menú sea responsive */
btnHamburguesa.addEventListener('click', function() {
    if(headerNav.style.display === 'block') {
        headerNav.style.display = 'none';
    } else {
        headerNav.style.display = 'block';
    }
})

/* Función para que el texto de la sección Sobre Mí tenga un efecto de Parallax sobre la foto */
window.addEventListener('scroll', () => {
    /* Aquí uso la función de detectar el ancho de la pantalla para que cuando esta sea mayor a 1000 se haga el efecto Parallax */
    if(detectarWidth() > 1300) {
        const info = document.querySelector('.sobre__info')
        let value = window.scrollY;

        info.style.top = value * 0.07 + 'px';
    }
    
})

/* Las constantes y la función para hacer el módulo de Tabs en la sección de servicios */
const tabBtn = document.querySelectorAll('.servicios__boton')
const article = document.querySelectorAll('.servicios__article')

tabBtn.forEach(function(each, i) {
    tabBtn[i].addEventListener('click', function() {
        article.forEach(function(each, i) {
            article[i].classList.remove('isActive')
        })
        article[i].classList.add('isActive')

        tabBtn.forEach(function(each, i) {
            tabBtn[i].classList.remove('isActive')
        })
        tabBtn[i].classList.add('isActive')
    })
})

/* La función para hacer que aparezca el botoón que devuelve al principio de la página */
window.addEventListener('scroll', function() {
    let body = this.document.querySelector('body')
    let scrollPosition = this.window.scrollY
    const btnVolver = this.document.querySelector('.btnVolver')

    /* Aquí uso la función de detectar el ancho de la página para que cuando sea mayor que 1000 haga falta desplazarse 800 hacia abajo para que aparezca el boton */
    if(detectarWidth() > 1000) {
        if(scrollPosition > 800) {
            btnVolver.classList.add('isActive')
        } else {
            btnVolver.classList.remove('isActive')
        }
    }

    /* Aquí uso la función de detectar el ancho de la página para que cuando sea menor que 1000 haga falta desplazarse 1000 hacia abajo para que aparezca el boton */
    if(detectarWidth() < 1000) {
        if(scrollPosition > 1000) {
            btnVolver.classList.add('isActive')
        } else {
            btnVolver.classList.remove('isActive')
        }
    }
})
