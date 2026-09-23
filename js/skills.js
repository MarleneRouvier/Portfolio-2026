import { SKILLS } from "./constants.js";

const NS = "http://www.w3.org/2000/svg";

export function initSkillsDiagram() {
    const svg = document.getElementById("skillsSvg");
    if (!svg) return;

    const descDefault = document.getElementById("skillDescDefault");
    const descActive = document.getElementById("skillDescActive");
    const toolsBox = document.getElementById("skillToolsBox");

    const diagram = document.querySelector(".skills-diagram");

    const isMobile = window.innerWidth < 768;

    svg.innerHTML = "";

    const W = 520;
    const H = 520;
    const cx = W / 2;
    const cy = H / 2;

    const R = isMobile ? 120 : 170;
    const nodeR = isMobile ? 22 : 26;

    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

    const el = (tag, attrs = {}) => {
        const node = document.createElementNS(NS, tag);

        Object.entries(attrs).forEach(([k, v]) =>
            node.setAttribute(k, v)
        );

        return node;
    };

    // ==========================================================
    // BACKGROUND
    // ==========================================================

    svg.appendChild(
        el("circle", {
            cx,
            cy,
            r: R,
            fill: "none",
            stroke: "#8B4A3C",
            "stroke-width": "0.8",
            "stroke-dasharray": "4 6",
            opacity: "0.35",
        })
    );

    svg.appendChild(
        el("circle", {
            cx,
            cy,
            r: 72,
            fill: "none",
            stroke: "#8B4A3C",
            "stroke-width": "0.5",
            opacity: "0.25",
        })
    );

    svg.appendChild(
        el("circle", {
            cx,
            cy,
            r: 52,
            fill: "#8B4A3C",
            opacity: "0.12",
        })
    );

    svg.appendChild(
        el("circle", {
            cx,
            cy,
            r: 42,
            fill: "#8B4A3C",
            opacity: "0.18",
        })
    );

    svg.appendChild(
        el("circle", {
            cx,
            cy,
            r: 34,
            fill: "#8B4A3C",
        })
    );

    // ==========================================================
    // DESKTOP
    // ==========================================================

    const deactivateFns = [];

    function resetSelection() {
        deactivateFns.forEach((fn) => fn());

        descDefault.style.display = "block";
        descActive.style.display = "none";

        toolsBox.innerHTML = "";
        toolsBox.style.display = "none";
    }

    SKILLS.forEach((skill) => {
        const rad = (skill.angle * Math.PI) / 180;

        const x = cx + R * Math.cos(rad);
        const y = cy + R * Math.sin(rad);

        svg.appendChild(
            el("line", {
                x1: cx + 36 * Math.cos(rad),
                y1: cy + 36 * Math.sin(rad),
                x2: x - 28 * Math.cos(rad),
                y2: y - 28 * Math.sin(rad),
                stroke: "#8B4A3C",
                "stroke-width": "0.8",
                opacity: "0.35",
            })
        );

        const g = document.createElementNS(NS, "g");
        g.style.cursor = "pointer";
        g.style.transform = `translate(${x}px,${y}px)`;

        // ----------------------------
        // Circle
        // ----------------------------

        const circle = el("circle", {
            r: nodeR,
            fill: "#F5EDE5",
            stroke: skill.color,
            "stroke-width": "1.5",
        });

        g.appendChild(circle);

        // ----------------------------
        // Icon
        // ----------------------------

        const fo = document.createElementNS(NS, "foreignObject");

        fo.setAttribute("x", "-12");
        fo.setAttribute("y", "-12");
        fo.setAttribute("width", "24");
        fo.setAttribute("height", "24");

        const icon = document.createElement("div");

        icon.innerHTML = `
      <iconify-icon
          icon="${skill.icon}"
          style="font-size:20px;color:${skill.color};display:flex;align-items:center;justify-content:center;">
      </iconify-icon>
    `;

        fo.appendChild(icon);
        g.appendChild(fo);

        // ----------------------------
        // Labels
        // ----------------------------

        const labelDistance =
            Math.abs(Math.abs(skill.angle) - 90) < 20 ? 62 : 58;

        const lx = labelDistance * Math.cos(rad);
        const ly = labelDistance * Math.sin(rad);

        const anchor =
            skill.angle > 100 || skill.angle < -100
                ? "end"
                : Math.abs(skill.angle) < 80
                    ? "start"
                    : "middle";

        const title = el("text", {
            x: lx,
            y: ly - 10,
            "text-anchor": anchor,
            "font-size": "20",
            fill: "#1C1A2E",
            "font-weight": "600",
        });

        title.textContent = skill.name;

        g.appendChild(title);

        const subtitle = el("text", {
            x: lx,
            y: ly + 17,
            "text-anchor": anchor,
            "font-size": "17",
            fill: "#5F5E5A",
        });

        subtitle.textContent = skill.subtitle;

        g.appendChild(subtitle);

        // ==========================================================
        // INTERACTION
        // ==========================================================

        function activate() {
            circle.setAttribute("fill", skill.color);
            circle.setAttribute("r", nodeR + 2);

            icon.querySelector("iconify-icon").style.color = "#fff";

            descDefault.style.display = "none";
            descActive.style.display = "block";

            descActive.innerHTML = isMobile
                ? `
          <strong class="skill-active-title">
              ${skill.name}
              <span>${skill.subtitle}</span>
          </strong>
          ${skill.desc}
        `
                : skill.desc;

            toolsBox.innerHTML = "";

            skill.tools.forEach((tool) => {
                const chip = document.createElement("div");

                chip.className = "tool-chip";

                chip.innerHTML = `<iconify-icon icon="${tool}"></iconify-icon>`;

                toolsBox.appendChild(chip);
            });

            toolsBox.style.display = "flex";
        }

        function deactivate() {
            circle.setAttribute("fill", "#F5EDE5");
            circle.setAttribute("r", nodeR);

            icon.querySelector("iconify-icon").style.color =
                skill.color;
        }

        deactivateFns.push(deactivate);

        g.addEventListener("mouseenter", () => {
            deactivateFns.forEach((fn) => fn());
            activate();
        });

        g.addEventListener("click", () => {
            deactivateFns.forEach((fn) => fn());
            activate();
        });

        svg.appendChild(g);
    });

    // ==========================================================
    // RESET WHEN LEAVING THE WHOLE SECTION
    // ==========================================================

    if (diagram) {
        diagram.addEventListener("mouseleave", resetSelection);
    }

    let scrollTimeout;

    window.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            resetSelection();
        }, 40);
    });
}