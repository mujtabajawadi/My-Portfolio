const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var timeout;

const firstPageAnimation = () => {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-20",
    opacity: 0,
    duration: 1.5,
    // delay: '-0.5',
    ease: "slow",
  }).to(".text-to-animate", {
    y: 0,
    ease: "slow",
    stagger: 0.3,
    delay: "-1",
  });
};

const mouseCircleDistort = () => {
  var xScale = 1;
  var yScale = 1;

  var previousX = 0;
  var previousY = 0;
  window.addEventListener("mousemove", (details) => {

    clearTimeout(timeout)
    xScale = gsap.utils.clamp(0.8, 1.2, details.clientX - previousX);
    yScale = gsap.utils.clamp(0.8, 1.2, details.clientY - previousY);

    previousX = details.clientX;
    previousY = details.clientY;

    mouseFollowerCircle(xScale, yScale);

    timeout = setTimeout(() => {
      document.querySelector("#mini-circle").style.transform = `translate(${
        details.clientX - 6
      }px, ${details.clientY - 5}px) scale(1, 1)`;
    },100)
  });
};

mouseCircleDistort()

const mouseFollowerCircle = (xScale, yScale) => {
  window.addEventListener("mousemove", function (details) {
    document.querySelector("#mini-circle").style.transform = `translate(${
      details.clientX - 6
    }px, ${details.clientY - 5}px) scale(${xScale}, ${yScale})`;
  });
};

mouseFollowerCircle();
firstPageAnimation();


document.querySelectorAll('.work').forEach((element) => {
   var rotate = 0;
  var positionDifference = 0;
  var isVisible = false

  var image = element.querySelector("img");
  image.style.display = 'none'
  
 
  element.addEventListener('mousemove', (details) => {

    var diff = details.clientY - element.getBoundingClientRect().top//mouse position inside div element
    console.log(diff)
    positionDifference = details.clientX - rotate
    rotate = details.clientX


   

    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;

    
    if (!isVisible) {
      gsap.to(image, {
        display: 'block',
        opacity: 1,
        ease: Power3,
        top: diff - (imageHeight / 2),
        left: details.clientX - (imageWidth / 2),
        rotate: gsap.utils.clamp(-15, 15, positionDifference),
      });
      isVisible = true
    }

      gsap.to(image, {
    top: diff - (imageHeight/2),
    left: details.clientX - (imageWidth/2),
    rotate: gsap.utils.clamp(-15, 15, positionDifference),
    ease: Power3,
    duration: 0.2
  });
});
  })
  
    element.addEventListener("mouseleave", (details) => {
      var image = element.querySelector("img");
        gsap.to(image, {
          opacity: 0,
          onComplete: () => {
            image.style.display = "none";
            isVisible = false;
          },
        });
      
    });

