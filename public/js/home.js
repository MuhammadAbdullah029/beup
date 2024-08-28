function swipper() {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}


swipper();


  function menu() {
    let menu = document.querySelector(".p-img");
    let phone = document.querySelector(".ph-i");
    
    const imageSrc1 = '/assert/cross-svgrepo-com.svg';
    const imageSrc2 = '/assert/burger-menu-right-svgrepo-com.svg';
    
    menu.addEventListener("click", function(){
      var sap = gsap.timeline();
      if (phone.src.endsWith(imageSrc1)) {
        phone.src = imageSrc2;
        sap.to(".p-list", {
          right: "-115vw",
          duration: 1,
          stagger: .1
      });
    } else {
        phone.src = imageSrc1;
        sap.to(".p-list", {
          right: "1vw",
          duration: 1,
          stagger: .1
      });
    }
      
    });
  }
  menu()

const tl = gsap.timeline();

tl.from(".loader h1", {
  x:150,
  opacity: 0,
  duration: .5,
  stagger: 1
})
tl.to(".loader", {
  top:"-100%",
  opacity: 0,
  duration: .5,
})
tl.from(".logo", {
    x: -100,
    opacity: 0,
    duration: .3,
}, "b");

tl.from("li", {
    y: -80,
    opacity: 0,
    duration: .3,
    stagger: .1
}, "b");

tl.from(".left .text h1", {
  y: -85,
  opacity: 0,
  duration: .3,
  stagger: .1
}, "a");
tl.from(".left .text .line", {
  y: -85,
  opacity: 0,
  duration: .3,
  stagger: .1
}, "a");
tl.from(".right .slider-container", {
  x: "100%",
  opacity: 0,
  duration: .5,
  stagger: .1
});
tl.from(".left .paragraph", {
  opacity: 0,
  duration: .5,
  stagger: .1
});


let g = gsap

// g.from(".page-z .new-img", {
//   x: -195,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".page-z .new-img",
//     scroller: ".main",
//     // markers: true,
//     start: "top 90%",
//     end: "top 20%",
//     scrub: 2,
    
//   }
// })
// g.from(".page-z .sr", {
//   x: 195,
//   opacity: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".page-z .sr",
//     scroller: ".main",
//     // markers: true,
//     start: "top 90%",
//     end: "top 30%",
//   }
// })
g.from(".page .cards .card .anim-img", {
  opacity: 0,
  duration: 1,
  stagger: .5,
  scrollTrigger: {
    trigger: ".page .anim-img",
    scroller: ".main",
    // markers: true,
    start: "top 80%",
    end: "top 30%",
    scrub: 2,
  }
})




let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function autoSlide() {
    changeSlide(1);
}

// Change slide every 5 seconds
setInterval(autoSlide, 5000);



const container = document.getElementById('scrolling-container');
        const text = document.getElementById('scrolling-text');
        const content = "&nbsp; &nbsp; &nbsp; Reimagine your sales & support team ";
        let isScrolling = false;
        let lastScrollTop = 0;
        let scrollTimeout;
        
        // Duplicate the text to create a seamless loop
        text.innerHTML = content.repeat(4);
        
        function setInitialPosition() {
            const textWidth = text.offsetWidth;
            const containerWidth = container.offsetWidth;
            text.style.left = "0px";
        }
        
        function animate() {
            if (!isScrolling) {
                const currentPosition = parseFloat(text.style.left) || 0;
                const newPosition = currentPosition - 1;
                const textWidth = text.offsetWidth / 2; // Divide by 2 because we repeated the text twice
                
                if (newPosition <= -textWidth) {
                    text.style.left = "0px";
                } else {
                    text.style.left = newPosition + "px";
                }
            }
            requestAnimationFrame(animate);
        }
        
        
        setInitialPosition();
        animate();

        