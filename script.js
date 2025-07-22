
let slideIndex = [1,1,1,1];
let slideId = ["mySlides1", "mySlides2","mySlides3","mySlides4"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
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