import { SKILLS_STRIP } from "./constants.js";

export function renderSkillsStrip() {

    const track = document.getElementById("skills-track");

    if (!track) return;

    const createItem = (skill) => `
        <div class="skill-item">
            <span class="skill-name">${skill}</span>
        </div>
        <span class="skill-sep">✳</span>
    `;

    track.innerHTML = Array(4)
        .fill(SKILLS_STRIP.map(createItem).join(""))
        .join("");

}