let gotohome = document.querySelector(".goto-home");
let home = document.querySelector(".home");

home.addEventListener("click", function(){
    gotohome.click();
})


let tl = gsap.timeline();


tl.from(".logo", {
    x: -100,
    opacity: 0,
    duration: .3,
    delay: .5
});

tl.from("li", {
    y: -80,
    opacity: 0,
    duration: .3,
    stagger: .1
}, "ani");

tl.from(".left h1", {
  y: -80,
  opacity: 0,
  duration: 1,
  stagger: .3
}, "a")
tl.from(".left p", {
  x: -80,
  opacity: 0,
  duration: 1,
  stagger: .3
}, "a")

tl.from(".right .box-1", {
  x: 80,
  opacity: 0,
  duration: 1,
  stagger: .3
}, "b")
tl.from(".right .box-2", {
  x: -80,
  opacity: 0,
  duration: 1,
  stagger: .3
}, "b")


 
  

  let menu = document.querySelector(".p-img");
  let phone = document.querySelector(".ph-i");
  
  const imageSrc1 = '/assert/cross-svgrepo-com.svg';
  const imageSrc2 = '/assert/burger-menu-right-svgrepo-com.svg';
  
  menu.addEventListener("click", function(){
    
    
    if (phone.src.endsWith(imageSrc1)) {
      phone.src = imageSrc2;
      gsap.to(".p-list", {
        right: "-115vw",
        duration: 1,
        stagger: .1
    });
  } else {
      phone.src = imageSrc1;
      gsap.to(".p-list", {
        right: "1vw",
        duration: 1,
        stagger: .1
    });
  }
    
  })