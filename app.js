const progressBar= document.querySelector("#progress-bar");
const section= document.querySelector("section");

const animateProgressBar =() => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth= (scrollDistance/section.getBoundingClientRect().height)*100;
    let value= Math.floor(progressWidth);
    progressBar.style.width=value+ "%";
}

window.addEventListener("scroll",animateProgressBar);