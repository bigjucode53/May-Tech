
const onglets = document.querySelectorAll(".onglet");
// console.log(onglets);
onglets.forEach((element) => {
  element.addEventListener("click", () => block(element));
});

function block(element) {
//   console.log(element.getAttribute("data-index"));
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

//   console.log(datall);
}
