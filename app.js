const animatedElements = document.querySelectorAll(".fadeInUp");

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateElements() {
    animatedElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add("fadeInUp");
        } else {
            element.classList.remove("fadeInUp");
        }
    });
}
window.addEventListener("load", animateElements);
window.addEventListener("scroll", animateElements);




// Scrolling

const header = document.querySelector("header");
console.log(header);

document.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (window.scrollY > 700) {
        header.style.background = "yellow"
    } else {
        header.style.background = "#fff"
    }



})