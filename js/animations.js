const bars = document.querySelectorAll(".progress");

function animateBars() {
    bars.forEach(bar => {
        const value = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = value;
        }, 300);
    });
}

window.addEventListener("scroll", animateBars);

const elements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();