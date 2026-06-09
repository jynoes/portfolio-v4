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
  logoPrefix:  "your",    /* nav logo shows: [logoPrefix]name */
  logoSuffix:  "name",
  role:        "Full-Stack Developer & Designer",
  location:    "Manila, Philippines",
  available:   true,       /* true = green dot + "Available" shown */
  email:       "you@email.com",
  resume:      "resume.pdf",   /* path or URL to your resume PDF */

  /* ── Hero ─────────────────────────────────────────────────── */
  heroHeading: "I build for the web.",
  heroBio:     `Full-stack developer and designer based in Manila.
                I create thoughtful digital experiences that are
                fast, accessible, and a little beautiful.`,

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
      years:   "2025 — Now",
      company: "Company Name",
      role:    "Frontend Engineer",
      desc:    "Short description of what you do. Mention a tool or result you're proud of.",
    },
    {
      years:   "2024",
      company: "Another Company",
      role:    "Product Design Intern",
      desc:    "What you shipped and what you learned.",
    },
    {
      years:   "2023",
      company: "Freelance",
      role:    "Web Developer",
      desc:    "Designed and built websites for local businesses.",
    },
  ],

  /* ── Projects ─────────────────────────────────────────────── */
  /* Each object: { id, title, emoji, thumbGradient, tags, summary, detail, links } */
  /* thumbGradient: CSS gradient string for the card thumbnail */
  /* links: array of { label, url } for the modal buttons */
  projects: [
    {
      id:             "proj1",
      title:          "Project Alpha",
      emoji:          "🚀",
      thumbGradient:  "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)",
      tags:           ["React", "TypeScript", "Tailwind"],
      summary:        "A short punchy description for the card.",
      detail:         `This is the full description shown in the project modal.
                       Explain what the project does, why you built it,
                       what technologies you used, and what you learned or achieved.
                       You can write as much as you want here.`,
      links: [
        { label: "Live site →",  url: "#" },
        { label: "GitHub →",     url: "#" },
      ],
    },
    {
      id:             "proj2",
      title:          "Project Beta",
      emoji:          "🧪",
      thumbGradient:  "linear-gradient(135deg, #042f2e 0%, #0d9488 100%)",
      tags:           ["Node.js", "Postgres", "Docker"],
      summary:        "Another project. What problem did you solve?",
      detail:         `Full description for Project Beta. What was the challenge?
                       How did you approach it? What did you ship?`,
      links: [
        { label: "Case study →", url: "#" },
      ],
    },
    {
      id:             "proj3",
      title:          "Project Gamma",
      emoji:          "🎨",
      thumbGradient:  "linear-gradient(135deg, #1c1917 0%, #92400e 100%)",
      tags:           ["Figma", "UI/UX"],
      summary:        "A design or creative project.",
      detail:         `Full description for Project Gamma. This could be a design sprint,
                       a branding project, or a UI system you built.`,
      links: [
        { label: "Figma file →", url: "#" },
      ],
    },
    {
      id:             "proj4",
      title:          "Side Project",
      emoji:          "✦",
      thumbGradient:  "linear-gradient(135deg, #0c0a1e 0%, #4f46e5 100%)",
      tags:           ["Python", "API"],
      summary:        "An experiment or personal project.",
      detail:         `Full description for your side project. What did you explore?
                       What did you learn?`,
      links: [
        { label: "GitHub →", url: "#" },
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
    { icon: "💼", label: "LinkedIn",   url: "#", handle: "linkedin.com/in/yourname"},
    { icon: "🐦", label: "X / Twitter",url: "#", handle: "@yourhandle"             },
    { icon: "✉️", label: "Email",      url: "mailto:you@email.com", handle: "you@email.com" },
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
  btn.textContent    = isLight ? '🌙' : '☀️';
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
 * Sets the logo text from PORTFOLIO_DATA.
 */
function renderNav() {
  const logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.innerHTML = `<span>${PORTFOLIO_DATA.logoPrefix}</span>${PORTFOLIO_DATA.logoSuffix}`;
  }

  const resumeLinks = document.querySelectorAll('.resume-link');
  resumeLinks.forEach(l => l.setAttribute('href', PORTFOLIO_DATA.resume));
}

/**
 * renderHero
 * Fills in the hero heading, bio, and availability dot.
 */
function renderHero() {
  const heading = document.getElementById('hero-heading');
  if (heading) {
    heading.innerHTML = `Hi, I'm <span class="gradient-text">${PORTFOLIO_DATA.name}</span>.<br>${PORTFOLIO_DATA.heroHeading}`;
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
        <div class="project-thumb" style="background: ${p.thumbGradient}">
          ${p.emoji}
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
  renderNav();          /* Logo text                             */
  renderHero();         /* Hero heading, bio, availability       */
  renderExperience();   /* Experience list                       */
  renderProjects();     /* Project cards                         */
  renderAbout();        /* About photo + bio                     */
  renderSkills();       /* Skill bars                            */
  renderContact();      /* Social links                          */
  renderFooter();       /* Footer name                           */
  initScrollObserver(); /* Kick off scroll animations            */
})();
