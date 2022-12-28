/*=================== SHOW MENU ================*/
const navMenu = document.getElementById('nav-menu')
    navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===========*/
/* validation if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })    
}


/*=============== MENU HIDDEN ==========*/
/* validation if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })    
}


