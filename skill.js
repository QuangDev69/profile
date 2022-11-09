//skills
let skills = document.querySelector(".skills-section");
let spans =  document.querySelectorAll(".inner-skills span");

window.onscroll = function() {
    if (window.scrollY >= skills.offsetTop -300){
        spans.forEach((span) => {
            span.style.width = span.dataset.value;
        })
    }
}
//contact
const openModal = document.querySelector(".popup-contact");
const modal = document.querySelector(".box-inner");
const closeModal = document.querySelector(".bg-contact");

openModal.addEventListener("click", function(){
    modal.classList.add("open-modal");
})
closeModal.addEventListener("click", function(){
    modal.classList.remove("open-modal");
})
//Nav
const navbar = document.getElementById("nav");
const navHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", function(){
const scrollHeight = window.pageYOffset;
if(scrollHeight > navHeight)
{
 navbar.classList.add("fixed-nav");   
}else{
    navbar.classList.remove("fixed-nav");
}
})


let animation = document.querySelectorAll(".show-on-scroll");
    function toggleAniWindow(element){    
         //toa do h1
         var rect = element.getClientRects()[0]
         var heightScreen = window.innerHeight  

         //check xem co phai ben trong hay khoong
         if(!(rect.bottom < 0 || rect.top > heightScreen)){
         //ben trong
             element.classList.add('start')
         }
         else {
             //ben ngoai
             element.classList.remove('start')
         }
    }
    window.onscroll =function checkAnimation() {
        animation.forEach(element => {     
            toggleAniWindow(element)       
        });

}

const navBtn = document.querySelector(".nav-btn");
const navList= document.querySelector(".nav-list");
const links = document.querySelector(".nav-links")

navBtn.addEventListener("click", function(){
    //Show nav list
    const linksheight = links.getBoundingClientRect().height; 
    const containerHeight = navList.getBoundingClientRect().height;
    if(containerHeight === 0){
        navList.style.height =`${linksheight}px`
    }
    else {
        navList.style.height = 0;
    }
    // Navbarr btn
    navBtn.classList.toggle("active");
})




//Footer
const data = document.getElementById("date")
date.innerHTML = new Date().getFullYear()


/////settings box 
// openbox
document.querySelector(".icon .setting").onclick = function(){
    document.querySelector(".setting-box").classList.toggle("open");
    this.classList.toggle("fa-spin");
}
//Change color
const colorList = document.querySelectorAll(".color-list li");
colorList.forEach(li => {
    li.addEventListener("click",(e)=> {
        document.documentElement.style.setProperty('--black-color',e.target.dataset.color);
        document.documentElement.style.setProperty('--white-color',e.target.dataset.color);
        //Set local Storage
        localStorage.getItem("color-option",e.target.dataset.color)
        //remove active
        e.target.parentElement.querySelectorAll(".active").forEach
        (element =>{   
            element.classList.remove("active");
        })
        //add active
        e.target.classList.add("active");
    })
})

///local storage
let mainColor = localStorage.getItem("color-option")    
if(mainColor !== null)
{
    document.documentElement.style.setProperty('--black-color',e.target.dataset.color);
    document.documentElement.style.setProperty('--white-color',e.target.dataset.color);
    //remove
    document.querySelectorAll(".color list li").forEach
    (element =>{   
        element.classList.remove("active");
    })
    //add
    if(element.dataset.color === mainColor)
    {
        element.classList.add("active");
    }

}
