const toggle = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.querySelector('.items');

toggle.addEventListener('click' ,() =>{
    navbarLinks.classList.toggle('active')
  
})



const sideButton = document.getElementById('buttonside');
const sideNavLinks = document.querySelector('.nav-side');

sideButton.addEventListener('click' , () => {
    sideNavLinks.classList.toggle('active')
})

