const quest = document.querySelectorAll(".dropdown-container");

quest.forEach((element) => {
  element.addEventListener("click", () => addquestion(element));
});

function addquestion(element) {
  const article = element.querySelector("article");
  // console.log(element)
  element.style.overflow = "visible";

  article.style.overflow = "visible";
  article.style.maxHeight = "max-content";
}


const pricetag = document.querySelectorAll(".col-md-4.card-inner");

pricetag.forEach((element) => {
  const lineElements = element.querySelectorAll(".line");
  const cardElement = element.querySelector(".card");
  const subtitleElement = element.querySelector(".sub-title");
  const legendElement = element.querySelector(".legend");
  let isClicked = false;

  element.addEventListener("click", () => {
    if (isClicked) {
      // Revenir à la couleur initiale
      lineElements.forEach((lineElement) => {
        lineElement.style.color = "";
      });
      if (subtitleElement) {
        subtitleElement.style.color = "";
      }
      if (legendElement) {
        legendElement.style.color = "";
      }
      cardElement.style.backgroundColor = "";
      // Supprimer le bouton de redirection
      const redirectButton = element.querySelector(".redirect-button");
      if (redirectButton) {
        redirectButton.remove();
      }
    } else {
      // Appliquer les nouvelles couleurs
      lineElements.forEach((lineElement) => {
        lineElement.style.color = "white";
      });
      if (subtitleElement) {
        subtitleElement.style.color = "white";
      }
      if (legendElement) {
        legendElement.style.color = "white";
      }
      cardElement.style.backgroundColor = "rgb(186, 69, 125)";
     // Ajouter le bouton de redirection
    const redirectButton = document.createElement("a");
    redirectButton.href = "contact.html";
    redirectButton.classList.add("redirect-button", "cta-primary", "white");
    redirectButton.textContent = "Accéder au formulaire";
    cardElement.appendChild(redirectButton);
    }

    // Inverser l'état du clic
    isClicked = !isClicked;
  });
});



// const pricetag = document.querySelectorAll(".col-md-4.card-inner");

// pricetag.forEach((element) => {
//   const lineElements = element.querySelectorAll(".line");
//   const cardElement = element.querySelector(".card");
//   const subtitleElement = element.querySelector(".sub-title");
//   const legendElement = element.querySelector(".legend");
//   let isClicked = false;

//   // Sauvegarder la structure HTML initiale de la div .card
//   const initialHTML = cardElement.innerHTML;

//   element.addEventListener("click", () => {
//     if (isClicked) {
//       // Revenir à la couleur initiale
//       lineElements.forEach((lineElement) => {
//         lineElement.style.color = "";
//       });
//       if (subtitleElement) {
//         subtitleElement.style.color = "";
//       }
//       if (legendElement) {
//         legendElement.style.color = "";
//       }
//       cardElement.style.backgroundColor = "";

//       // Rétablir la structure HTML initiale de la div .card
//       cardElement.innerHTML = initialHTML;
//     } else {
//       // Appliquer les nouvelles couleurs
//       lineElements.forEach((lineElement) => {
//         lineElement.style.color = "white";
//       });
//       if (subtitleElement) {
//         subtitleElement.style.color = "white";
//       }
//       if (legendElement) {
//         legendElement.style.color = "white";
//       }
//       cardElement.style.backgroundColor = "rgb(186, 69, 125)";
      
//       // Changer la structure HTML de la div .card selon le dernier code fourni
//       cardElement.innerHTML = `
//       <div class="card">
//       <img src="#" alt="" class="logo-raton" />
    
//       <div class="title">
//         <p style="font-size: 36px">&nbsp;</p>
//         <p style="font-size: 36px">
//           <span style="font-size: 48px">250<sup>€</sup></span
//           ><span style="font-size: 20px">ht/mois</span>
//         </p>
//         <p>&nbsp;</p>
//         <p style="font-size: 24px; line-height: 1.5">
//           Sans aucun frais<br />Sans engagement<br /><strong
//             >Tout est compris</strong
//           >
//         </p>
//         <p>&nbsp;</p>
//       </div>
//       <a href="" class="cta-primary white">
//         Demander pour un besoin spécifique
//       </a>
//     </div>
    
//       `;
//     }

//     // Inverser l'état du clic
//     isClicked = !isClicked;
//   });
// });