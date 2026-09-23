import { SOFT_SKILLS } from "./constants.js";

const grid = document.getElementById("softSkillsGrid");

if (grid) {

    grid.innerHTML = SOFT_SKILLS.map((skill, index) => `

        <article
            class="soft-skills-card fade-up"
            style="transition-delay:${index * .05}s">

            <div class="soft-skills-icon">
                <iconify-icon 
                icon="${skill.icon}" width="25" height="25"></iconify-icon>
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

    `).join("");

    grid.querySelectorAll(".soft-skills-card").forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("active");

        });

    });

}