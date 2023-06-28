const enigmes = document.querySelectorAll(".enigme");
const btnSuivant = document.querySelector("#btn_question");
const btnRevenir = document.querySelector("#btn_revenir");
const champRep1 = document.querySelector("#reponse1");
let i = 0;

// CHRONOMETRE
let chronometre;
const affichageChrono = document.querySelector(".affichage_chrono");
let heures = 0;
let minutes = 0;
let secondes = 0;

function demarrerChronometre() {
   chronometre = setInterval(function () {
     // Incrémenter les secondes
     secondes++;
     if (secondes === 60) {
       secondes = 0;
       minutes++;
     }
     if (minutes === 60) {
       minutes = 0;
       heures++;
     }
 
     // Mettre à jour l'affichage
     affichageChrono.textContent = formatTemps(heures) + ":" + formatTemps(minutes) + ":" + formatTemps(secondes);
   }, 1000);

}
 
function formatTemps(temps) {
   return temps < 10 ? "0" + temps : temps;
}

champRep1.addEventListener("focus", ()=>{
   console.log("Hey");
   demarrerChronometre();
})

// ENIGME1
const vraiRep1 = "SI JE SUIS FIDELE C’EST A CE TRONE PEU IMPORTE QUI MONTE DESSUS";
const btnEnvoyer1 = document.querySelector("#btn1");

// ENIGME2
const vraiRep2 = "wakanda forever";
const btnEnvoyer2 = document.querySelector("#btn2");

// ENIGME3
const vraiRep3 = "wakanda forever";
const btnEnvoyer3 = document.querySelector("#btn3");

enigmes[0].removeAttribute("id");

function verifierReponse(reponse,vraiRep) {
   if (reponse === vraiRep) {
      console.log("Bravo ! La réponse est correcte");
      const popUp = document.querySelector(".contenair_popup");
      popUp.removeAttribute("id");
   } else {
      confirm("réessayez! ce n'est pas encore ça")
   }
}
function verifierReponse3(reponse,vraiRep) {
   if (reponse === vraiRep) {
      console.log("Bravo ! La réponse est correcte");
      const popUp_der = document.querySelector(".contenair_der");
      popUp_der.removeAttribute("id");
      clearInterval(chronometre);
   } else {
      confirm("réessayez! ce n'est pas encore ça")
   }
}

btnEnvoyer1.addEventListener("click", () => {
   let reponse1 = document.querySelector("#reponse1");
   let rep = reponse1.value;
   verifierReponse(rep, vraiRep1);
   
});

btnEnvoyer2.addEventListener("click", () => {
   let reponse2 = document.querySelector("#reponse2");
   let rep = reponse2.value;
   verifierReponse(rep, vraiRep2);
});

btnEnvoyer3.addEventListener("click", () => {
   let reponse3 = document.querySelector("#reponse3");
   let rep = reponse3.value;
   verifierReponse3(rep, vraiRep3);
});

btnSuivant.addEventListener("click", () => {
   console.log(i);
   enigmes[i].setAttribute("id","cache");
   i=i+1;
   enigmes[i].removeAttribute("id");
   console.log(i);
   const popUp = document.querySelector(".contenair_popup");
   popUp.setAttribute("id","cache");
})

btnRevenir.addEventListener("click", ()=>{
   window.location.href = "../accueil.html";
})



