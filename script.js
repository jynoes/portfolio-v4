/* ================================================================
   SCRIPT.JS — Portfolio JavaScript
   ================================================================

   TABLE OF CONTENTS
   -----------------
   1.  PORTFOLIO_DATA  ← ★ EDIT YOUR CONTENT HERE
   2.  Tab Routing     (showPage)
   3.  Theme Toggle    (toggleTheme, initTheme)
   4.  Scroll Animations (initScrollObserver)
   5.  Skill Bars      (animateSkillBars)
   6.  Mobile Menu     (toggleMenu, closeMobileMenu)
   7.  Project Case Study Page (openCaseStudy, renderCaseStudy)
   8.  Contact Form    (submitContact)
   9.  Event Listeners & Init
================================================================ */

'use strict';


/* ================================================================
   1. PORTFOLIO_DATA
   ----------------------------------------------------------------
   ★ THIS IS THE ONLY PLACE YOU NEED TO EDIT YOUR CONTENT.
   Update every field with your real information.
   The page HTML reads from this object, so changing it here
   automatically updates the relevant sections.
================================================================ */

const PORTFOLIO_DATA = {

  /* ── Identity ─────────────────────────────────────────────── */
  name:        "Jynoe Sabido",
  firstName:   "Jynoe",
  /* Logo initials are auto-derived from name (e.g. "Your Name" → "YN")
     You can override by adding: logoInitials: "XX"               */
  role:        "Full-Stack Developer & Designer",
  location:    "Manila, Philippines",
  available:   true,       /* true = green dot + "Available" shown */
  email:       "you@email.com",
  resume:      "documents/Sabido - CV.pdf",   /* path or URL to your resume PDF */

  /* ── Hero ─────────────────────────────────────────────────── */
  heroHeading: " crafting products from idea to launch.",
  heroBio:     `UI/UX Designer and WordPress Developer with a passion for turning ideas into meaningful digital experiences. I blend user-centered design, modern web development, and attention to detail to create websites that not only look great but also deliver real business value.`,

    /* ── Hero background icons ───────────────────────────────────
     Skills/services shown scattered behind the hero heading.
     Each pops in on page load, grouped into 3 staggered sets
     (see popHeroIcons() in script.js). Position values are
     percentages of the #hero section (top/left = center point
     of the icon). rotate is in degrees, size in px.
     ★ EDIT: swap icons/positions to match the services you want
     to headline — any Font Awesome class works.                */
  heroIcons: [
    { icon: "fa-brands fa-figma",           top: 20, left: 30, rotate: -12, size: 34 },
    { icon: "fa-solid fa-code",             top: 14, left: 47, rotate: -6,  size: 26 },
    { icon: "fa-brands fa-wordpress",       top: 26, left: 86, rotate: 10,  size: 32 },
    { icon: "fa-solid fa-magnifying-glass", top: 46, left: 5,  rotate: -15, size: 28 },
    { icon: "fa-brands fa-react",           top: 42, left: 93, rotate: 14,  size: 28 },
    { icon: "fa-brands fa-elementor",       top: 66, left: 8,  rotate: 8,   size: 28 },
    { icon: "fa-solid fa-palette",          top: 62, left: 90, rotate: -10, size: 28 },
    { icon: "fa-brands fa-square-js",       top: 80, left: 22, rotate: 6,   size: 30 },
    { icon: "fa-brands fa-github",          top: 78, left: 76, rotate: -8,  size: 28 },
  ],

  /* ── About ────────────────────────────────────────────────── */
  /* photo: path to your image file, or leave empty string "" for emoji */
  photo:       "",
  photoEmoji:  "🧑‍💻",
  aboutHeading: "A little about me.",
  aboutParagraphs: [
    `I'm a developer and designer based in <strong>Metro Manila, Philippines</strong>.
     I got into tech because I love turning ideas into things people can actually use.`,
    `When I'm not building, I'm usually illustrating, reading, learning something new,
     or hunting for good coffee. I care a lot about craft — clean code
     and interfaces that feel effortless.`,
    `I'm currently open to full-time roles, freelance projects,
     and interesting collaborations.`,
  ],

  /* ── Experience ───────────────────────────────────────────── */
  /* Each object: { years, company, role, desc } */
  experience: [
    {
      years:   "2024 — Present",
      company: "U-BIX Corporation",
      role:    "UI/UX Designer",
      desc:    "I design user-friendly interfaces in Figma with consistent branding across corporate affiliates. I build and optimize Wix and WordPress websites using Elementor, focusing on responsiveness, speed, and performance. I also use AI tools to improve workflows, manage SEO through Google Search Console, and create social media content across Facebook, Instagram, and LinkedIn to boost engagement and brand presence.",
    },
    {
      years:   "2023",
      company: "PADES Printing",
      role:    "Frontend Web Developer",
      desc:    "Built a responsive business website using ReactJS, Bootstrap, HTML, CSS, and JavaScript, improving usability and overall user experience. Designed user-friendly interfaces in Figma and managed projects using Jira and Slack, ensuring smooth collaboration, efficient workflows, and on-time delivery within an agile environment.",
    },
    {
      years:   "2022",
      company: "VisibleTeam Solutions OPC",
      role:    "WordPress Developer Intern",
      desc:    "Designed and maintained user-friendly web pages using Elementor and WordPress, ensuring strong visuals, smooth functionality, and consistent site performance. Coordinated with teams through online collaboration tools to manage multiple websites, align design with technical requirements, and deliver projects efficiently and on schedule.",
    },
  ],

  /* ── Projects ─────────────────────────────────────────────── */
  /* Each object: { id, title, emoji, thumbGradient, tags, summary, detail, links } */
  /* thumbGradient: CSS gradient string for the card thumbnail */
  /* links: array of { label, url } for the modal buttons */
  projects: [
    {
      id:             "proj1",
      title:          "Duck Donuts Philippines",
      thumbGradient:  "linear-gradient(#ff5e62, #ff9966)",
      image:          "images/Duck Donuts Preview.png",
      imageAlt:       "Duck Donuts Website Preview",
      tags:           ["WordPress", "Elementor", "Figma", "Hostinger"],
      summary:        "Designed, developed, and shipped under 3 weeks! #EASY",
      detail:         `Designed and maintained the official Duck Donuts Philippines website, creating a responsive and user-friendly experience that reflects the brand's fun, customizable donut offerings while ensuring consistency across all devices.`,
      links: [
        { label: "Live Site →",  url: "https://duckdonutsph.com/" },
      ],
      /* ── Case study content ─────────────────────────────────
         ★ EDIT: this is placeholder copy — replace every field
         with your real process, decisions, and learnings.      */
      caseStudy: {
        role: "UI/UX Designer & WordPress Developer",
  timeline: "3 weeks",

  overview: `Duck Donuts needed a Philippine-market website that could go live before the opening of its first local branch. I handled the project end-to-end—from wireframes in Figma to a fully responsive WordPress website—while adapting an established international brand for a Filipino audience.`,

  problem: `The biggest challenge was the timeline. The website had to be designed, developed, and launched before the first Duck Donuts branch officially opened in the Philippines. While the brand identity was already well established through Duck Donuts US, the experience needed to feel familiar to local customers and support the launch of a completely new market.`,

  process: [
    {
      title: "Research & Discovery",
      body: `I studied the existing Duck Donuts US website, official brand assets, and visual guidelines to ensure consistency with the global brand. I also researched local food and quick-service restaurant (QSR) websites to understand how Filipino users browse restaurant websites and interact with food brands. I paid close attention to how color, imagery, and call-to-actions influence appetite and purchasing decisions. These insights helped balance the playful Duck Donuts personality with a layout that felt familiar and easy to navigate for local customers.`,
    },
    {
      title: "Wireframes & Structure",
      body: `I first mapped the user journey in Figma with low-fidelity wireframes, prioritizing the information customers typically look for: the menu, store locations, and online ordering. Since delivery is primarily handled through GrabFood and Foodpanda in the Philippines, I made ordering highly visible by placing it in the navigation and dedicating a prominent section on the homepage. The overall structure followed browsing patterns common among Filipino users, allowing visitors to find key information with minimal effort.`,
    },
    {
      title: "Visual Design",
      body: `The visual design stayed faithful to Duck Donuts' vibrant identity by using the brand's signature colors, playful imagery, and appetizing product photography. The layouts emphasized large visuals and generous spacing to showcase the customizable donuts while maintaining a clean hierarchy that guided users toward ordering and learning more about the brand.`,
    },
    {
      title: "Build & QA",
      body: `I developed the website in WordPress using Elementor with a focus on responsiveness and performance. Before launch, I tested the website across multiple screen sizes and browsers, optimized images and page assets for faster loading, and ensured the mobile experience remained intuitive, knowing that the majority of visitors would access the site from their phones.`,
    },
  ],

  outcome: `The website was successfully launched before the grand opening of Duck Donuts Philippines, helping establish the brand's online presence from day one. The project was delivered within the three-week timeline and received positive feedback from stakeholders for staying true to the international brand while catering to the local market. The website has since been updated to reflect Duck Donuts' 2025 global rebrand, demonstrating its ability to evolve alongside the brand.`,
      },
    },
    {
      id:             "proj2",
      title:          "Pivo Praha Philippines",
      image:          "images/Pivo Praha Philippines Preview.png",
      imageAlt:       "Pivo Praha Philippines Website Preview",
      tags:           ["Figma", "WordPress", "Elementor", "Hostinger"],
      summary:        "A website for a must-try beer brewery in Poblacion, Makati.",
      detail:         `Designed and developed Pivo Praha's website, crafting a responsive digital experience that showcases authentic Czech-style craft beers, highlights the brand's heritage, and strengthens its presence in the Philippine craft beer market.`,
      links: [
        { label: "Live Site →", url: "https://pivoprahaph.com/" },
      ],
      /* ── Case study content ─────────────────────────────────
         ★ EDIT: this is placeholder copy — replace every field
         with your real process, decisions, and learnings.      */
      caseStudy: {
        role:     "UI/UX Designer & Developer",
        timeline: "1 month & 2 weeks",
        overview: `Pivo Praha needed a website that could carry its Czech craft-beer heritage online while still feeling at home in the Poblacion, Makati nightlife scene. I designed and built the site from the ground up in Figma and WordPress.`,
        problem:  `★ EDIT: what was the core design challenge — balancing "authentic Czech heritage" with a modern nightlife brand? Limited photography? A need to highlight the menu and location clearly?`,
        process: [
          {
            title: "Research & Discovery",
            body:  `★ EDIT: what references did you pull from — Czech beer hall aesthetics, competitor craft-beer bars in Manila? What did the client's goals tell you?`,
          },
          {
            title: "Wireframes & Structure",
            body:  `★ EDIT: how did you structure the site (home, menu, location, about) and why? Any early low-fidelity layouts?`,
          },
          {
            title: "Visual Design",
            body:  `★ EDIT: how did you choose the color palette, typography, and imagery to feel both "Czech heritage" and "craft beer bar"?`,
          },
          {
            title: "Build & QA",
            body:  `★ EDIT: how did you bring it to life in Elementor/WordPress, and what did you check before launch?`,
          },
        ],
        outcome: `★ EDIT: what happened after launch — client feedback, foot traffic from the site, anything measurable?`,
      },
    },
    {
      id:             "proj3",
      title:          "Animated Portfolio",
      image:          "images/Animated Portfolio Preview.png",
      imageAlt:       "Animated Portfolio Preview",
      tags:           ["HTML", "CSS", "JavaScript", "Github", "Microsoft Paint"],
      summary:        "Animating and coding in one project? Gotta do that!",
      detail:         `YouTube made me do it. A browser-based project developed using vanilla HTML, CSS, and JavaScript, showcasing interactive functionality, dynamic user interactions, and fundamental front-end development skills. `,
      links: [
        { label: "Live Site →", url: "https://funny-stardust-8d9344.netlify.app/" },
      ],
      /* ── Case study content ─────────────────────────────────
         ★ EDIT: this is placeholder copy — replace every field
         with your real process, decisions, and learnings.      */
      caseStudy: {
        role:     "Designer & Developer",
        timeline: "★ EDIT: e.g. a weekend, 1 week",
        overview: `A self-directed project built to sharpen vanilla front-end skills — combining hand-drawn illustration with interactive HTML, CSS, and JavaScript animation, inspired by a YouTube tutorial series.`,
        problem:  `★ EDIT: what were you trying to learn or prove with this project — animation timing, DOM manipulation, illustration-to-web workflow?`,
        process: [
          {
            title: "Concept & Illustration",
            body:  `★ EDIT: how did you sketch/illustrate the assets in Microsoft Paint, and what was the creative direction?`,
          },
          {
            title: "Structure & Layout",
            body:  `★ EDIT: how did you plan the HTML structure and CSS layout for the animated scenes?`,
          },
          {
            title: "Animation & Interaction",
            body:  `★ EDIT: what interactions or animations did you build with JavaScript, and what was tricky about getting them to feel right?`,
          },
          {
            title: "Polish & Deploy",
            body:  `★ EDIT: how did you test across browsers/screen sizes, and what was involved in deploying it (Netlify, GitHub)?`,
          },
        ],
        outcome: `★ EDIT: what did you learn from building this, and how has it shaped projects since?`,
      },
    },
    {
      id:             "proj4",
      title:          "Maxicare Mobile Application Case Study",
      image:          "images/Maxicare App Case Study .png",
      imageAlt:       "Animated Portfolio Preview",
      tags:           ["Figma", "Design Thinking", "User Research", "UI/UX"],
      summary:        "A case study for a job application. Click to know what happened.",
      detail:         `A conceptual solution reimagining digital healthcare management. Built as a design assessment, this project focuses on simplifying complex health-related information into an intuitive, accessible, and business-driven mobile interface.`,
      links: [
        { label: "Figma →", url: "#" },
      ],
      /* ── Case study content ─────────────────────────────────
         ★ EDIT: this is placeholder copy — replace every field
         with your real process, decisions, and learnings.      */
      caseStudy: {
        role:     "UI/UX Designer",
        timeline: "★ EDIT: e.g. 1 week design assessment",
        overview: `A conceptual redesign of the Maxicare mobile app, built as a design assessment for a job application. The goal was to simplify complex health-related information into an intuitive, business-driven mobile experience.`,
        problem:  `★ EDIT: what pain point in the existing Maxicare app (or healthcare apps generally) were you asked to solve? Who was the target user?`,
        process: [
          {
            title: "Research & Discovery",
            body:  `★ EDIT: what user research or competitive analysis did you do — interviews, surveys, reviewing the existing app's pain points?`,
          },
          {
            title: "Define & Ideate",
            body:  `★ EDIT: how did you turn research into problem statements, user personas, or user flows? Any information-architecture decisions worth calling out?`,
          },
          {
            title: "Wireframes & Prototyping",
            body:  `★ EDIT: how did you move from low-fidelity wireframes to interactive Figma prototypes? What key screens did you focus on?`,
          },
          {
            title: "Testing & Iteration",
            body:  `★ EDIT: did you run usability testing or get feedback? What changed as a result?`,
          },
        ],
        outcome: `★ EDIT: what was the final deliverable, and what feedback did you get on it (from the employer, peers, or testers)?`,
      },
    },
    {
      id:             "proj5",
      title:          "SG Bank Dumaguete",
      image:          "images/SG Bank Website Preview.png",
      imageAlt:       "Animated Portfolio Preview",
      tags:           ["Figma", "WordPress", "Elementor", "Hostinger"],
      summary:        "A website for a rural bank in Dumaguete, Philippines.",
      detail:         `Designed and maintained SG Bank's website, delivering a responsive and accessible user experience that promotes financial products, strengthens brand credibility, and supports customer engagement.`,
      links: [
        { label: "Live Site →", url: "https://sgbankph.com/" },
      ],
      /* ── Case study content ─────────────────────────────────
         ★ EDIT: this is placeholder copy — replace every field
         with your real process, decisions, and learnings.      */
      caseStudy: {
        role:     "UI/UX Designer & Developer",
        timeline: "★ EDIT: e.g. 3 weeks",
        overview: `SG Bank needed a website that felt trustworthy and credible for a rural banking audience in Dumaguete, while clearly presenting its financial products. I designed and developed the site in Figma and WordPress.`,
        problem:  `★ EDIT: what made this project distinct — a need for accessibility for a wide range of users, trust-building for a financial brand, or presenting many product types clearly?`,
        process: [
          {
            title: "Research & Discovery",
            body:  `★ EDIT: what did you look at — other rural/community bank sites, accessibility standards, the client's existing materials?`,
          },
          {
            title: "Wireframes & Structure",
            body:  `★ EDIT: how did you organize the many financial products and services into a clear, navigable structure?`,
          },
          {
            title: "Visual Design",
            body:  `★ EDIT: how did you balance "trustworthy bank" with an approachable, modern feel? Color, typography, imagery choices?`,
          },
          {
            title: "Build & QA",
            body:  `★ EDIT: how did you build and test the site for accessibility, responsiveness, and performance before launch?`,
          },
        ],
        outcome: `★ EDIT: what was the result — client satisfaction, improved credibility, positive customer feedback?`,
      },
    },
  ],

  /* ── Skills ───────────────────────────────────────────────── */
  /* level: 0–100. Controls the width of the progress bar. */
  skills: [
    { icon: "fa-brands fa-figma",            name: "Figma",                       blurb: "Interface design, prototyping, and design systems.",        level: 90 },
    { icon: "fa-brands fa-square-js",        name: "JavaScript",                  blurb: "Interactive logic for dynamic, client-side experiences.",   level: 85 },
    { icon: "fa-brands fa-react",            name: "React",                       blurb: "Component-based UIs for fast, maintainable frontends.",     level: 80 },
    { icon: "fa-brands fa-node-js",          name: "Node.js",                     blurb: "Server-side JavaScript for APIs and backend logic.",        level: 75 },
    { icon: "fa-brands fa-github",           name: "Github",                      blurb: "Version control, code review, and team collaboration.",     level: 85 },
    { icon: "fa-brands fa-python",           name: "Python",                      blurb: "Scripting, automation, and lightweight data tasks.",        level: 70 },
    { icon: "fa-solid fa-database",          name: "Databases (SQL/NoSQL)",       blurb: "Structuring, querying, and managing application data.",     level: 65 },
    { icon: "fa-brands fa-wordpress",        name: "WordPress",                   blurb: "Building and maintaining CMS-driven business sites.",      level: 90 },
    { icon: "fa-brands fa-elementor",        name: "Elementor",                   blurb: "Drag-and-drop page building with pixel-level control.",     level: 88 },
    { icon: "fa-brands fa-google",           name: "Google Search Console",       blurb: "Monitoring indexing, performance, and search health.",      level: 75 },
    { icon: "fa-solid fa-magnifying-glass",  name: "Search Engine Optimization",  blurb: "Improving visibility through on-page SEO practices.",      level: 78 },
    { icon: "fa-brands fa-wix",              name: "Wix",                         blurb: "Fast website builds for small business clients.",           level: 82 },
    { icon: "fa-brands fa-webflow",          name: "Webflow",                     blurb: "Visual web design with production-ready markup.",          level: 70 },
    { icon: "fa-solid fa-t",                 name: "Tailwind",                    blurb: "Utility-first styling for rapid, consistent UI.",           level: 75 },
    { icon: "fa-brands fa-bootstrap",        name: "Bootstrap",                   blurb: "Responsive components for cross-device layouts.",          level: 80 },
    { icon: "fa-brands fa-html5",            name: "HTML",                       blurb: "Semantic markup as the foundation of every build.",        level: 92 },
    { icon: "fa-brands fa-css3-alt",         name: "CSS",                         blurb: "Layout, responsiveness, and visual polish.",                level: 90 },
    { icon: "fa-solid fa-c",                 name: "Canva",                       blurb: "Quick, on-brand graphics for web and social.",              level: 85 },
    { icon: "fa-brands fa-meta",             name: "Meta Business Suite",         blurb: "Managing content and engagement across Meta platforms.",   level: 80 },
    { icon: "fa-brands fa-linkedin-in",      name: "Corporate LinkedIn",          blurb: "Brand-voice content for company LinkedIn presence.",       level: 75 },
    { icon: "fa-solid fa-code",              name: "Visual Studio Code",          blurb: "Daily driver editor for every part of the stack.",          level: 88 },
  ],

/* ── Services ─────────────────────────────────────────────── */
/* svg: raw inline markup using stroke="currentColor" so it
   recolors automatically with the theme toggle.               */
services: [
  {
    title: "Web Design & Development",
    blurb: "User interface that converts, clean, custom code for fast, responsive websites.",
    icon: "images/services/svg-1.svg"
  },
  {
    title: "Visual Identity Systems",
    blurb: "Cohesive visual systems, logos, and guidelines that define your brand.",
    icon: "images/services/svg-2.svg",
  },
  {
    title: "Pitch Decks & Collaterals",
    blurb: "Polished, persuasive presentations and high-impact marketing assets.",
    icon: "images/services/svg-3.svg",
  },
  {
    title: "Hand-drawn Illustrations",
    blurb: "Custom hand-drawn illustrations capturing people, places, and everyday scenes.",
    icon: "images/services/svg-4.svg",
  },
],

  /* ── Social Links ─────────────────────────────────────────── */
  /* icon: any emoji. url: full URL. handle: text shown on the right */
  socials: [
    { icon: "fa-brands fa-github", label: "GitHub",     url: "https://github.com/jynoes", handle: "/jynoes"    },
    { icon: "fa-brands fa-linkedin", label: "LinkedIn",   url: "https://www.linkedin.com/in/jynoe-sabido-aab142248/", handle: "Jynoe Sabido"},
    { icon: "fa-solid fa-envelope", label: "Email",      url: "mailto:jynoe.sabido22@gmail.com", handle: "jynoe.sabido22@gmail.com" },
  ],

  /* ── Contact Form ─────────────────────────────────────────── */
  /* formAction: your Formspree endpoint (see README / launch guide)
     Leave as "#" until you've set up Formspree.               */
  formAction: "https://formspree.io/f/mdavvone",
  calEnabled:     true,
  calLink:        "jynoe-sabido/30min",   /* ★ EDIT: your real Cal.com link */
  calButtonLabel: "Book a call",
};

