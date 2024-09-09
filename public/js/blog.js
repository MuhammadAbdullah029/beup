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
    
  });


  document.querySelectorAll('.read-more-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const moreText = this.previousElementSibling;
      if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        this.textContent = "Read Less";
      } else {
        moreText.style.display = "none";
        this.textContent = "Read More";
      }
    });
  });
  


  let tl = gsap.timeline();


  tl.from(".logo", {
    x: -150,
    opacity: 0,
    duration: .5
  });
  
  tl.from("li", {
    y: -80,
    opacity: 0,
    duration: .5,
    stagger: .1
  });
  tl.from(".left img", {
    x: -180,
    opacity: 0,
    duration: .3,
  });
  tl.from(".right h1", {
    x: 180,
    opacity: 0,
    duration: .3,
  });
  