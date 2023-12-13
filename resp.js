burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.navList')
right=document.querySelector('.right')

burger.addEventListner('click',()=>{
    navbar.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('v-class-resp');   
})