/* ================================================================
   1b. ANALYTICS (Google Analytics 4)
   ----------------------------------------------------------------
   trackEvent() safely sends a GA4 event. Safe to call even if
   gtag.js hasn't loaded yet (e.g. ad-blocker) — it just no-ops.
================================================================ */

/**
 * trackEvent
 * @param {string} eventName - e.g. 'page_view', 'select_content'
 * @param {object} params - extra event parameters GA4 will log
 */
function trackEvent(eventName, params = {}) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}


/* ================================================================
   1c. INLINE SVG LOADER
   ----------------------------------------------------------------
   Fetches an .svg file's raw markup and caches it, so the file's
   internals (classes like .hover-line, currentColor) stay live
   and stylable — unlike <img src="...">, which flattens the SVG.
================================================================ */

const svgCache = {};

async function loadInlineSVG(path) {
  if (svgCache[path]) return svgCache[path];
  const res = await fetch(path);
  const text = await res.text();
  svgCache[path] = text;
  return text;
}

/* ================================================================
   2. TAB ROUTING
   ----------------------------------------------------------------
   showPage(pageId) hides all .page elements, shows the target
   one, and updates the nav tab highlight.
================================================================ */

/**
 * showPage
 * Switches the visible page and updates active tab styles.
 * @param {string} pageId - must match a <main id="page-{pageId}"> in HTML
 */
