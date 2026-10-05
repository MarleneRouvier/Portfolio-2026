import { SOFT_SKILLS } from "./constants.js";

export function renderSoftSkills() {

    const grid = document.getElementById("softSkillsGrid");

    if (!grid) return;

    grid.innerHTML = SOFT_SKILLS
        .map(createSoftSkill)
        .join("");

    const cards = [...grid.querySelectorAll(".soft-skills-card")];

    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {

        cards.forEach(card => {

            card.addEventListener("click", e => {

                e.stopPropagation();

                const wasActive = card.classList.contains("active");

                cards.forEach(c => c.classList.remove("active"));

                if (!wasActive) {
                    card.classList.add("active");
                }

            });

        });
        
        document.addEventListener("click", () => {
            cards.forEach(c => c.classList.remove("active"));
        });

    }

}

function createSoftSkill(skill, index) {

    return `
        <article
            class="soft-skills-card fade-up"
            style="transition-delay:${index * .05}s">

            <div class="soft-skills-icon">
                <iconify-icon
                    icon="${skill.icon}"
                    width="25"
                    height="25">
                </iconify-icon>
            </div>

            <div class="soft-skills-title">
                ${skill.title}
            </div>

            <div class="soft-skills-desc-wrap">
                <p class="soft-skills-desc">
                    ${skill.desc}
                </p>
            </div>

        </article>
    `;

}