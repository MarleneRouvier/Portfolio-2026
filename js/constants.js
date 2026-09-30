/**************************************
MAIN PAGE
**************************************/

// Skills Strip List
export const SKILLS_STRIP = [
  "Figma",
  "Angular",
  "TypeScript",
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "Bootstrap",
  "Claude",
  "Lovable",
  "ChatGPT",
  "Photoshop",
  "Illustrator",
  "Slack"
];

// Projects Cards List
export const PROJECTS = [
  {
    id: "argento",
    title: "Bringing Argentine bakery culture to Sydney",
    description:
      "Designed a bilingual bakery website for local customers.",

    tags: [
      "UX Strategy",
      "Brand Storytelling",
      "Responsive Design",
      "Front-end Development"
    ],

    buttons: [
      /*{
        label: "View case study",
        href: "case-study-argento.html",
        style: "primary"
      },*/
      {
        label: "Visit live site",
        href: "https://www.elrinconargento.com",
        target: "_blank",
        style: "ghost"
      }
    ]
  },

  {
    id: "medicare",

    title: "Redesigning the 1800MEDICARE App",

    description:
      "Reimagined Australia's digital health experience.",

    tags: [
      "UX Research",
      "Product Design",
      "Concept Project"
    ],

    buttons: [
      {
        label: "View Case Study",
        href: "case-study-1800medicare.html",
        style: "primary"
      }
    ]
  },

  {
    id: "wedding",

    title: "Designed a memorable wedding experience",

    description:
      "Designed a custom wedding website focused on storytelling, guest information and a seamless RSVP experience across every device.",

    tags: [
      "UI Design",
      "Storytelling",
      "Responsive Design",
      "Front-end Development"
    ],

    buttons: [
      {
        label: "View case study",
        href: "case-study-wedding.html",
        style: "primary"
      },
      {
        label: "Visit live site",
        href: "https://www.angelaandharold.com",
        target: "_blank",
        style: "ghost"
      }
    ]
  }
];

// Skills List
export const SKILLS = [
  {
    name: "IA & Strategy",
    subtitle: "Structure the problem",
    icon: "lucide:lightbulb",
    angle: -90,
    color: "#8B4A3C",
    desc: "I turn complexity into structure: defining content, flows, priorities, and the logic behind the experience so every screen has a clear purpose.",
    tools: [
      "logos:figma",
      "logos:notion-icon"
    ]
  },

  {
    name: "UX Research",
    subtitle: "Know the user",
    icon: "lucide:search",
    angle: -45,
    color: "#C4956A",
    desc: "I use research to understand user needs, behaviors, and friction points, turning insights into clearer design decisions and stronger product direction.",
    tools: [
      "logos:notion-icon",
      "logos:figma",
      "logos:typescript-icon"
    ]
  },

  {
    name: "Journey Mapping",
    subtitle: "Map the experience",
    icon: "lucide:map",
    angle: 0,
    color: "#8B4A3C",
    desc: "I map end-to-end experiences to uncover pain points, moments of friction, and opportunities for improvement across the user journey.",
    tools: [
      "logos:miro-icon",
      "logos:figma",
    ]
  },

  {
    name: "UI Design",
    subtitle: "Communicate clearly",
    icon: "lucide:pen-tool",
    angle: 45,
    color: "#C4956A",
    desc: "I design interfaces that feel intuitive, accessible, and visually cohesive, helping users move through complex tasks with clarity and confidence.",
    tools: [
      "logos:figma"
    ]
  },

  {
    name: "Prototype",
    subtitle: "Test & Iterate",
    icon: "lucide:play",
    angle: 90,
    color: "#8B4A3C",
    desc: "I prototype ideas early to explore interactions, validate assumptions, and refine the experience before development.",
    tools: [
      "logos:figma"
    ]
  },

  {
    name: "Heuristic Evaluation",
    subtitle: "Spot the friction",
    icon: "lucide:clipboard-check",
    angle: 135,
    color: "#C4956A",
    desc: "I evaluate existing experiences to identify usability issues, accessibility gaps, and areas where the product can be simpler, clearer, and more effective.",
    tools: [
      "logos:lighthouse",
      "logos:chrome",
      "logos:figma",
      "logos:notion-icon"
    ]
  },

  {
    name: "Frontend",
    subtitle: "Bring it to life",
    icon: "lucide:code-xml",
    angle: 180,
    color: "#8B4A3C",
    desc: "With a development background, I can think beyond static screens, considering implementation, responsive behavior, and practical collaboration from the start.",
    tools: [
      "logos:html-5",
      "logos:css-3",
      "logos:javascript",
      "logos:github-icon",
      "logos:framer"
    ]
  },

  {
    name: "Responsive Design",
    subtitle: "Built for every screen",
    icon: "lucide:monitor-smartphone",
    angle: 225,
    color: "#C4956A",
    desc: "I design flexible experiences that adapt across devices and contexts, keeping usability, hierarchy, and consistency strong from mobile to desktop.",
    tools: [
      "logos:figma",
      "logos:chrome",
      "logos:css-3"
    ]
  }
];