function showPage(pageId) {
  /* Hide every page */
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  /* Show the target page */
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* Highlight the matching nav tab */
  document.querySelectorAll('[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

   /* Track this as a page view in GA4 (SPA tabs don't reload the URL,
     so GA4 won't see this automatically — we send it ourselves) */
  trackEvent('page_view', {
    page_title:    pageId,
    page_location: window.location.href.split('#')[0] + '#' + pageId,
  });

  /* Re-run scroll observer so newly visible elements can animate in */
  setTimeout(initScrollObserver, 80);

  /* Animate skill bars when the About page opens */
  if (pageId === 'about') {
    setTimeout(animateSkillBars, 200);
  }

  closeMobileMenu();
}


/* ================================================================
   3. THEME TOGGLE (Dark / Light Mode)
   ----------------------------------------------------------------
   Adds/removes class "light" on <html>.
   CSS variables in style.css change automatically.
   Preference is saved to localStorage so it persists on reload.
================================================================ */

/**
 * initTheme
 * Reads the saved preference from localStorage (or defaults to dark)
 * and applies it before the page renders to avoid a flash.
 */
function initTheme() {
  const saved = localStorage.getItem('theme');  /* 'dark' | 'light' | null */
  const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const useDark = saved ? saved === 'dark' : !preferLight;

  if (!useDark) {
    document.documentElement.classList.add('light');
  }

  updateToggleIcon();
}

/**
 * toggleTheme
 * Flips between dark and light mode and saves the choice.
 */
function toggleTheme() {
  const isLight = document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateToggleIcon();
  syncCalTheme();
}

/**
 * updateToggleIcon
 * Swaps the moon/sun emoji on the toggle button to match the current mode.
 */
function updateToggleIcon() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  const isLight = document.documentElement.classList.contains('light');
  btn.textContent    = isLight ? '☾' : '☀';
  btn.title          = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  btn.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
}


