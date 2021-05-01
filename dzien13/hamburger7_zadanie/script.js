const arrowButton = document.querySelector('.arrow');
const menu = document.querySelector('nav');

arrowButton.addEventListener('click', function(){
    arrowButton.classList.toggle('show');
    menu.classList.toggle('show');
});