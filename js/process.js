const tabs = document.querySelectorAll(".process-tab");
const panels = document.querySelectorAll(".process-step-panel");

tabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));

        panels.forEach(panel => panel.style.display = "none");

        tab.classList.add("active");
        panels[index].style.display = "flex";

    });

});