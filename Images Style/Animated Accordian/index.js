const cardContainers = document.querySelector(".container");

cardContainers.addEventListener("click", (e) => {
  const target = e.target.closest(".card");
  if (!target) {
    cardContainers.querySelectorAll(".card").forEach((card) => {
      card.classList.remove("active");
    });
  } else {
    target.classList.add("active");
  }
});
