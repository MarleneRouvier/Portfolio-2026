export function initNavigation() {

    const toggle = document.getElementById("mobile-toggle");
    const menu = document.getElementById("mobile-menu");

    if (!toggle || !menu) return;

    const nav = menu.querySelector(".mobile-nav");

    if (!nav) return;

    toggle.addEventListener("click", (e) => {

        e.preventDefault();
        e.stopPropagation();

        menu.classList.toggle("open");
        document.body.classList.toggle("menu-open");

    });

    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });

    menu.addEventListener("click", (e) => {

        if (!nav.contains(e.target)) {

            closeMenu();

        }

    });

    function closeMenu() {

        menu.classList.remove("open");
        document.body.classList.remove("menu-open");

    }

}