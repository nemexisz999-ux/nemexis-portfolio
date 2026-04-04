gsap.registerPlugin(ScrollTrigger);

// HERO ANIMATION
gsap.from(".hero-content h1", { y: 50, opacity: 0 });
gsap.from(".hero-content p", { y: 30, opacity: 0, delay: 0.3 });

// GRID
gsap.from(".box", {
  scrollTrigger: { trigger: ".grid", start: "top 80%" },
  y: 50,
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

// TESTIMONIAL
gsap.from(".card", {
  scrollTrigger: { trigger: ".testimonials", start: "top 80%" },
  y: 40,
  opacity: 0,
  stagger: 0.2
});