/* ================================================================
   4. SCROLL ANIMATIONS
   ----------------------------------------------------------------
   Uses IntersectionObserver to add .visible to .fade-in elements
   as they enter the viewport.
================================================================ */

let scrollObserver = null;

/**
 * initScrollObserver
 * Creates (or recreates) the observer and attaches it to all
 * .fade-in elements that haven't animated yet.
 */
function initScrollObserver() {
  if (scrollObserver) scrollObserver.disconnect();

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          scrollObserver.unobserve(entry.target);   /* animate once only */
        }
      });
    },
    { threshold: 0.1 }   /* trigger when 10% of element is visible */
  );

  document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
    scrollObserver.observe(el);
  });
}


/* ================================================================
   5. SKILL CARD ANIMATION
   ----------------------------------------------------------------
   Staggers each .skill-card into view, and wires up the
   cursor-following spotlight effect on hover.
================================================================ */

let skillsAnimated = false;

/**
 * animateSkillBars
 * Staggered fade/scale-in for each skill card as the About page opens,
 * plus animates each proficiency bar to its level.
 * Only runs once (skillsAnimated flag prevents re-runs).
 */
function animateSkillBars() {
  if (skillsAnimated) return;
  skillsAnimated = true;

  document.querySelectorAll('.skill-card').forEach((card, index) => {
    const fill  = card.querySelector('.skill-proficiency-fill');
    const level = fill ? (parseInt(fill.dataset.level, 10) || 0) : 0;

    setTimeout(() => {
      card.classList.add('skill-in');
      if (fill) fill.style.width = level + '%';
    }, index * 45);   /* 45ms stagger between each card */
  });
}

