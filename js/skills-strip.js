import { SKILLS_STRIP } from "./constants.js";

const track = document.getElementById("skills-track");

if (track) {

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