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
    svg: `<svg width="704" height="360" viewBox="0 0 704 360" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M472.878 2.52769C478.717 -0.842533 488.183 -0.842597 494.022 2.52769L692.748 117.252C698.586 120.623 698.586 126.088 692.748 129.458L361.517 320.678C355.679 324.049 346.212 324.048 340.373 320.678L141.647 205.953C135.809 202.583 135.809 197.118 141.647 193.747L242.743 135.385L211.744 117.49C206.355 114.378 206.355 109.334 211.744 106.223L248.521 84.9916L248.776 84.848C254.182 81.8814 262.732 81.929 268.037 84.9916L299.036 102.887L314.623 93.888L283.625 75.9925C278.236 72.8813 278.236 67.8372 283.625 64.7259L320.402 43.4945L320.657 43.3509C326.063 40.3841 334.613 40.4319 339.918 43.4945L370.917 61.39L472.878 2.52769ZM170.755 220.879L342 319.74C346.941 322.591 354.95 322.591 359.89 319.74L433.271 277.375L253.081 173.353L253.895 172.884L434.084 276.907L691.121 128.519C696.061 125.667 696.061 121.043 691.121 118.191L519.876 19.3314L170.755 220.879ZM492.395 3.46617C487.455 0.61469 479.445 0.614697 474.505 3.46617L372.543 62.3285L376.695 64.7259L376.944 64.8724C382.001 67.944 382.001 72.7734 376.944 75.8451L376.695 75.9925L339.918 97.224L339.663 97.3675C334.343 100.287 325.977 100.287 320.657 97.3675L320.402 97.224L316.25 94.8265L300.661 103.826L304.814 106.223L305.062 106.369C310.119 109.441 310.119 114.271 305.062 117.342L304.814 117.49L268.037 138.721L267.783 138.865C262.462 141.784 254.097 141.784 248.776 138.865L248.521 138.721L244.369 136.324L143.274 194.686C138.334 197.538 138.334 202.162 143.274 205.014L169.942 220.41L519.063 18.8617L492.395 3.46617ZM266.411 85.93C261.92 83.3376 254.638 83.3377 250.147 85.93L213.37 107.161C208.879 109.754 208.879 113.958 213.37 116.551L250.147 137.782C254.638 140.374 261.92 140.374 266.411 137.782L303.187 116.551C307.677 113.958 307.677 109.754 303.187 107.161L266.411 85.93ZM247.576 98.6371C250.658 96.858 255.654 96.858 258.736 98.6371C260.501 99.6562 261.251 101.038 260.995 102.367C263.297 102.218 265.691 102.653 267.456 103.672C270.538 105.451 270.538 108.335 267.456 110.115C266.292 110.787 264.853 111.204 263.348 111.369L267.456 113.741C270.538 115.52 270.538 118.405 267.456 120.184C264.375 121.963 259.378 121.963 256.296 120.184C254.531 119.165 253.779 117.783 254.036 116.454C251.734 116.603 249.341 116.169 247.576 115.15C245.81 114.131 245.057 112.748 245.314 111.419C243.012 111.567 240.62 111.133 238.855 110.115C235.773 108.335 235.773 105.45 238.855 103.671L247.576 98.6371ZM258.736 115.149C257.001 116.15 257.001 117.774 258.736 118.776C260.47 119.777 263.282 119.777 265.017 118.776C266.751 117.774 266.752 116.15 265.017 115.149L261.876 113.336L258.736 115.149ZM250.015 110.115C248.281 111.116 248.28 112.74 250.015 113.742C251.75 114.743 254.562 114.742 256.296 113.741L259.437 111.927L253.156 108.301L250.015 110.115ZM241.294 105.08C239.56 106.082 239.56 107.705 241.294 108.706C243.029 109.708 245.841 109.708 247.576 108.706L250.716 106.893L244.435 103.267L241.294 105.08ZM265.017 105.08C263.282 104.079 260.471 104.079 258.737 105.08C257.002 106.082 257.002 107.705 258.737 108.706L258.902 108.797C260.645 109.707 263.337 109.676 265.017 108.705C266.751 107.704 266.751 106.082 265.017 105.08ZM256.296 100.045C254.562 99.044 251.75 99.0441 250.015 100.045L246.874 101.859L253.156 105.485L256.297 103.671L256.454 103.577C258.03 102.57 257.976 101.015 256.296 100.045ZM338.292 44.433C333.801 41.8404 326.52 41.8407 322.029 44.433L285.251 65.6644C280.761 68.2572 280.76 72.4614 285.251 75.0541L322.029 96.2845C326.52 98.8769 333.801 98.8771 338.292 96.2845L375.069 75.0541C379.559 72.4614 379.559 68.2571 375.069 65.6644L338.292 44.433ZM313.63 66.3646C314.582 66.3408 315.386 66.7666 315.428 67.3158L316.225 77.9037L334.565 78.3636C335.516 78.3876 336.254 78.8524 336.213 79.4017C336.172 79.9511 335.367 80.3767 334.415 80.3529L314.495 79.8529L312.916 79.8138L312.848 78.9017L311.982 67.4027C311.941 66.8533 312.679 66.3885 313.63 66.3646ZM344.957 60.3646L346.537 60.4046L346.606 61.3158L347.472 72.8158C347.513 73.3651 346.775 73.8299 345.824 73.8539C344.872 73.8776 344.066 73.4511 344.025 72.9017L343.228 62.3138L324.889 61.8548C323.937 61.831 323.2 61.3661 323.241 60.8168C323.282 60.2673 324.087 59.8408 325.038 59.8646L344.957 60.3646Z" fill="currentColor"/>
<circle cx="5.32494" cy="5.32494" r="5.32494" transform="matrix(0.813197 -0.469458 0.813197 0.469458 161.281 197.823)" fill="currentColor"/>
<circle opacity="0.75" cx="5.32494" cy="5.32494" r="5.32494" transform="matrix(0.813197 -0.469458 0.813197 0.469458 175.138 189.823)" fill="currentColor" fill-opacity="0.75"/>
<circle opacity="0.5" cx="5.32494" cy="5.32494" r="5.32494" transform="matrix(0.813197 -0.469458 0.813197 0.469458 188.995 181.824)" fill="currentColor" fill-opacity="0.5"/>
<path d="M147.48 224.658L143.274 227.086C138.333 229.938 138.333 234.562 143.274 237.414L342 352.139C346.94 354.991 354.95 354.991 359.89 352.139L691.122 160.919C696.062 158.067 696.062 153.443 691.122 150.591L687.24 148.35L688.867 147.411L692.748 149.652C698.586 153.022 698.586 158.487 692.748 161.858L361.517 353.078C355.678 356.448 346.212 356.448 340.374 353.078L141.647 238.353C135.809 234.982 135.809 229.518 141.647 226.147L145.854 223.719L147.48 224.658Z" fill="currentColor" fill-opacity="0.5"/>
<path d="M147.48 207.658L143.274 210.086C138.333 212.938 138.333 217.562 143.274 220.414L342 335.139C346.94 337.991 354.95 337.991 359.89 335.139L691.122 143.919C696.062 141.067 696.062 136.443 691.122 133.591L687.24 131.35L688.867 130.411L692.748 132.652C698.586 136.022 698.586 141.487 692.748 144.858L361.517 336.078C355.678 339.448 346.212 339.448 340.374 336.078L141.647 221.353C135.809 217.982 135.809 212.518 141.647 209.147L145.854 206.719L147.48 207.658Z" fill="currentColor" fill-opacity="0.75"/>
<rect width="220.452" height="8.5199" rx="4.25995" transform="matrix(0.813197 -0.469458 0.813197 0.469458 287.318 173.316)" fill="currentColor" fill-opacity="0.5"/>
<rect width="285.417" height="8.5199" rx="4.25995" transform="matrix(0.813197 -0.469458 0.813197 0.469458 307.237 184.815)" fill="currentColor" fill-opacity="0.5"/>
<rect width="173.593" height="8.5199" rx="4.25995" transform="matrix(0.813197 -0.469458 0.813197 0.469458 356.602 213.313)" fill="currentColor" fill-opacity="0.5"/>
<rect width="244.947" height="8.5199" rx="4.25995" transform="matrix(0.813197 -0.469458 0.813197 0.469458 376.521 224.812)" fill="currentColor" fill-opacity="0.5"/>
<rect width="270.507" height="8.5199" rx="4.25995" transform="matrix(0.813197 -0.469458 0.813197 0.469458 419.823 249.811)" fill="currentColor" fill-opacity="0.5"/>
<rect width="190.633" height="8.5199" rx="4.25995" transform="matrix(0.813197 -0.469458 0.813197 0.469458 399.904 238.312)" fill="currentColor" fill-opacity="0.5"/>
<rect width="69.2242" height="18.1048" rx="4" transform="matrix(0.813197 -0.469458 0.813197 0.469458 200.714 221.312)" fill="currentColor" fill-opacity="0.5"/>

<path d="M245.668 265.567C246.117 265.307 246.117 264.887 245.668 264.628C245.219 264.368 244.49 264.368 244.041 264.628L244.854 265.097L245.668 265.567ZM230.185 96.5775C230.634 96.8368 231.362 96.8368 231.811 96.5775C232.26 96.3183 232.26 95.8979 231.811 95.6386L230.998 96.1081L230.185 96.5775ZM302.499 54.8303C302.948 55.0895 303.677 55.0895 304.126 54.8303C304.575 54.571 304.575 54.1506 304.126 53.8913L303.312 54.3608L302.499 54.8303ZM244.854 265.097L244.041 264.628L201.837 288.992L202.65 289.462L203.463 289.931L245.668 265.567L244.854 265.097ZM183.133 289.462L183.947 288.992L6.00527 186.267L5.19207 186.736L4.37888 187.205L182.32 289.931L183.133 289.462ZM5.19208 175.469L6.00527 175.938L213.825 55.964L213.012 55.4946L212.199 55.0251L4.37888 175L5.19208 175.469ZM232.529 55.4946L231.716 55.9641L244.041 63.0797L244.855 62.6103L245.668 62.1408L233.342 55.0251L232.529 55.4946ZM244.855 62.6103L244.041 62.1408L217.859 77.256L218.672 77.7254L219.485 78.1949L245.668 63.0797L244.855 62.6103ZM218.672 88.9924L217.859 89.4619L230.185 96.5775L230.998 96.1081L231.811 95.6386L219.485 88.523L218.672 88.9924ZM244.855 62.6103L245.668 63.0797L272.283 47.7146L271.47 47.2451L270.657 46.7757L244.041 62.1408L244.855 62.6103ZM290.987 47.2451L290.174 47.7146L302.499 54.8303L303.312 54.3608L304.126 53.8913L291.8 46.7757L290.987 47.2451ZM218.672 77.7254L217.859 77.256C212.02 80.6265 212.02 86.0913 217.859 89.4619L218.672 88.9924L219.485 88.523C214.545 85.6709 214.545 81.0469 219.485 78.1949L218.672 77.7254ZM213.012 55.4946L213.825 55.964C218.765 53.112 226.775 53.112 231.716 55.9641L232.529 55.4946L233.342 55.0251C227.503 51.6546 218.037 51.6546 212.199 55.0251L213.012 55.4946ZM271.47 47.2451L272.283 47.7146C277.223 44.8626 285.233 44.8626 290.174 47.7146L290.987 47.2451L291.8 46.7757C285.961 43.4051 276.495 43.4051 270.657 46.7757L271.47 47.2451ZM5.19207 186.736L6.00527 186.267C1.06499 183.415 1.065 178.791 6.00527 175.938L5.19208 175.469L4.37888 175C-1.45963 178.37 -1.45964 183.835 4.37888 187.205L5.19207 186.736ZM202.65 289.462L201.837 288.992C196.897 291.844 188.887 291.844 183.947 288.992L183.133 289.462L182.32 289.931C188.159 293.302 197.625 293.302 203.463 289.931L202.65 289.462Z" fill="currentColor" fill-opacity="0.5" />

<path class="hover-line" d="M245.668 265.567C246.117 265.307 246.117 264.887 245.668 264.628C245.219 264.368 244.49 264.368 244.041 264.628L244.854 265.097L245.668 265.567ZM230.185 96.5775C230.634 96.8368 231.362 96.8368 231.811 96.5775C232.26 96.3183 232.26 95.8979 231.811 95.6386L230.998 96.1081L230.185 96.5775ZM302.499 54.8303C302.948 55.0895 303.677 55.0895 304.126 54.8303C304.575 54.571 304.575 54.1506 304.126 53.8913L303.312 54.3608L302.499 54.8303ZM244.854 265.097L244.041 264.628L201.837 288.992L202.65 289.462L203.463 289.931L245.668 265.567L244.854 265.097ZM183.133 289.462L183.947 288.992L6.00527 186.267L5.19207 186.736L4.37888 187.205L182.32 289.931L183.133 289.462ZM5.19208 175.469L6.00527 175.938L213.825 55.964L213.012 55.4946L212.199 55.0251L4.37888 175L5.19208 175.469ZM232.529 55.4946L231.716 55.9641L244.041 63.0797L244.855 62.6103L245.668 62.1408L233.342 55.0251L232.529 55.4946ZM244.855 62.6103L244.041 62.1408L217.859 77.256L218.672 77.7254L219.485 78.1949L245.668 63.0797L244.855 62.6103ZM218.672 88.9924L217.859 89.4619L230.185 96.5775L230.998 96.1081L231.811 95.6386L219.485 88.523L218.672 88.9924ZM244.855 62.6103L245.668 63.0797L272.283 47.7146L271.47 47.2451L270.657 46.7757L244.041 62.1408L244.855 62.6103ZM290.987 47.2451L290.174 47.7146L302.499 54.8303L303.312 54.3608L304.126 53.8913L291.8 46.7757L290.987 47.2451ZM218.672 77.7254L217.859 77.256C212.02 80.6265 212.02 86.0913 217.859 89.4619L218.672 88.9924L219.485 88.523C214.545 85.6709 214.545 81.0469 219.485 78.1949L218.672 77.7254ZM213.012 55.4946L213.825 55.964C218.765 53.112 226.775 53.112 231.716 55.9641L232.529 55.4946L233.342 55.0251C227.503 51.6546 218.037 51.6546 212.199 55.0251L213.012 55.4946ZM271.47 47.2451L272.283 47.7146C277.223 44.8626 285.233 44.8626 290.174 47.7146L290.987 47.2451L291.8 46.7757C285.961 43.4051 276.495 43.4051 270.657 46.7757L271.47 47.2451ZM5.19207 186.736L6.00527 186.267C1.06499 183.415 1.065 178.791 6.00527 175.938L5.19208 175.469L4.37888 175C-1.45963 178.37 -1.45964 183.835 4.37888 187.205L5.19207 186.736ZM202.65 289.462L201.837 288.992C196.897 291.844 188.887 291.844 183.947 288.992L183.133 289.462L182.32 289.931C188.159 293.302 197.625 293.302 203.463 289.931L202.65 289.462Z" fill="currentColor"/>
</svg>

`,
  },
  {
    title: "Visual Identity Systems",
    blurb: "Cohesive visual systems, logos, and guidelines that define your brand.",
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="60" y="20" width="80" height="160" rx="10"/>
      <line x1="85" y1="32" x2="115" y2="32"/>
      <rect x="72" y="50" width="56" height="34" rx="2"/>
      <line x1="72" y1="95" x2="128" y2="95"/>
      <line x1="72" y1="108" x2="118" y2="108"/>
      <line x1="72" y1="121" x2="128" y2="121"/>
      <circle cx="100" cy="160" r="6"/>
    </svg>`,
  },
  {
    title: "Pitch Decks & Collaterals",
    blurb: "Polished, persuasive presentations and high-impact marketing assets.",
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="30" y="30" width="60" height="60"/>
      <rect x="110" y="30" width="60" height="60"/>
      <rect x="30" y="110" width="60" height="60"/>
      <rect x="110" y="110" width="60" height="60"/>
      <circle cx="60" cy="60" r="14"/>
      <line x1="122" y1="72" x2="158" y2="48"/>
      <line x1="122" y1="48" x2="158" y2="72"/>
      <path d="M45 155 L60 125 L75 155 Z"/>
      <line x1="115" y1="140" x2="165" y2="140"/>
    </svg>`,
  },
  {
    title: "Hand-drawn Illustrations",
    blurb: "Custom hand-drawn illustrations capturing people, places, and everyday scenes.",
    svg: `<svg viewBox="0 0 200 200" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="30" y="30" width="60" height="60"/>
      <rect x="110" y="30" width="60" height="60"/>
      <rect x="30" y="110" width="60" height="60"/>
      <rect x="110" y="110" width="60" height="60"/>
      <circle cx="60" cy="60" r="14"/>
      <line x1="122" y1="72" x2="158" y2="48"/>
      <line x1="122" y1="48" x2="158" y2="72"/>
      <path d="M45 155 L60 125 L75 155 Z"/>
      <line x1="115" y1="140" x2="165" y2="140"/>
    </svg>`,
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

  /* Track which project was opened */
  trackEvent('select_content', {
    content_type: 'project',
    item_id:      project.id,
    item_name:    project.title,
  });

  /* ── Inject content into modal ──────────────────────────── */

  /* Thumbnail hero */
  const hero = modal.querySelector('.modal-hero');
  if (project.image) {
    hero.innerHTML = `<img src="${project.image}" alt="${project.imageAlt || project.title}" />`;
  } else {
    hero.innerHTML = '';
    hero.style.background = project.thumbGradient || 'var(--color-surface-alt)';
  }

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
function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = PORTFOLIO_DATA.services
    .map(s => `
      <div class="service-card fade-in">
        <div class="service-thumb">${s.svg}</div>
        <div class="service-body">
          <h3>${s.title}</h3>
          <p>${s.blurb}</p>
        </div>
      </div>
    `)
    .join('');

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
   renderServices();
  renderAbout();        /* About photo + bio                     */
  renderSkills();       /* Skill bars                            */
  renderContact();      /* Social links                          */
  renderFooter();       /* Footer name                           */
  initScrollObserver(); /* Kick off scroll animations            */
})();