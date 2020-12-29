const panels = document.querySelectorAll(".panel");

function shrinkImages() {
  panels.forEach((panel) => panel.classList.remove("active"));
}

function expandImage() {
  shrinkImages();
  this.classList.add("active");
}

panels.forEach((panel) => {
  panel.addEventListener("click", expandImage);
});
