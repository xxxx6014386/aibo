gsap.from(".bar", {
  scrollTrigger: ".p1to" ,
  scaley:0,
  duration: 0.6,
  opacity:0,
  y:-100
  
  
  
  
  
  
  
});


gsap.to(".bar", {
  scrollTrigger: ".p1to" ,
  y:0,
 
  duration: .6,
  opacity:1,
 
  
  
  
  
  
  
});






gsap.to('.f1', { y: '-100%', ease: 'power2.in' ,delay:0.5})
gsap.to('.f2', { y: '-100%', ease: 'power2.in' ,delay:0.6})
gsap.to('.f3', { y: '-100%', ease: 'power2.in' ,delay:0.7})
gsap.to('.f4', { y: '-100%', ease: 'power2.in' ,delay:0.8} )

gsap.from(".p1to", {
  scrollTrigger: ".p1" ,
  scalex:1.2,
  duration: 1.2
 
  
});

gsap.to(".p1to", {
  scrollTrigger: ".p1" ,
  
 scalex:1,
  
  duration: 1.2
  
});

gsap.from(".p3", {
  scrollTrigger: ".p2" ,
  
  scale:0,
  opacity: 0,
  duration: 0.2
  
});

gsap.to(".p3", {
  scrollTrigger: ".p2" ,
  scale:1,
  opacity: 1,
  duration: 1,
  
  
  
});

gsap.from(".p4-chi", {
  scrollTrigger: ".p4-0" ,
  
  
  
  duration: 0.2,
  scaleX:3
  
});

gsap.to(".p4-chi", {
  scrollTrigger: ".p4-0" ,
  opacity:1,
  scaleX:1,
  duration: 0.6,
  x:40
  
  
  
});
gsap.from(".p4-1", {
  scrollTrigger: ".p4-0" ,
  
  scaleX:0.4,
  
  
  
  
  
  
});

gsap.to(".p4-1", {
  scrollTrigger: ".p4-0" ,
  rotate:19.25,
  scaleX:1,
  duration: 0.4,
  x:40
  
  
  
  
});

gsap.from(".grid-item", {
  scrollTrigger: ".p4-chi" ,
 y:-300
  
  
  
  
});

gsap.to(".grid-item", {
  scrollTrigger: ".p4-chi" ,
 y:0,
 duration:1
  
  
  
  
});





















