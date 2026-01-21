
let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2","mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
// showSlides(1, 3);

function currentSlide(n, dotElement) {
  // Find which slideshow this dot belongs to
  //const dot = event.target;
  const project = dotElement.closest(".project");
  const projects = Array.from(document.querySelectorAll(".project"));

  const slideshowIndex = projects.indexOf(project);

  if (slideshowIndex === -1) return;

  slideIndex[slideshowIndex] = n;
  showSlides(n, slideshowIndex);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  let project = document.querySelectorAll(".project")[no];
  let dots = project.querySelectorAll(".dot");

  if (n > slides.length) slideIndex[no] = 1;
  if (n < 1) slideIndex[no] = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex[no] - 1].style.display = "block";
  if (dots[slideIndex[no] - 1]) {
    dots[slideIndex[no] - 1].classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.1 
  });

  projects.forEach(project => observer.observe(project));
});


window.addEventListener("load", () => {
  // Initialize slideshow
  for (let i = 0; i < slideId.length; i++) {
    showSlides(slideIndex[i], i);
  }

});