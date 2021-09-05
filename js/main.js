const brandBtn = document.querySelector('.brand__btn'),
      brandList = document.querySelector('.brand__list--hide');


brandBtn.addEventListener('click', () => {
    brandList.classList.toggle('brand__list--hide');
});




 const headerToggle = document.querySelector('.header-nav__toggle'),
       headerList = document.querySelector('.header-nav__list'),
       hero = document.querySelector('.hero');


headerToggle.addEventListener('click', () => {
    headerList.classList.toggle('header-nav__list--active');
    hero.classList.toggle('hero--active');
 });






 new SmoothScroll('a[href*="#"]', {
	speed: 300
});