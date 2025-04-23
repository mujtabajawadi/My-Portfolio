const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


const mouseFollowerCircel = () => {
    document.addEventListener('mousemove', function (details) {
       document.querySelector('#mini-circle').style.transform = `translate(${details.clientX -4}px, ${details.clientY -4}px)`
    })
}

mouseFollowerCircel()