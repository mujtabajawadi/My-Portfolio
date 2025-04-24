const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

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
  })
};

const mouseFollowerCircle = () => {
  window.addEventListener("mousemove", function (details) {
    document.querySelector("#mini-circle").style.transform = `translate(${
      details.clientX - 4
    }px, ${details.clientY - 4}px)`;
  });
};

mouseFollowerCircle();
firstPageAnimation();
