import {
    PROJECT_GLANCE,
    ICONS,
    PAIN_POINTS,
    USER_PERSONA
} from "../constants.js";

//Projects at Glance
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

// Problem Section
export function renderPainPoints() {

    const container = document.getElementById("pain-points");

    if (!container) return;

    container.innerHTML = PAIN_POINTS
        .map(createPainPoint)
        .join("");

}

function createPainPoint(item) {

    return `
        <div>

            <div class="cs-pain-icon">

                ${createIcon(item.icon)}

            </div>

            <div class="cs-pain-title">
                ${item.title}
            </div>

            <div class="cs-pain-desc">
                ${item.description}
            </div>

        </div>
    `;

}

export function renderPersona() {

    const container = document.getElementById("persona");

    if (!container) return;

    container.innerHTML = `
        <div class="cs-persona-layout">

            <div class="cs-persona-profile">

                <div class="cs-persona-avatar">
                    ${USER_PERSONA.initials}
                </div>

                <div>

                    <div class="cs-persona-name">
                        ${USER_PERSONA.name}, ${USER_PERSONA.age}
                    </div>

                    <div class="cs-persona-role">
                        ${USER_PERSONA.role}, ${USER_PERSONA.location}
                    </div>

                </div>

            </div>

            <div class="cs-persona-details">

                <blockquote class="cs-persona-quote">
                    "${USER_PERSONA.quote}"
                </blockquote>

                <div class="cs-persona-needs">
                    <strong>Needs:</strong>
                    ${USER_PERSONA.needs.join(", ").toLowerCase()}.
                </div>

            </div>

        </div>
    `;

}




// Helpers
function createIcon(icon) {

    return ICONS[icon] || "";

}