/**
 * initSkillSpotlight
 * Tracks the cursor position over each .skill-card and writes it to
 * CSS custom properties (--mx / --my) so style.css can render a soft
 * light that follows the mouse (see .skill-card::before).
 */
function initSkillSpotlight() {
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width)  * 100;
      const y = ((e.clientY - rect.top)  / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });
}


/* ================================================================
   6. MOBILE MENU
================================================================ */

const hamburgerBtn = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobile-menu');

/**
 * toggleMenu
 * Opens or closes the mobile dropdown menu.
 */
function toggleMenu() {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
}

/**
 * closeMobileMenu
 * Closes the menu — called by showPage and click-outside handler.
 */
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}

hamburgerBtn.addEventListener('click', toggleMenu);


/* ================================================================
   7. PROJECT CASE STUDY PAGE
   ----------------------------------------------------------------
   Clicking a project card navigates straight to a dedicated case
   study page (id="page-project"), populated dynamically from
   PORTFOLIO_DATA.projects[].caseStudy. Deep-linkable via
   "#project/{id}" and supports browser back/forward.
================================================================ */

/**
 * renderCaseStudy
 * Fills the #page-project template with one project's content.
 * @param {object} project - an entry from PORTFOLIO_DATA.projects
 */
function renderCaseStudy(project) {
  const cs = project.caseStudy || {};

  /* Hero image / gradient */
  const hero = document.getElementById('cs-hero');
  if (project.image) {
    hero.innerHTML = `<img src="${project.image}" alt="${project.imageAlt || project.title}" onerror="this.style.display='none'; this.parentElement.style.background='${project.thumbGradient || 'var(--color-surface-alt)'}';" />`;
    hero.style.background = '';
  } else {
    hero.innerHTML = '';
    hero.style.background = project.thumbGradient || 'var(--color-surface-alt)';
  }

  /* Title, summary, tags */
  document.getElementById('cs-title').textContent = project.title;
  document.getElementById('cs-summary').textContent = project.detail || project.summary || '';
  document.getElementById('cs-tags').innerHTML = (project.tags || [])
    .map(t => `<span class="chip">${t}</span>`)
    .join('');

  /* Meta row: role / timeline */
  const metaEl = document.getElementById('cs-meta');
  const metaItems = [];
  if (cs.role)     metaItems.push(`<div class="cs-meta-item"><span class="cs-meta-label">Role</span>${cs.role}</div>`);
  if (cs.timeline) metaItems.push(`<div class="cs-meta-item"><span class="cs-meta-label">Timeline</span>${cs.timeline}</div>`);
  metaEl.innerHTML = metaItems.join('');

  /* Overview / Problem / Outcome text blocks */
  setBlockText('cs-overview-block', 'cs-overview', cs.overview);
  setBlockText('cs-problem-block',  'cs-problem',  cs.problem);
  setBlockText('cs-outcome-block',  'cs-outcome',  cs.outcome);

  /* Process steps */
  const processBlock = document.getElementById('cs-process-block');
  const processEl = document.getElementById('cs-process');
  if (cs.process && cs.process.length) {
    processBlock.style.display = '';
    processEl.innerHTML = cs.process
      .map((step, i) => `
        <div class="cs-step">
          <div class="cs-step-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="cs-step-body">
            <h4 class="cs-step-title">${step.title}</h4>
            <p>${(step.body || '').replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `)
      .join('');
  } else {
    processBlock.style.display = 'none';
  }

  /* Links / CTA buttons */
  document.getElementById('cs-links').innerHTML = (project.links || [])
    .map(l => `
      <a href="${l.url}" class="btn btn-primary" target="_blank" rel="noopener">
        <span class="btn-text-wrap">
          <span class="btn-text">${l.label}</span>
          <span class="btn-text btn-text-clone" aria-hidden="true">${l.label}</span>
        </span>
      </a>
    `)
    .join('');

  /* Prev / Next case study nav */
  const all = PORTFOLIO_DATA.projects;
  const idx = all.findIndex(p => p.id === project.id);
  const prev = all[(idx - 1 + all.length) % all.length];
  const next = all[(idx + 1) % all.length];
  document.getElementById('cs-nav').innerHTML = `
    <a href="#project/${prev.id}" class="cs-nav-link cs-nav-prev" onclick="event.preventDefault(); openCaseStudy('${prev.id}');">
      <span class="cs-nav-dir">← Previous</span>
      <span class="cs-nav-title">${prev.title}</span>
    </a>
    <a href="#project/${next.id}" class="cs-nav-link cs-nav-next" onclick="event.preventDefault(); openCaseStudy('${next.id}');">
      <span class="cs-nav-dir">Next →</span>
      <span class="cs-nav-title">${next.title}</span>
    </a>
  `;
}

/**
 * setBlockText
 * Small helper: hides a case-study block entirely if there's no
 * copy for it yet, otherwise fills it in.
 */
function setBlockText(blockId, fieldId, text) {
  const block = document.getElementById(blockId);
  const field = document.getElementById(fieldId);
  if (!block || !field) return;
  if (text && text.trim()) {
    block.style.display = '';
    field.innerHTML = text.replace(/\n/g, '<br>');
  } else {
    block.style.display = 'none';
  }
}

/**
 * openCaseStudy
 * Navigates to the case study page for a given project id.
 * @param {string} projectId - must match a PORTFOLIO_DATA.projects[].id
 * @param {boolean} pushHistory - false when called from popstate/initial load
 */
