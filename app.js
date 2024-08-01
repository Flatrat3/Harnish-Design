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


//Navigation Click Event Handler
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.header-nav a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove active__li class from all parent li elements
            navLinks.forEach(function (navLink) {
                var parentLi = navLink.closest('li');
                if (parentLi) {
                    parentLi.classList.remove('active__li');
                }
            });

            var targetId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Add active__li class to the parent li of the clicked link
                var parentLi = link.closest('li');
                if (parentLi) {
                    parentLi.classList.add('active__li');
                }

                // Scroll to the target section
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});



var swiper = new Swiper(".mySwiper", {
    // Enable CSS mode
    cssMode: true,

    // Navigation buttons
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Pagination
    pagination: {
        el: ".swiper-pagination",
    },


    mousewheel: true,


    keyboard: true,

    // Autoplay configuration
    autoplay: {
        delay: 3000, // 
        disableOnInteraction: false, // Set to false to prevent autoplay stopping when user interacts with slider
    }
});


document.addEventListener("DOMContentLoaded", function () {
    var text = document.getElementById("dynamicText").textContent.trim();
    var element = document.getElementById("dynamicText");
    element.textContent = "";

    var index = 0;
    var direction = 1; 
    var timer = setInterval(function () {
        if (direction === 1) {
            element.textContent += text[index];
            index++;
            if (index >= text.length) {
                index = text.length - 1;
                direction = -1;
            }
        } else {
            element.textContent = text.slice(0, index);
            index--;
            if (index < 0) {
                index = 0;
                direction = 1;
            }
        }
    }, 50);
});


const barIcon = document.querySelector(".fa-solid")
const headerNav = document.querySelector(".header-nav")

barIcon.addEventListener("click", function(){
    headerNav.classList.toggle("active")

})