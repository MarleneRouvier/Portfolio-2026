export function initNavigation() {

    const toggle = document.getElementById("mobile-toggle");
    const menu = document.getElementById("mobile-menu");
    const nav = menu.querySelector(".mobile-nav");

    if (!toggle || !menu) return;

    // Abrir / cerrar
    toggle.addEventListener("click", (e) => {

        e.preventDefault();
        e.stopPropagation();

        menu.classList.toggle("open");
        document.body.classList.toggle("menu-open");

    });

    // Cerrar al tocar un link
    menu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });

    // Cerrar tocando el fondo
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