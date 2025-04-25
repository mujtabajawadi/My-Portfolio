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
