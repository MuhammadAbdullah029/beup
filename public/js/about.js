let gotohome = document.querySelector(".goto-home");
let home = document.querySelector(".home");

home.addEventListener("click", function(){
    gotohome.click();
})


let tl = gsap.timeline();


tl.from(".logo", {
    x: -100,
    opacity: 0,
    duration: .5,
    delay: .5
});

tl.from("li", {
    y: -80,
    opacity: 0,
    duration: .5,
    stagger: .1
}, "ani");

tl.from(".welcome-text ", {
    x:-33,
    opacity: 0,
    duration: .5,
}, "ani");
tl.from(".welcome-para", {
    opacity: 0,
    duration: .3,
});
tl.from(".welcome-btn", {
    opacity: 0,
    duration: .3,
});

tl.from(".img", {
    left: "50%",
    opacity: 0,
    duration: .5,
    stagger: .1
}, "ani");

tl.from(".logo-tag", {
    y: -33,
    opacity: 0,
    duration: .5,
});

gsap.from(".page1 .girl-img .g-img", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page1 .girl-img .g-img",
      scroller: ".main",
      markers: true,
      start: "top 60%",
      end: "top 30%",
      scrub: 2,
    }
  })



  document.addEventListener("DOMContentLoaded", () => {
    const draggables = document.querySelectorAll(".draggable");
  
    draggables.forEach(element => {
      const originalX = element.offsetLeft;
      const originalY = element.offsetTop;
  
      Draggable.create(element, {
        onDragEnd: function() {
          gsap.to(this.target, {
            x: originalX - this.target.offsetLeft,
            y: originalY - this.target.offsetTop,
            duration: 1,
            ease: "elastic.out(1, 0.5)"
          });
        }
      });
    });
  });
  
  

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