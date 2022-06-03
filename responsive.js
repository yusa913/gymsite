const header__btn__menu = document.querySelector('.header__btn');
header__btn__menu.addEventListener('click',menuToggle);




function menuToggle(){
	const header__menu__detail = document.querySelector('.header__nav');



	
	header__menu__detail.classList.toggle('menu__active');
}

