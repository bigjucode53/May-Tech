const quest = document.querySelectorAll(".dropdown-container")


quest.forEach((element) => {
    element.addEventListener("click", () => addquestion(element));
  });

function addquestion(element) {
    const article = element.querySelector("article")
    console.log(element)
element.style.overflow = "visible";

article.style.overflow = "visible";
article.style.maxHeight = "max-content"

}