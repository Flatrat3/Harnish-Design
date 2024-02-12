const animatedElements = document.querySelectorAll(".fadeInUp");

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
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

//Scrolling

const header = document.querySelector("header");


document.addEventListener("scroll", () => {
    if (window.scrollY > 700) header.style.background = "yellow";
    else header.style.background = "#fff";
});

//Scrolling


// Addin filter gallery
const allButtons = document.querySelectorAll('.portofilo-menu li');
const images = document.querySelectorAll('.images-container .images-container-column');

const filterImage = (e) => {
    const filterValue = e.target.closest('li').dataset.filter;

    images.forEach((image) => {
        if (image.dataset.name === filterValue || filterValue === 'all') {
            image.classList.remove('hide');
        } else {
            image.classList.add('hide');
        }
    });
};

allButtons.forEach((button) => button.addEventListener('click', filterImage));



