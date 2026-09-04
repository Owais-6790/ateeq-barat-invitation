document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("gate");
  const enter = document.getElementById("enter");

  if (enter && gate) {
    enter.addEventListener("click", () => {
      gate.classList.add("hide");
      setTimeout(() => gate.remove(), 1100);
    });
  }

  document.querySelectorAll(".reveal-date").forEach(button => {
    button.addEventListener("click", () => {
      const stage = button.closest(".event-card-new").querySelector(".date-stage");
      stage.classList.add("revealed");
      button.textContent = "DATE REVEALED";
      button.disabled = true;
    });
  });
});