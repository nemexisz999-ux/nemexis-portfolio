gsap.registerPlugin(ScrollTrigger);

// LENIS
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// HERO
gsap.from(".hero-content", { y: 80, opacity: 0 });

// GRID
gsap.from(".box", {
  scrollTrigger: ".grid",
  y: 50,
  opacity: 0,
  stagger: 0.2
});

// SKILLS
gsap.from(".skills i", {
  scrollTrigger: ".skills",
  scale: 0,
  opacity: 0,
  stagger: 0.2
});

// SLIDER
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

document.querySelector(".next").onclick = () => {
  index = (index + 1) % total;
  gsap.to(slides, { x: -index * 100 + "%" });
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + total) % total;
  gsap.to(slides, { x: -index * 100 + "%" });
};