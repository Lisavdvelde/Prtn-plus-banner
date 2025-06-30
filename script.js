const tl = gsap.timeline();

tl.set(".neutraal-img-voorkant", {
  scale: 0.6,
  top: 280,
  left: 70
}, 0)

.to(".groen-element", { 
  y: -110, 
  borderRadius: 120, 
  x: 0, 
  duration: 2, 
  ease: "power2.out" 
}, 0)

.to(".neutraal-img-voorkant", {
  scale: 1,
  top: 44,
  left: 14,
  duration: 2,
  ease: "power2.out"
}, 0)


tl.from(".usp1", { x: -270, duration: 1 }, ">")
  .from(".usp2", { x: -270, duration: 1 }, ">")
  .from(".usp3", { x: -270, duration: 1 }, ">");

tl.to(".neutraal-img-voorkant", { opacity: 0, duration: 0.5 })
  .to(".neutraal-img-achterkant", { opacity: 1, duration: 0.5 }, "<");

  