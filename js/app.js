import "./constants.js";

import { renderSkillsStrip } from "./skills-strip.js";
import { renderProjectCards } from "./project-cards.js";
import { initProcess } from "./process.js";
import { renderSoftSkills } from "./soft-skills.js";
import { initSkillsDiagram } from "./skills.js";
import { renderProjectGlance } from "./case-studies/1800medicare.js";
import { renderPainPoints } from "./case-studies/1800medicare.js";
import { renderPersona } from "./case-studies/1800medicare.js";
import { renderJourneyMap } from "./case-studies/1800medicare.js";
import { renderDesignDecisions } from "./case-studies/1800medicare.js";

document.addEventListener("DOMContentLoaded", () => {

  // Home
  renderSkillsStrip();
  renderProjectCards();
  renderSoftSkills();
  initProcess();
  initSkillsDiagram();

  // Medicare Case Study
  renderProjectGlance();
  renderPainPoints();
  renderPersona();
  renderJourneyMap();
  renderDesignDecisions();

  // Scroll to top
  const scrollBtn = document.getElementById("scrollTop");

  if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    });

    window.addEventListener("scroll", () => {

      scrollBtn.classList.toggle("visible", window.scrollY > 400);

    });

  }

  // Fade-up animations
  const observer = new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },

    {
      threshold: 0.1,
    }

  );

  document
    .querySelectorAll(".fade-up")
    .forEach((el) => observer.observe(el));

});