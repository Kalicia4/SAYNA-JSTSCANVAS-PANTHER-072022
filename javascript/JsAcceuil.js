
window.addEventListener("scroll", function() {
    var elements = document.querySelectorAll(".fade-in");
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
      if (position < windowHeight) {
        element.classList.add("show");
      }
      else{
        element.classList.remove("show");
      }
    }
});

window.addEventListener("scroll", function(){
    const image = this.document.querySelector(".img");
    const blanc = this.document.querySelector(".tout");
    let pblanc = blanc.getBoundingClientRect().bottom;
    let position = image.getBoundingClientRect().top;
    let windowHeightimage = this.window.innerHeight;
    let windowHeightblanc = this.window.innerHeight / 4 * 5;
    if(pblanc < windowHeightblanc){
        blanc.classList.add("fade-in-img");
    }
    else{
        blanc.classList.remove("fade-in-img"); 
    }
    if(position < windowHeightimage){
        image.classList.add("fade-in-img");
    }
    else{
        image.classList.remove("fade-in-img"); 
    }
})

// CONTACT
const btnSubmit = document.querySelector("#btn_submit");
const popUp = document.querySelector(".container_popup");
const btnClose = document.querySelector("#btn_OK");

btnSubmit.addEventListener("click",()=>{
    let nom = document.querySelector(".nom").value;
    let mail = document.querySelector(".mail").value;
    let message = document.querySelector("#message").value;

    if(nom === "" || mail === "" || message === ""){
        alert("Veuillez remplir les champs vide");
    }
    else{
        popUp.style.display = "flex";
    }
    
})

btnClose.addEventListener("click",()=>{
    popUp.style.display = "none";
} )