function openCaseStudy(projectId, pushHistory = true) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  renderCaseStudy(project);

  /* Show the project page, hide the rest (mirrors showPage's job) */
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-project').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

  /* Case studies live under "Work" — keep that tab highlighted */
  document.querySelectorAll('[data-page]').forEach(link => {
    link.classList.toggle('active', link.dataset.page === 'home');
  });

  if (pushHistory) {
    history.pushState({ project: projectId }, '', `#project/${projectId}`);
  }

  trackEvent('select_content', {
    content_type: 'project_case_study',
    item_id:      project.id,
    item_name:    project.title,
  });
  trackEvent('page_view', {
    page_title:    `case-study-${project.id}`,
    page_location: window.location.href.split('#')[0] + `#project/${project.id}`,
  });

  setTimeout(initScrollObserver, 80);
  closeMobileMenu();
}

/**
 * backToWork
 * Leaves the case study page and returns to the Work tab.
 */
function backToWork() {
  showPage('home');
  history.pushState({}, '', window.location.pathname + window.location.search);
}

/* ── Browser back/forward support ───────────────────────────── */
window.addEventListener('popstate', () => {
  const match = window.location.hash.match(/^#project\/(.+)$/);
  if (match) {
    openCaseStudy(decodeURIComponent(match[1]), false);
  } else {
    showPage('home');
  }
});


/* ================================================================
   8. CONTACT FORM
   ----------------------------------------------------------------
   submitContact() validates inputs, then either POSTs to
   PORTFOLIO_DATA.formAction (Formspree) or shows a placeholder.
================================================================ */

/**
 * submitContact
 * Validates the three form fields and submits.
 * ★ Set PORTFOLIO_DATA.formAction to your Formspree ID to
 *   actually receive emails.
 */
async function submitContact() {
  const nameEl    = document.getElementById('cf-name');
  const emailEl   = document.getElementById('cf-email');
  const messageEl = document.getElementById('cf-message');
  const statusEl  = document.getElementById('form-status');
  const submitBtn = document.getElementById('cf-submit');

  const name    = nameEl.value.trim();
  const email   = emailEl.value.trim();
  const message = messageEl.value.trim();

  /* ── Validation ─────────────────────────────────────────── */
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    setStatus('error', 'Please enter your name.');
    nameEl.focus();
    return;
  }
  if (!email || !emailPattern.test(email)) {
    setStatus('error', 'Please enter a valid email address.');
    emailEl.focus();
    return;
  }
  if (!message) {
    setStatus('error', 'Please write a message.');
    messageEl.focus();
    return;
  }

  /* ── Submit ─────────────────────────────────────────────── */
  const endpoint = PORTFOLIO_DATA.formAction;

  /* If no real endpoint is set, show a helpful placeholder */
  if (!endpoint || endpoint === '#') {
    setStatus('success', '✓ (Demo mode) Connect Formspree to send real messages.');
    trackEvent('generate_lead', { method: 'contact_form_demo' });
    return;
  }

  /* Disable button while submitting */
  submitBtn.disabled  = true;
  document.getElementById('cf-submit-label').textContent = 'Sending…';

  try {
    const res = await fetch(endpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body:    JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('success', '✓ Message sent! I\'ll get back to you soon.');
      trackEvent('generate_lead', { method: 'contact_form' });
      nameEl.value    = '';
      emailEl.value   = '';
      messageEl.value = '';
    } else {
      setStatus('error', 'Something went wrong. Please try emailing me directly.');
    }
  } catch {
    setStatus('error', 'Network error. Please try emailing me directly.');
  }

  submitBtn.disabled  = false;
  document.getElementById('cf-submit-label').textContent = 'Send message →';
}

/**
 * setStatus
 * Updates the #form-status element with a colored message.
 * @param {'success'|'error'} type
 * @param {string} message
 */
function setStatus(type, message) {
  const el = document.getElementById('form-status');
  if (!el) return;
  el.style.color   = type === 'success' ? 'var(--color-green)' : 'var(--color-rose)';
  el.textContent   = message;
}


/* ================================================================
   9. DYNAMIC CONTENT RENDERING
   ----------------------------------------------------------------
   These functions read PORTFOLIO_DATA and inject HTML into
   the page, so you only update your data — never the HTML.
================================================================ */

/**
 * renderNav
 * Sets the logo initials from PORTFOLIO_DATA.name (first letters of each word).
 * Also updates resume link hrefs.
 */
function renderNav() {
  /* Derive initials from the name — e.g. "Your Name" → "YN" */
  const initials = PORTFOLIO_DATA.name
    .split(' ')
    .map(w => w[0] || '')
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const logo = document.querySelector('.nav-logo');
  if (logo) logo.textContent = initials;

  const resumeLinks = document.querySelectorAll('.resume-link');
  resumeLinks.forEach(l => l.setAttribute('href', PORTFOLIO_DATA.resume));
}

/**
 * renderHeroGrid
 * Creates 16 grid cells (4 cols × 4 rows) inside #hero-grid-bg.
 *
 * WHY 4 SPANS PER CELL:
 * CSS only gives each element two pseudo-elements (::before and ::after),
 * so you can only draw 2 corners that way. To get all 4 corners on every
 * cell, we inject 4 <span> children — one per corner — and style each
 * with a different combination of border-top/right/bottom/left in CSS.
 *
 * Span class names:
 *   .corner-tl  → top-left     → border-top + border-left
 *   .corner-tr  → top-right    → border-top + border-right
 *   .corner-bl  → bottom-left  → border-bottom + border-left
 *   .corner-br  → bottom-right → border-bottom + border-right
 *
 * To change grid density: update COLS, ROWS, and the matching
 * grid-template-columns value in style.css (#hero-grid-bg).
 */
function renderHeroGrid() {
  const bg = document.getElementById('hero-grid-bg');
  if (!bg) return;

  const COLS = 6;
  const ROWS = 6;
  const CELL_COUNT = COLS * ROWS;

  const corners = `
    <span class="corner-tl" aria-hidden="true"></span>
    <span class="corner-tr" aria-hidden="true"></span>
    <span class="corner-bl" aria-hidden="true"></span>
    <span class="corner-br" aria-hidden="true"></span>
  `;

  bg.innerHTML = Array.from({ length: CELL_COUNT })
    .map(() => `<div class="hero-grid-cell">${corners}</div>`)
    .join('');
}

/**
 * renderHeroIcons
 * Builds the scattered skill/service icons behind the hero heading
 * from PORTFOLIO_DATA.heroIcons. Each icon starts invisible (see
 * .hero-icon in style.css) — popHeroIcons() reveals them afterwards.
 * Also assigns each icon to one of 3 groups (round-robin) so they
 * pop in as 3 staggered sets rather than all at once.
 */
