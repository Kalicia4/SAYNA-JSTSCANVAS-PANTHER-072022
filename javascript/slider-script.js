const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".fleche");
const image1 = document.querySelector("#image1");
const second = document.querySelector("#second");

let isDragStart = false, prevPageX, prevScrollLeft;


const showHideIcons = () =>{
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft ==  scrollWidth ? "none" : "block"; 
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        let firstImgWidth = firstImg.clientWidth + 20;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; 
        setTimeout(() => showHideIcons(), 60);
    })
});

const dragStart = (e) => {
    isDragStart = true ;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) =>{
    if(!isDragStart)return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    carousel.classList.add("dragging");
    showHideIcons();
}

const dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
carousel.addEventListener("mouseup",dragStop);
carousel.addEventListener("mouseleave",dragStop);

carousel.addEventListener("scroll",()=>{
    if (carousel.scrollLeft !== 0) {
        image1.classList.remove('zoomImage');
        second.classList.add('second-normal'); 
    } else {
        image1.classList.add('zoomImage');
        second.classList.remove('second-normal');
    }
})