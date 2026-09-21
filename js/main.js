const scrollBtn = document.getElementById("scrollTop");
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.1
});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

window.addEventListener("scroll", () => {

    scrollBtn.classList.toggle(
        "visible",
        window.scrollY > 400
    );

});

document
    .querySelectorAll(".fade-up")
    .forEach(el => observer.observe(el));