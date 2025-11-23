const footerTime = document.getElementById("time");
const footerYear = document.getElementById("year")
var timeout;



const lenis = new Lenis({
  duration: 1.8
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
  });
};

const mouseCircleDistort = () => {
  var xScale = 1;
  var yScale = 1;

  var previousX = 0;
  var previousY = 0;
  window.addEventListener("mousemove", (details) => {
    clearTimeout(timeout);
    xScale = gsap.utils.clamp(0.8, 1.2, details.clientX - previousX);
    yScale = gsap.utils.clamp(0.8, 1.2, details.clientY - previousY);

    previousX = details.clientX;
    previousY = details.clientY;

    mouseFollowerCircle(xScale, yScale);

    timeout = setTimeout(() => {
      document.querySelector("#mini-circle").style.transform = `translate(${
        details.clientX - 6
      }px, ${details.clientY - 5}px) scale(1, 1)`;
    }, 100);
  });
};

const mouseFollowerCircle = (xScale, yScale) => {
  window.addEventListener("mousemove", function (details) {
    document.querySelector("#mini-circle").style.transform = `translate(${
      details.clientX - 6
    }px, ${details.clientY - 5}px) scale(${xScale}, ${yScale})`;
  });
};

const currentTime = () => {
  const time = new Date();
  console.log(time.toLocaleTimeString())

  let fullTime = time.toLocaleTimeString()

  footerTime.innerText = `${fullTime}  PST`
  footerYear.innerText = time.getFullYear() 

  // let hours = time.getHours();
  // let minutes = time.getMinutes();
  // if (hours > 12) {
  //   footerTime.innerText = `${hours - 12}: ${minutes} PM PST`;
  // } else if (hours == "00") {
  //   footerTime.innerText = `12 : ${minutes} AM PST`;
  // } else {
  //   footerTime.innerText = `${hours} : ${minutes} AM PST`;
  // }
};

setInterval(() => {
  currentTime();
}, 1000);

mouseFollowerCircle();
firstPageAnimation();
mouseCircleDistort();

document.querySelectorAll(".work").forEach((element) => {
  var rotate = 0;
  var positionDifference = 0;
  var image = element.querySelector("img");

  const imageWidth = image.offsetWidth;
  const imageHeight = image.offsetHeight;

  element.addEventListener("mousemove", (details) => {
    var diff = details.clientY - element.getBoundingClientRect().top; //mouse position inside div element
    positionDifference = details.clientX - rotate;
    rotate = details.clientX;

    gsap.to(image, {
      opacity: 1,
      zIndex: 9999,
      ease: Power3,
      top: diff - imageHeight / 2,
      left: details.clientX - imageWidth / 2,
      rotate: gsap.utils.clamp(-15, 15, positionDifference * 0.5),
    });
  });

  element.addEventListener("mouseleave", () => {
    gsap.to(image, {
      opacity: 0,
      zIndex: -1,
    });
  });
});