function renderHeroIcons() {
  const container = document.getElementById('hero-icons');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.heroIcons
    .map((icon, index) => {
      const group      = index % 3;                           /* 0, 1, or 2 */
      const floatDur   = (6 + Math.random() * 2).toFixed(2);   /* 6-8s so icons don't float in lockstep */
      const floatDelay = (Math.random() * 2).toFixed(2);
      const style = [
        `--hi-top: ${icon.top}%`,
        `--hi-left: ${icon.left}%`,
        `--hi-rot: ${icon.rotate}deg`,
        `--hi-float-dur: ${floatDur}s`,
        `--hi-float-delay: ${floatDelay}s`,
        `font-size: ${icon.size}px`,
      ].join('; ');

      return `<i class="hero-icon ${icon.icon}" data-group="${group}" style="${style}"></i>`;
    })
    .join('');
}

/**
 * popHeroIcons
 * Reveals the hero icons in 3 staggered sets (group 0, then 1, then 2),
 * each set popping in together with a bouncy scale-up (see .hero-icon.popped
 * in style.css). Runs once per page load — re-showing the Work tab won't
 * re-trigger it, matching the one-time skill-card animation elsewhere.
 */
let heroIconsPopped = false;
function popHeroIcons() {
  if (heroIconsPopped) return;
  heroIconsPopped = true;

  const GROUP_DELAY = 450;   /* ms between each set of icons popping in */

  for (let group = 0; group < 3; group++) {
    setTimeout(() => {
      document.querySelectorAll(`.hero-icon[data-group="${group}"]`)
        .forEach(el => el.classList.add('popped'));
    }, 500 + group * GROUP_DELAY);
  }
}

/**
 * renderHero
 * Fills in the hero heading, bio, and availability dot.
 */
function renderHero() {
  const heading = document.getElementById('hero-heading');
  if (heading) {
    heading.innerHTML = `I'm ${PORTFOLIO_DATA.firstName}</span>, ${PORTFOLIO_DATA.heroHeading}`;
  }

  const bio = document.getElementById('hero-bio');
  if (bio) bio.textContent = PORTFOLIO_DATA.heroBio;

  const tagline = document.getElementById('hero-tagline');
  if (tagline) {
    tagline.textContent = PORTFOLIO_DATA.available
      ? 'Available for opportunities'
      : 'Currently not taking new work';
  }

  const dot = document.querySelector('.status-dot');
  if (dot) {
    dot.style.background = PORTFOLIO_DATA.available
      ? 'var(--color-green)'
      : 'var(--color-text-faint)';
  }
}

/**
 * renderExperience
 * Builds the experience list from PORTFOLIO_DATA.experience.
 */
function renderExperience() {
  const list = document.getElementById('experience-list');
  if (!list) return;

  list.innerHTML = PORTFOLIO_DATA.experience
    .map(exp => `
      <div class="exp-item fade-in">
        <div class="exp-year">${exp.years}</div>
        <div class="exp-right">
          <div class="exp-company">${exp.company}</div>
          <div class="exp-role">${exp.role}</div>
          <div class="exp-desc">${exp.desc}</div>
        </div>
      </div>
    `)
    .join('');
}

/**
 * renderProjects
 * Builds the project cards grid from PORTFOLIO_DATA.projects.
 */
function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.projects
    .map(p => `
      <div class="project-card fade-in" onclick="openCaseStudy('${p.id}')" role="button" tabindex="0"
           aria-label="Open case study: ${p.title}">

        <div class="project-thumb">
          <img
            src="${p.image}"
            alt="${p.imageAlt}"
            loading="lazy"
            onerror="this.style.display='none'"
          />
        </div>

        <div class="project-body">
          <h3>${p.title}</h3>
          <p style="font-size:.85rem; margin-top:.4rem;">${p.summary}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `)
    .join('');

  /* Allow keyboard activation of project cards */
  grid.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') card.click();
    });
  });
}

/**
 * renderAbout
 * Fills in bio paragraphs and the photo area.
 */
function renderAbout() {
  const heading = document.getElementById('about-heading');
  if (heading) heading.textContent = PORTFOLIO_DATA.aboutHeading;

  const bio = document.getElementById('about-bio');
  if (bio) {
    bio.innerHTML = PORTFOLIO_DATA.aboutParagraphs
      .map(p => `<p>${p}</p>`)
      .join('');
  }

  const photo = document.getElementById('about-photo');
  if (photo) {
    if (PORTFOLIO_DATA.photo) {
      photo.innerHTML = `<img src="${PORTFOLIO_DATA.photo}" alt="Photo of ${PORTFOLIO_DATA.name}">`;
    } else {
      photo.textContent = PORTFOLIO_DATA.photoEmoji;
    }
  }
}

/**
 * skillTier
 * Turns a 0–100 level into a short, human-readable label.
 * ★ EDIT the thresholds/labels here if you'd rather use your own scale.
 */
function skillTier(level) {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Proficient';
  return 'Familiar';
}

// NEW
/**
 * renderSkills
 * Builds the skill cards from PORTFOLIO_DATA.skills.
 * Every card uses the single global --color-accent token (no per-card
 * color) — recoloring --color-accent in style.css recolors every card
 * at once. Each card shows: a large translucent icon watermarked in
 * the background, a solid icon badge, the name, a one-line blurb, and
 * a proficiency bar + percentage.
 */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.skills
    .map(s => `
      <div class="skill-card">

        <div class="skill-icon-box">
          <i class="${s.icon}"></i>
        </div>

        <div>
        <div class="skill-name">${s.name}</div>
        <p class="skill-blurb">${s.blurb}</p>
        </div>

      </div>
    `)
    .join('');

  initSkillSpotlight();
}

/**
 * initSkillGlow
 * Makes the soft light on each skill card follow the cursor.
 * On every mousemove we store the pointer's position relative to the
 * card in --mx / --my; the CSS ::before radial-gradient reads those
 * vars, and a plain :hover rule fades the glow in and out.
 */
function initSkillGlow() {
  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      card.style.setProperty('--my', `${e.clientY - rect.top}px`);
    });
  });
}

/**
 * renderServices
 * Builds service cards from PORTFOLIO_DATA.services, inlining each
 * SVG so it inherits --color-text-muted / --color-accent via
 * currentColor (see .service-thumb in CSS).
 */
async function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.services
    .map(s => `
      <div class="service-card fade-in">
        <div class="service-thumb" data-icon="${s.icon}"></div>
        <div class="service-body">
          <h3>${s.title}</h3>
          <p>${s.blurb}</p>
        </div>
      </div>
    `)
    .join('');

  const thumbEls = grid.querySelectorAll('.service-thumb');
  await Promise.all(
    Array.from(thumbEls).map(async el => {
      const svgText = await loadInlineSVG(el.dataset.icon);
      el.innerHTML = svgText;
    })
  );

  initServiceSpotlight();
}

