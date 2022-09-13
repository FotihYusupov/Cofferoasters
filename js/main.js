const navBtn = document.querySelector(".header-section__nav-btn")

navBtn.addEventListener('click', () => {
    document.querySelector(".header-section__wrapper").classList.toggle('header-section__nav--active')
})