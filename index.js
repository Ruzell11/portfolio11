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

header.forEach((event) => {
    event.addEventListener('click' , ()=>{
        sideNavLinks.classList.remove('active')
        navbarLinks.classList.remove('active')
    })
})

const loader = document.getElementById('preloader');

window.addEventListener('load' , () =>{
    loader.style.display = 'none'
})

window.addEventListener('scroll' , () =>{
    var reveal =  document.querySelectorAll('.information');
    for(var i = 0 ; i < reveal.length; i++){
      var windowHeight = window.innerHeight;  
      var revealItem = reveal[i].getBoundingClientRect().top;
      var revealpoint = 150
      if(revealItem < windowHeight - revealpoint){
        reveal[i].classList.add('active');
      }else{
        reveal[i].classList.remove('active')
      }
    }
})