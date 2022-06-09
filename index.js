const toggle = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.querySelector('.items');
const sideButton = document.getElementById('buttonside');
const sideNavLinks = document.querySelector('.nav-side');
const header = document.querySelectorAll('.head')


toggle.addEventListener('click' ,() =>{
    navbarLinks.classList.toggle('active')
  
})


sideButton.addEventListener('click' , () => {
    sideNavLinks.classList.toggle('active')
   
})

header.forEach(function(event){
    event.addEventListener('click' , ()=>{
        sideNavLinks.classList.remove('active')
    })
})