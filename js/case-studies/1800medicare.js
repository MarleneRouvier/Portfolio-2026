import {
    PROJECT_GLANCE,
    ICONS
} from "../constants.js";

export function renderProjectGlance() {

    const container = document.getElementById("project-glance");

    if (!container) return;

    container.innerHTML = PROJECT_GLANCE
        .map(createGlanceItem)
        .join("");
}

function createGlanceItem(item) {

    return `
        <article class="cs-glance-item">

            <div class="cs-glance-icon">
                ${createIcon(item.icon)}
            </div>

            <div class="cs-glance-content">

                <h3 class="cs-glance-stat">
                    ${item.title}
                </h3>

                <p class="cs-glance-desc">
                    ${item.description}
                </p>

            </div>

        </article>
    `;
}





// Helpers
function createIcon(icon) {

    return ICONS[icon] || "";

}