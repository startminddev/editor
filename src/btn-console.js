const consoleToggleBtn = document.getElementById("console-toggle-btn");

consoleToggleBtn.addEventListener("click", () => {
  consoleDiv.classList.toggle("hidden");

  if (consoleDiv.classList.contains("hidden")) {
    setTimeout(() => {
      consoleToggleBtn.classList.remove("bg-green-700");
      consoleToggleBtn.classList.add("bg-red-700");
    }, 250);
  } else {
    setTimeout(() => {
      consoleToggleBtn.classList.remove("bg-red-700");
      consoleToggleBtn.classList.add("bg-green-700");
    }, 125);
  }
});
