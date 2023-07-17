function Menu(e){
    let list = document.querySelector('ul');
    let thisBlur = document.getElementById('myBlur')
    e.name === 'menu' ?
     (e.name = "close",
     list.classList.add('top-[80px]') , 
     list.classList.add('opacity-100'), 
     list.classList.add('fixed'),
     thisBlur.classList.add('blur-sm')) :

     ( e.name = "menu" ,
     list.classList.remove('top-[80px]'),
     list.classList.remove('opacity-100'),
     list.classList.remove('fixed'),
     thisBlur.classList.remove('blur-sm'))
  }
  
let navbar = document.getElementById('navbar');
let myNav = document.getElementById('thisnav');

function makeNavbarSticky() {
    if (window.scrollY > 0) {
        navbar.classList.add('sticky');
        myNav.classList.add('bg-white');
        myNav.classList.add('shadow-md');
        myNav.classList.add('rounded-md');
        console.log('hello Im sticky')

    } else {
        navbar.classList.remove('sticky');
        myNav.classList.remove('bg-white');
        myNav.classList.remove('shadow-md');
        console.log('hello Im sticky')
    }
}

window.addEventListener('scroll', makeNavbarSticky);



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });




  
  
  
  


