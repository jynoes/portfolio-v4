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
   7.  Project Modal   (openProject, closeModal)
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
  resume:      "/documents/Sabido - CV.pdf",   /* path or URL to your resume PDF */

  /* ── Hero ─────────────────────────────────────────────────── */
  heroHeading: " crafting products from idea to launch.",
  heroBio:     `UI/UX designer and WordPress developer with a passion for turning ideas into meaningful digital experiences. I blend user-centered design, modern web development, and attention to detail to create websites that not only look great but also deliver real business value.`,

  /* ── About ────────────────────────────────────────────────── */
  /* photo: path to your image file, or leave empty string "" for emoji */
  photo:       "",
  photoEmoji:  "🧑‍💻",
  aboutHeading: "A little about me.",
  aboutParagraphs: [
    `I'm a developer and designer based in <strong>Manila, Philippines</strong>.
     I got into tech because I love turning ideas into things people can actually use.`,
    `When I'm not building, I'm usually reading, learning something new,
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
      image:          "/images/Duck Donuts Preview.png",
      imageAlt:       "Duck Donuts Website Preview",
      tags:           ["WordPress", "Elementor", "Figma", "Hostinger"],
      summary:        "Designed, developed, and shipped under 3 weeks! #EASY",
      detail:         ``,
      links: [
        { label: "Live Site →",  url: "https://duckdonutsph.com/" },
      ],
    },
    {
      id:             "proj2",
      title:          "Pivo Praha Philippines",
      image:          "/images/Pivo Praha Philippines Preview.png",
      imageAlt:       "Pivo Praha Philippines Website Preview",
      tags:           ["Figma", "WordPress", "Elementor", "Hostinger"],
      summary:        "A website for a must-try beer brewery in Poblacion, Makati.",
      detail:         ``,
      links: [
        { label: "Live Site →", url: "https://pivoprahaph.com/" },
      ],
    },
    {
      id:             "proj3",
      title:          "Animated Portfolio",
      image:          "/images/Animated Portfolio Preview.png",
      imageAlt:       "Animated Portfolio Preview",
      tags:           ["HTML", "CSS", "JavaScript", "Github", "Microsoft Paint"],
      summary:        "Animating and coding in one project? Gotta do that!",
      detail:         `A fun project using basic HTML, CSS and JavaScript. YouTube made me do it. `,
      links: [
        { label: "Live Site →", url: "https://funny-stardust-8d9344.netlify.app/" },
      ],
    },
    {
      id:             "proj4",
      title:          "Maxicare Mobile Application Case Study",
      image:          "/images/Maxicare App Case Study .png",
      imageAlt:       "Animated Portfolio Preview",
      tags:           ["Figma", "Design Thinking", "User Research", "UI/UX"],
      summary:        "A case study for a job application. Click to know what happened.",
      detail:         ``,
      links: [
        { label: "GitHub →", url: "#" },
      ],
    },
    {
      id:             "proj5",
      title:          "SG Bank Dumaguete",
      image:          "/images/SG Bank Website Preview.png",
      imageAlt:       "Animated Portfolio Preview",
      tags:           ["Figma", "WordPress", "Elementor", "Hostinger"],
      summary:        "A website for a rural bank in Dumaguete, Philippines.",
      detail:         ``,
      links: [
        { label: "Live Site →", url: "https://sgbankph.com/" },
      ],
    },
  ],

  /* ── Skills ───────────────────────────────────────────────── */
  /* level: 0–100. Controls the width of the progress bar. */
  skills: [
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "React / Next.js",         level: 85 },
    { name: "Node.js / Express",        level: 80 },
    { name: "UI/UX Design",             level: 75 },
    { name: "Python",                   level: 70 },
    { name: "Databases (SQL/NoSQL)",    level: 65 },
  ],

  /* ── Social Links ─────────────────────────────────────────── */
  /* icon: any emoji. url: full URL. handle: text shown on the right */
  socials: [
    { icon: "🐙", label: "GitHub",     url: "#", handle: "github.com/yourname"    },
    { icon: "💼", label: "LinkedIn",   url: "#", handle: "linkedin.com/in/jynoe-sabido-aab142248"},
    { icon: "🐦", label: "X / Twitter",url: "#", handle: "@yourhandle"             },
    { icon: "✉️", label: "Email",      url: "mailto:jynoe.sabido22@gmail.com", handle: "jynoe.sabido22@gmail.com" },
  ],

  /* ── Contact Form ─────────────────────────────────────────── */
  /* formAction: your Formspree endpoint (see README / launch guide)
     Leave as "#" until you've set up Formspree.               */
  formAction: "#",
};


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
   5. SKILL BAR ANIMATION
   ----------------------------------------------------------------
   Reads data-level (0–100) from each .skill-card and animates
   the inner .skill-bar-fill width.
================================================================ */

let skillsAnimated = false;

/**
 * animateSkillBars
 * Staggered animation: each bar starts 80ms after the last.
 * Only runs once (skillsAnimated flag prevents re-runs).
 */
function animateSkillBars() {
  if (skillsAnimated) return;
  skillsAnimated = true;

  document.querySelectorAll('.skill-card').forEach((card, index) => {
    const level = parseInt(card.dataset.level, 10) || 0;
    const fill  = card.querySelector('.skill-bar-fill');
    if (!fill) return;

    setTimeout(() => {
      fill.style.width = level + '%';
    }, index * 85);   /* 85ms stagger between each bar */
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
   7. PROJECT MODAL
   ----------------------------------------------------------------
   openProject(id) finds the project in PORTFOLIO_DATA, injects
   its content into the modal panel, then shows the modal.
================================================================ */

const modal = document.getElementById('project-modal');

/**
 * openProject
 * Populates and opens the project detail modal.
 * @param {string} projectId - must match a PORTFOLIO_DATA.projects[].id
 */
function openProject(projectId) {
  const project = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project || !modal) return;

  /* ── Inject content into modal ──────────────────────────── */

  /* Thumbnail hero */
  const hero = modal.querySelector('.modal-hero');
  hero.style.background = project.thumbGradient;
  hero.textContent       = project.emoji;

  /* Title */
  modal.querySelector('.modal-title').textContent = project.title;

  /* Tags / chips */
  const tagsEl = modal.querySelector('.modal-tags');
  tagsEl.innerHTML = project.tags
    .map(t => `<span class="chip">${t}</span>`)
    .join('');

  /* Detail description (supports basic HTML via innerHTML) */
  modal.querySelector('.modal-detail').innerHTML =
    project.detail.replace(/\n/g, '<br>');

  /* Links / CTA buttons */
  const linksEl = modal.querySelector('.modal-links');
  linksEl.innerHTML = project.links
    .map(l => `<a href="${l.url}" class="btn btn-primary" target="_blank" rel="noopener">${l.label}</a>`)
    .join('');

  /* ── Show the modal ─────────────────────────────────────── */
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';   /* prevent page scroll behind modal */
}

/**
 * closeModal
 * Hides the project modal and restores body scroll.
 */
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* Close on overlay click */
modal.querySelector('.modal-overlay').addEventListener('click', closeModal);

/* Close on × button */
modal.querySelector('.modal-close').addEventListener('click', closeModal);

/* Close on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    closeModal();
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
    return;
  }

  /* Disable button while submitting */
  submitBtn.disabled  = true;
  submitBtn.textContent = 'Sending…';

  try {
    const res = await fetch(endpoint, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body:    JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('success', '✓ Message sent! I\'ll get back to you soon.');
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
  submitBtn.textContent = 'Send message →';
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
      <div class="project-card fade-in" onclick="openProject('${p.id}')" role="button" tabindex="0"
           aria-label="Open project: ${p.title}">

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
 * renderSkills
 * Builds the skill cards from PORTFOLIO_DATA.skills.
 */
function renderSkills() {
  const grid = document.getElementById('skills-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.skills
    .map(s => `
      <div class="skill-card" data-level="${s.level}">
        <div class="skill-name">${s.name}</div>
        <div class="skill-bar-bg">
          <div class="skill-bar-fill"></div>
        </div>
      </div>
    `)
    .join('');
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
        <span>${s.icon}</span>
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


/* ================================================================
   11. INIT — run everything on page load
================================================================ */

(function init() {
  initTheme();          /* Apply saved dark/light preference     */
  renderNav();          /* Logo initials                         */
  renderHeroGrid();     /* 4×4 background grid cells             */
  renderHero();         /* Hero heading, bio, availability       */
  renderExperience();   /* Experience list                       */
  renderProjects();     /* Project cards                         */
  renderAbout();        /* About photo + bio                     */
  renderSkills();       /* Skill bars                            */
  renderContact();      /* Social links                          */
  renderFooter();       /* Footer name                           */
  initScrollObserver(); /* Kick off scroll animations            */
})();