const toggle = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.querySelector('.items');

toggle.addEventListener('click' ,() =>{
    navbarLinks.classList.toggle('active')
  
})