import { PROJECTS } from "./constants.js";
const projectsGrid = document.getElementById("projects-grid");

projectsGrid.innerHTML = PROJECTS.map(createProjectCard).join("");
document
    .querySelectorAll(".project-card")
    .forEach(card => card.classList.add("visible"));

function createProjectCard(project) {

    return `
        <article class="project-card fade-up">

            ${createThumbnail(project)}

            <div class="project-body">

                ${project.meta
                    ? `<p class="project-meta">${project.meta}</p>`
                    : ""}

                <h3 class="project-title">
                    ${project.title}
                </h3>

                <p class="project-desc">
                    ${project.description}
                </p>

                <div class="project-tags">
                    ${createTags(project.tags)}
                </div>

                ${createButtons(project)}

            </div>

        </article>
    `;

}

function createTags(tags) {

    return tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join("");

}

function createButtons(project) {

    if (!project.buttons) {

        return `
            <span class="coming-soon-badge">
                <span class="badge-dot"></span>
                In progress
            </span>
        `;

    }

    return `
        <div class="project-actions">

            ${project.buttons.map(button => `

                <a
                    href="${button.href}"
                    class="btn btn-${button.style}"
                    ${button.target ? `target="${button.target}"` : ""}>

                    <span class="c-tl"></span>
                    <span class="c-tr"></span>
                    <span class="c-bl"></span>
                    <span class="c-br"></span>

                    ${button.label}

                </a>

            `).join("")}

        </div>
    `;

}

function createThumbnail(project) {

    switch (project.id) {

        case "argento":
            return createArgentoThumbnail();

        case "medicare":
            return createMedicareThumbnail();

        case "wedding":
            return createWeddingThumbnail();

        default:
            return "";

    }

}

function createArgentoThumbnail() {

    return `
        <div class="project-thumb thumb-argento">

            <span class="project-tag project-tag-live">

                <span class="project-status-dot"></span>

                Live · Client Project

            </span>

            <div class="argento-laptop">

                <div class="argento-screen">

                    <div class="argento-display">

                        <img
                            class="argento-image"
                            src="assets/images/rincon-argento-profile.png"
                            alt="El Rincón Argento website">

                    </div>

                </div>

                <div class="argento-hinge">

                    <div class="argento-notch"></div>

                </div>

                <div class="argento-shadow"></div>

            </div>

        </div>
    `;

}

function createMedicareThumbnail() {

    return `
        <div class="project-thumb thumb-medicare">

            <span class="project-tag">
                UX/UI Redesign
            </span>

            <div class="phones-wrapper">

                <div class="phone phone-back">

                    <div class="phone-screen">

                        <img
                            src="assets/images/1800-medicare-onboarding-mobile.png"
                            alt="Onboarding">

                    </div>

                </div>

                <div class="phone phone-front">

                    <div class="phone-screen">

                        <img
                            src="assets/images/1800-medicare-home-mobile.png"
                            alt="Home">

                    </div>

                </div>

            </div>

        </div>
    `;

}

function createWeddingThumbnail() {

    return `
        <div class="project-thumb thumb-wedding">

            <span class="project-tag">
                Custom Web Design
            </span>

            <div class="tablet-mockup">

                <div class="tablet-screen">

                    <img
                        class="tablet-image"
                        src="assets/images/angela-harold-home.png"
                        alt="Angela and Harold website">

                </div>

            </div>

        </div>
    `;

}