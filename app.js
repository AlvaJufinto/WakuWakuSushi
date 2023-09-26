function navShow() {
    const navBurger = document.querySelector('.nav-burger');
    const mobileNav = document.querySelector('.nav-mobile')
    const navMobileBurger = document.querySelector('.nav-mobile .nav-burger');


    navBurger.addEventListener('click', () => {
        mobileNav.classList.add('open')
    })

    navMobileBurger.addEventListener('click', () => {
        mobileNav.classList.remove('open')
    })
}

navShow();