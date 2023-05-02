const onglets = document.querySelectorAll(".onglet");

onglets.forEach((element) => {
  element.addEventListener("click", () => block(element));
});

function block(element) {
  const activeofonglet = document.querySelectorAll(".activeofonglet");
  activeofonglet.forEach((element) => {
    element.classList.remove("activeofonglet");
  });
  const datall = document.querySelectorAll(
    "[data-index='" + element.getAttribute("data-index") + "']"
  );
  datall.forEach((element) => {
    element.classList.add("activeofonglet");
  });
}
