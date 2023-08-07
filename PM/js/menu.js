(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });
})();

desp = document.querySelectorAll('li.nav__items:has(ul.submenu)')
desp.forEach(element => {
  element.addEventListener('click',()=>{
    element.classList.toggle('action')
    console.log("Oa")
  })
});
