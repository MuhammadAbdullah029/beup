let gotohome = document.querySelector(".goto-home");
let home = document.querySelector(".home");

home.addEventListener("click", function(){
    gotohome.click();
})

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
      card.addEventListener('click', function() {
          const targetId = this.getAttribute('data-target');
          const targetElement = document.getElementById(targetId);
          targetElement.scrollIntoView({ behavior: 'smooth' });
      });
  });
});



function swiper() {
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
  });

}

swiper();

const container = document.querySelector('.scroller-container');
        const content = document.querySelector('.scroller-content');
        
        // Clone the content to create the infinite effect
        content.innerHTML += content.innerHTML;

        let scrollAmount = 0;
        const step = 0.7; // Adjust for faster/slower scrolling
        let isScrolling = true;
        let animationFrameId = null;

        function infiniteScroll() {
            if (isScrolling) {
                scrollAmount += step;
                if (scrollAmount >= content.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                container.scrollLeft = scrollAmount;
            }
            animationFrameId = requestAnimationFrame(infiniteScroll);
        }

        // Start the infinite scroll
        infiniteScroll();

        // Function to add event listeners to items
        function addItemListeners(item) {
            item.addEventListener('mouseenter', () => {
                isScrolling = false;
                cancelAnimationFrame(animationFrameId);
            });
            item.addEventListener('mouseleave', () => {
                isScrolling = true;
                infiniteScroll();
            });
        }

        // Add event listeners to all items, including cloned ones
        document.querySelectorAll('.scroller-item').forEach(addItemListeners);

        // Pause scrolling when mouse is over the container
        container.addEventListener('mouseenter', () => {
            isScrolling = false;
            cancelAnimationFrame(animationFrameId);
        });

        // Resume scrolling when mouse leaves the container
        container.addEventListener('mouseleave', () => {
            isScrolling = true;
            infiniteScroll();
        });


        
let tl = gsap.timeline();


tl.from(".logo", {
  x: -100,
  opacity: 0,
  duration: .5
});

tl.from("li", {
  y: -80,
  opacity: 0,
  duration: .5,
  stagger: .1
}, "ani");
tl.from(".aa", {
  opacity: 0,
  duration: .5,
  stagger: .1
});
tl.from(".left .flex .text h1", {
  x: -115,
  opacity: 0,
  duration: .3,
}, "a")
tl.from(".left p", {
  x: -115,
  opacity: 0,
  duration: .3,
})
tl.from(".left .cont", {
  opacity: 0,
  duration: .3,
})
tl.from(".right img", {
  x: 115,
  opacity: 0,
  duration: .5,
}, "a")





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

// document.querySelector(".refresh").addEventListener("click", function(){
//   location.reload()
// })

