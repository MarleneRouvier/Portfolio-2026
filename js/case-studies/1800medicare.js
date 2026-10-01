import {
    PROJECT_GLANCE,
    ICONS,
    PAIN_POINTS,
    USER_PERSONA,
    JOURNEY_STEPS,
    DESIGN_DECISIONS,
    LEARNINGS,
    NEXT_STEPS,
    HEURISTIC_AUDIT,
    RESEARCH_FINDINGS,
    RESEARCH_SUMMARY,
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

// Journey Map
export function renderJourneyMap() {

    const container = document.getElementById("journey-grid");

    if (!container) return;

    container.innerHTML = JOURNEY_STEPS
        .map(createJourneyStep)
        .join("");

}

function createJourneyStep(step) {

    return `
    <article class="cs-journey-card cs-journey-card--${step.status}">

      <span class="cs-journey-number">
        ${step.number}
      </span>

      <h3 class="cs-journey-title">
        ${step.title}
      </h3>

      <p class="cs-journey-emotion">
        ${step.emotion}
      </p>

      <p class="cs-journey-description">
        ${step.description}
      </p>

    </article>
  `;

}

// Design Decisions
export function renderDesignDecisions() {

    const container = document.getElementById("design-decisions");

    if (!container) return;

    container.innerHTML = DESIGN_DECISIONS
        .map(createDecision)
        .join("");

    initAccordion();

}

function createDecision(item) {

    return `
        <article class="accordion-item">

            <button class="accordion-trigger">

                <span class="accordion-num">
                    ${item.number}
                </span>

                <span class="accordion-title">
                    ${item.title}
                </span>

                <span class="accordion-arrow">
                    ▼
                </span>

            </button>

            <div class="accordion-body">

                <div class="acc-ba">

                    <strong>Before:</strong>

                    ${item.before}

                </div>

                <div class="acc-ba">

                    <strong>After:</strong>

                    ${item.after}

                </div>

                <div class="acc-note">

                    ${item.note}

                </div>

            </div>

        </article>
    `;

}

function initAccordion() {

    document
        .querySelectorAll(".accordion-trigger")
        .forEach(trigger => {

            trigger.addEventListener("click", () => {

                const item = trigger.parentElement;

                item.classList.toggle("active");

            });

        });

}

// Outcomes and Learnings
export function renderLearnings() {

    const container = document.getElementById("learning-list");

    if (!container) return;

    container.innerHTML = LEARNINGS
        .map(createLearning)
        .join("");

}

function createLearning(item) {

    return `
        <article class="learning-item">

            <span class="learning-number">
                ${item.number}
            </span>

            <span class="learning-title">

                ${item.title}

                <span class="learning-tooltip">
                    ${item.tooltip}
                </span>

            </span>

        </article>
    `;

}

// Whats Next
export function renderNextSteps() {

    const container = document.getElementById("next-tags");

    if (!container) return;

    container.innerHTML = NEXT_STEPS
        .map(createNextTag)
        .join("");

}

function createNextTag(item) {

    return `
        <span class="tag">
            ${item}
        </span>
    `;

}

// Research Section
export function renderResearchSummary() {

    const container = document.getElementById("research-summary");

    if (!container) return;

    container.innerHTML = RESEARCH_SUMMARY
        .map(createResearchSummaryItem)
        .join("");

}

function createResearchSummaryItem(item) {

    return `
        <article class="cs-research-summary-item">

            <div class="cs-research-summary-icon">
                ${createIcon(item.icon)}
            </div>

            <div>

                <div class="cs-research-summary-value">
                    ${item.value}
                </div>

                <div class="cs-research-summary-label">
                    ${item.label}
                </div>

            </div>

        </article>
    `;

}

export function renderHeuristicAudit() {

    const container = document.getElementById("heuristic-audit");

    if (!container) return;

    container.innerHTML = HEURISTIC_AUDIT
        .map(createHeuristicCard)
        .join("");

}

function createHeuristicCard(item) {

    return `
        <article class="cs-heuristic">

            <div class="cs-score">
                ${item.score}
            </div>

            <div class="cs-heuristic-content">

                <div class="cs-heuristic-heading">

                    <h4 class="cs-heuristic-title">
                        ${item.title}
                    </h4>

                    <span class="cs-badge cs-badge-${item.type}">
                        ${item.severity}
                    </span>

                </div>

                <p class="cs-heuristic-description">
                    ${item.description}
                </p>

            </div>

        </article>
    `;

}

export function renderResearchFindings() {

    const container = document.getElementById("research-findings");

    if (!container) return;

    container.innerHTML = RESEARCH_FINDINGS
        .map(createResearchFinding)
        .join("");

}

function createResearchFinding(item) {

    return `
        <article class="cs-finding-chip">

            <div class="cs-finding-icon">
                ${createIcon(item.icon)}
            </div>

            <span>
                ${item.title}
            </span>

        </article>
    `;

}

// Helpers
function createIcon(icon) {

    return ICONS[icon] || "";

}