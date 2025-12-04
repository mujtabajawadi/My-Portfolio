const navbar = document.getElementById("#nav")
const footerTime = document.getElementById("time");
const footerYear = document.getElementById("year")
var timeout;



const lenis = new Lenis({
  duration: 2.5
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


const firstPageAnimation = () => {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-20",
    opacity: 0,
    duration: 1.5,
    ease: "slow",
  }).to(".text-to-animate", {
    y: 0,
    ease: "slow",
    stagger: 0.3,
    delay: "-1",
  }).to("#thumbnails",  {
    y: "0",
    opacity: 1,
    duration: 4
  })
};

const showAnim = gsap
  .from("#nav", {
    yPercent: -100,
    paused: true,
    duration: 0.5,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: "max",
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
});



const currentTime = () => {
  const time = new Date();
   let fullTime = time.toLocaleTimeString()

  footerTime.innerText = `${fullTime}  PST`
  footerYear.innerText = time.getFullYear() 

};

setInterval(() => {
  currentTime();
}, 1000);

firstPageAnimation();

document.querySelectorAll(".work").forEach((element) => {
  var rotate = 0;
  var positionDifference = 0;
  var image = element.querySelector("img");

  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;


  element.addEventListener("mouseenter", () => {
    gsap.to(image, {
      opacity: 1,
      zIndex: 9999,
    })
  })

  element.addEventListener("mousemove", (details) => {
    var diff = details.clientY - element.getBoundingClientRect().top; //mouse position inside div element
    positionDifference = details.clientX - rotate;
    rotate = details.clientX;

    gsap.to(image, {
      opacity: 1,
      zIndex: 8888,
      ease: Power3,
      top: diff - imageHeight / 2,
      left: details.clientX - imageWidth / 10,
      rotate: gsap.utils.clamp(-15, 15, positionDifference * 0.5),
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(image, {
      opacity: 0,
      zIndex: -11111,
    });
  });
});


