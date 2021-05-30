const toggle = document.querySelector('.toggle_btn');
const menu = document.querySelector('.header_menubox')

toggle.addEventListener('click', ()=>{
    menu.classList.toggle('active'); 
})