// Soft Skills List
export const SOFT_SKILLS = [
  {
    title: "Empathetic",
    icon: "lucide:users",
    desc: "I put myself in the user's shoes to understand real needs and pain points."
  },
  {
    title: "Clear communicator",
    icon: "lucide:message-circle",
    desc: "I translate complex ideas into simple, actionable solutions for any audience."
  },
  {
    title: "Collaborative",
    icon: "lucide:users-round",
    desc: "I work closely with clients and teams to co-create and achieve shared goals."
  },
  {
    title: "Problem solver",
    icon: "lucide:puzzle",
    desc: "I enjoy turning challenges into opportunities through thoughtful design."
  },
  {
    title: "Organized & Strategic",
    icon: "lucide:target",
    desc: "I see the big picture and break it down into clear steps that move projects forward."
  },
  {
    title: "Adaptable",
    icon: "lucide:heart",
    desc: "I'm curious, open-minded and quick to learn in changing contexts and priorities."
  }
];

/***********************************
MEDICARE PAGE
***********************************/

//Project Glance
export const PROJECT_GLANCE = [
  {
    title: "3 → 1",
    description: "From three separate apps to one unified experience.",
    icon: "flow"
  },
  {
    title: "5",
    description: "Key user flows redesigned to simplify essential health tasks.",
    icon: "document"
  },
  {
    title: "Focus on Trust",
    description: "Clarity, transparency and human-centred design.",
    icon: "shield"
  },
  {
    title: "Goal",
    description: "Empower Australians to manage and securely share their health information.",
    icon: "info"
  }
];

// Icons
export const ICONS = {

  flow: `
        <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round">

            <circle cx="5" cy="6" r="2"></circle>
            <circle cx="19" cy="12" r="2"></circle>
            <circle cx="5" cy="18" r="2"></circle>

            <path d="M7 6h4a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4"></path>
            <path d="M17 18H7"></path>

        </svg>
    `,

  control: `
        <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round">

            <circle cx="12" cy="12" r="3"></circle>

            <path d="M12 1v2"></path>
            <path d="M12 21v2"></path>

            <path d="M4.22 4.22l1.42 1.42"></path>
            <path d="M18.36 18.36l1.42 1.42"></path>

            <path d="M1 12h2"></path>
            <path d="M21 12h2"></path>

            <path d="M4.22 19.78l1.42-1.42"></path>
            <path d="M18.36 5.64l1.42-1.42"></path>

        </svg>
    `,

  document: `
        <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round">

            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>

            <polyline points="14 2 14 8 20 8"></polyline>

            <line x1="9" y1="13" x2="15" y2="13"></line>

            <line x1="9" y1="17" x2="11" y2="17"></line>

        </svg>
    `,

  warning: `
        <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round">

            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0"></path>

            <line x1="12" y1="9" x2="12" y2="13"></line>

            <line x1="12" y1="17" x2="12.01" y2="17"></line>

        </svg>
    `,

  shield: `
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round">

            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>

        </svg>
    `,

  info: `
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round">

            <circle cx="12" cy="12" r="10"></circle>

            <path d="M12 16v-4"></path>

            <path d="M12 8h.01"></path>

        </svg>
    `

};

// Problem Section
export const PAIN_POINTS = [

  {
    icon: "flow",
    title: "Confusing experience",
    description: "3 apps, 3 different logins and no clear path."
  },

  {
    icon: "control",
    title: "No control",
    description: "Users can't update or manage their own information."
  },

  {
    icon: "document",
    title: "Hard to understand",
    description: "Medical information is technical and overwhelming."
  },

  {
    icon: "warning",
    title: "Unclear feedback",
    description: "Errors don't explain what happened or what to do."
  }

];

export const USER_PERSONA = {
  initials: "ML",
  name: "Mei Lin",
  age: 34,
  role: "International student",
  location: "Sydney",
  quote:
    "I just want to see my results and know everything is okay.",
  needs: [
    "Guidance",
    "Confidence",
    "Clarity",
    "Control"
  ]
};

// My Role - Skills
export const ROLE_SKILLS = [

  "Research",
  "UX Strategy",
  "User Journey",
  "Wireframing",
  "UI Design",
  "Prototyping",
  "Frontend"

];

export const HEURISTIC_AUDIT = [

  {
    severity: "Critical",
    score: "1/10",
    title: "Error prevention & recovery",
    description: "\"No records found\" with zero explanation.",
    type: "critical"
  },

  {
    severity: "Critical",
    score: "2/10",
    title: "Visibility of system status",
    description: "No feedback after completing actions.",
    type: "critical"
  },

  {
    severity: "Critical",
    score: "2/10",
    title: "Help users recognize & recover from errors",
    description: "No guidance when something goes wrong.",
    type: "critical"
  },

  {
    severity: "Major",
    score: "3/10",
    title: "User control & freedom",
    description: "Users cannot edit their own health information.",
    type: "major"
  },

  {
    severity: "Moderate",
    score: "4/10",
    title: "Match between system & real world",
    description: "Medical terminology lacks plain-language support.",
    type: "moderate"
  }

];

// Journey Map
export const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Discover",
    emotion: "Neutral",
    description: "Unclear difference between app and website",
    status: "neutral"
  },
  {
    number: "02",
    title: "Install",
    emotion: "Optimistic",
    description: "App downloaded successfully",
    status: "good"
  },
  {
    number: "03",
    title: "Set up",
    emotion: "Confused",
    description: "No guidance linking three apps",
    status: "focus"
  },
  {
    number: "04",
    title: "First login",
    emotion: "Anxious",
    description: "Error with no explanation",
    status: "bad"
  },
  {
    number: "05",
    title: "Find records",
    emotion: "Frustrated",
    description: "No search, no plain-language labels",
    status: "bad"
  },
  {
    number: "06",
    title: "Share",
    emotion: "Disappointed",
    description: "No official share function exists",
    status: "bad"
  }
];