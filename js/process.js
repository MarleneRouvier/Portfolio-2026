export function initProcess() {

    const tabs = document.querySelectorAll(".process-tab");
    const panels = document.querySelectorAll(".process-step-panel");

    if (!tabs.length || !panels.length) return;

    tabs.forEach((tab, index) => {

        tab.addEventListener("click", () => {

            tabs.forEach(tab => tab.classList.remove("active"));

            panels.forEach(panel => {
                panel.style.display = "none";
            });

            tab.classList.add("active");
            panels[index].style.display = "flex";

        });

    });

}