/**
 * initServiceSpotlight
 * Same cursor-tracking glow as initSkillSpotlight — writes --mx/--my
 * so the .service-card::before radial-gradient follows the pointer.
 */
function initServiceSpotlight() {
  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });
}

/**
 * initCalEmbed
 * ----------------------------------------------------------------
 * Boots the Cal.com embed engine once (the loader script itself is
 * in index.html <head>) and themes it to match the site's current
 * dark/light mode. Safe to call even if PORTFOLIO_DATA.calEnabled
 * is false — it just does nothing.
 *
 * Cal.com's embed auto-attaches a click listener to any element with
 * a "data-cal-link" attribute, so once this has run, clicking a
 * rendered booking button opens the scheduling popup automatically.
 */
function initCalEmbed() {
  if (!PORTFOLIO_DATA.calEnabled || typeof Cal !== 'function') return;

  const isLight = document.documentElement.classList.contains('light');

  Cal('init', { origin: 'https://cal.com' });
  Cal('ui', {
    theme: isLight ? 'light' : 'dark',
    styles: { branding: { brandColor: '#2c965b' } }, /* ★ EDIT: match --color-accent */
    hideEventTypeDetails: false,
    layout: 'month_view',
  });
}

/**
 * syncCalTheme
 * Re-themes the Cal.com popup to match dark/light mode. Called by
 * toggleTheme() whenever the user flips the site theme.
 */
function syncCalTheme() {
  if (!PORTFOLIO_DATA.calEnabled || typeof Cal !== 'function') return;
  const isLight = document.documentElement.classList.contains('light');
  Cal('ui', { theme: isLight ? 'light' : 'dark' });
}

/**
 * renderCalButtons
 * Injects "Book a call" buttons into every slot on the page
 * (hero CTA row + contact page) using the shared .btn styles
 * already defined in style.css. Each button carries the
 * data-cal-link attribute Cal.com's embed listens for.
 */
function renderCalButtons() {
  if (!PORTFOLIO_DATA.calEnabled) return;

  const buttonHTML = (variant) => `
    <button
      type="button"
      class="btn ${variant}"
      data-cal-link="${PORTFOLIO_DATA.calLink}"
      data-cal-config='{"layout":"month_view"}'
    >
      <span class="btn-text-wrap">
        <span class="btn-text">${PORTFOLIO_DATA.calButtonLabel} →</span>
        <span class="btn-text btn-text-clone" aria-hidden="true">${PORTFOLIO_DATA.calButtonLabel} →</span>
      </span>
    </button>
  `;

  const heroSlot = document.getElementById('hero-cal-slot');
  if (heroSlot) heroSlot.innerHTML = buttonHTML('btn-ghost');

  const contactSlot = document.getElementById('contact-cal-slot');
  if (contactSlot) contactSlot.innerHTML = buttonHTML('btn-primary');

  /* Track booking-button clicks in GA4 (event delegation, since the
     buttons are injected dynamically) */
  document.addEventListener('click', e => {
    if (e.target.closest('[data-cal-link]')) {
      trackEvent('select_content', { content_type: 'book_a_call', item_id: PORTFOLIO_DATA.calLink });
    }
  });
}

/**
 * renderContact
 * Fills in social links from PORTFOLIO_DATA.socials.
 */
function renderContact() {
  const list = document.getElementById('social-list');
  if (!list) return;

  list.innerHTML = PORTFOLIO_DATA.socials
    .map(s => `
      <a href="${s.url}" target="_blank" rel="noopener" class="social-link">
        <i class="${s.icon}"></i>
        <span>${s.label}</span>
        <span class="social-handle">${s.handle}</span>
      </a>
    `)
    .join('');
}

/**
 * renderFooter
 * Sets name in the footer.
 */
function renderFooter() {
  const name = document.getElementById('footer-name');
  if (name) name.textContent = PORTFOLIO_DATA.name;
}


/* ================================================================
   10. EVENT LISTENERS
================================================================ */

/* ── Nav tab clicks ─────────────────────────────────────────── */
document.querySelectorAll('[data-page]').forEach(el => {
  /* Skip the mobile-only links — they share the same data-page attr
     and we handle them together below                              */
  el.addEventListener('click', e => {
    e.preventDefault();
    showPage(el.dataset.page);
  });
});

/* ── Theme toggle ───────────────────────────────────────────── */
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

/* ── Hero CTA links ─────────────────────────────────────────── */
document.querySelectorAll('.hero-cta-link').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    showPage(el.dataset.page);
  });
});

/* ── Close mobile menu when clicking outside ────────────────── */
document.addEventListener('click', e => {
  if (
    mobileMenu.classList.contains('open') &&
    !mobileMenu.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    closeMobileMenu();
  }
});

/* ── Track resume clicks (event delegation — links are rendered
   dynamically and there are 2 copies: desktop nav + mobile menu) ── */
document.addEventListener('click', e => {
  const resumeLink = e.target.closest('.resume-link');
  if (resumeLink) {
    trackEvent('file_download', { file_name: 'resume', link_url: resumeLink.href });
  }
});

/* ── Track social link clicks ────────────────────────────────── */
document.addEventListener('click', e => {
  const socialLink = e.target.closest('[data-track-social]');
  if (socialLink) {
    trackEvent('social_click', {
      social_network: socialLink.dataset.trackSocial,
      link_url:       socialLink.href,
    });
  }
});


/* ================================================================
   11. INIT — run everything on page load
================================================================ */

(function init() {
  initTheme();          /* Apply saved dark/light preference     */
  renderNav();          /* Logo initials                         */
  renderHeroGrid();     /* 4×4 background grid cells             */
  // renderHeroIcons();    /* hero icons behind heading             */
  renderHero();         /* Hero heading, bio, availability       */
  // popHeroIcons();       /* Animates the hero icons               */
  renderExperience();   /* Experience list                       */
  renderProjects();     /* Project cards                         */
  renderServices();   /* ← now async, fetches real .svg files */
  renderAbout();        /* About photo + bio                     */
  renderSkills();       /* Skill bars                            */
  renderContact();      /* Social links                          */
  renderFooter();       /* Footer name                           */
  renderCalButtons();   /* "Book a call" buttons (Cal.com) */
  initCalEmbed();       /* Boot + theme the Cal.com embed   */
  initScrollObserver(); /* Kick off scroll animations            */

  /* Deep link: if the page loaded on "#project/{id}", open it directly */
  const initialMatch = window.location.hash.match(/^#project\/(.+)$/);
  if (initialMatch) {
    openCaseStudy(decodeURIComponent(initialMatch[1]), false);
  }
})();