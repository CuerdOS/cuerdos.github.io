const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .navbar {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(1.1rem);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    transition: all 0.3s ease;
  }

  .nav-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4.38rem;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    text-decoration: none;
    color: inherit;
  }

  .nav-logo {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 0.8rem;
  }

  .nav-title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .cuerd {
    color: var(--primary-green);
  }

  .os {
    color: var(--text-primary);
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-family: inherit;
    visibility: visible;
  }
  .nav-link.hide {
    display: none;
    opacity: 0; 
    visibility: hidden; 
    height: 0; 
    margin: 0;
    padding: 0; 
    overflow: hidden; 
  }
  
  .nav-link:hover {
    color: var(--primary-green);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-icon {
    display: flex;
    align-items: center;
    color: var(--text-primary);
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.3s ease;
    width: 2rem;
    height: 2rem;
  }

  .nav-icon:hover {
    background-color: rgba(169, 182, 80, 0.1);
    color: var(--primary-green);
  }

  .nav-toggle {
    display: none;
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: all 0.3s ease;
    width: 2rem;
    height:2rem;
  }

  .nav-toggle:hover {
    background-color: rgba(169, 182, 80, 0.1);
    color: var(--primary-green);
  }

  @media (max-width: 768px) {
    .nav-menu {
      position: fixed;
      top: 70px;
      left: 0;
      right: 0;
      background: rgba(26, 26, 26, 0.98);
      backdrop-filter: blur(20px);
      flex-direction: column;
      padding: 2rem;
      gap: 1.5rem;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
    }
    .nav-menu.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
    .nav-toggle {
      display: block;
    }
    .menu-toggle {
      display: block;
    }
  }

  .lang-selector {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    color: var(--text-primary);
    padding: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .lang-selector:hover {
    background: rgba(169, 182, 80, 0.1);
    border-color: rgba(169, 182, 80, 0.3);
  }

  .lang-selector option {
    background: #1a1a1a;
    color: var(--text-primary);
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <nav class="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-brand">
        <img src="Frontend/src/Images/cuerdos_logo.webp" alt="CuerdOS Logo" class="nav-logo">
        <span class="nav-title"><span class="cuerd">Cuerd</span><span class="os">OS</span></span>
      </a>
      <div class="nav-menu" id="navMenu">
        <a href="index.html" class="nav-link inicio hide" data-i18n="str-menu-start">Startpage</a>
        <a href="#about" class="nav-link about" data-i18n="str-menu-about">About</a>
        <a href="#download" class="nav-link download" data-i18n="str-menu-download">Download</a>
        <a href="https://cuerdoswiki.blogspot.com/" class="nav-link" data-i18n="str-menu-wiki">Wiki</a>
        <a href="changelogs.html" class="nav-link changelog" data-i18n="str-menu-changelog">Changelog</a>
      </div>
      <div class="nav-actions">
          <a href="https://github.com/CuerdOS" class="nav-icon">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
        </a>
        <button class="nav-toggle" id="navToggle">☰</button>
      </div>
    </div>
  </nav>
`

class NavbarComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
    this.initializeNavigation()
  }
  render() {
    this.shadow.innerHTML = template
  }

  initializeNavigation() {

    // Nav toggle for mobile devices
    const navToggle = this.shadow.querySelector(".nav-toggle")
    const navList = this.shadow.querySelector(".nav-menu")

    navToggle.addEventListener("click", () => {
      navList.classList.toggle("active")
    })

    // Hide sections on changelogs
    const currentUrl = window.location.href

    if (currentUrl.includes("changelogs")){
      this.shadow.querySelector(".about").classList.toggle("hide")
      this.shadow.querySelector(".download").classList.toggle("hide")
      this.shadow.querySelector(".changelog").classList.toggle("hide")
      this.shadow.querySelector(".inicio").classList.remove("hide")

    }

    // Sections scrols for anchor links
    this.shadow.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        navList.classList.toggle("active")
        e.preventDefault()
        const targetId = anchor.getAttribute("href").substring(1)
        this.scrollToSection(targetId)
      })
    })

    // Navbar scroll effect
    let lastScrollY = window.scrollY
    const navbar = this.shadow.querySelector(".navbar")

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        navbar.style.background = "rgba(26, 26, 26, 0.98)"
        navbar.style.backdropFilter = "blur(20px)"
      } else {
        navbar.style.background = "rgba(26, 26, 26, 0.95)"
        navbar.style.backdropFilter = "blur(10px)"
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = "translateY(-100%)"
      } else {
        navbar.style.transform = "translateY(0)"
      }

      lastScrollY = currentScrollY
    })
  }

  scrollToSection(sectionId) {
    let target = document.getElementById(sectionId)
    if (!target) {
      target = document.querySelector(`#${sectionId}`)
    }
    if (!target) {
      const allComponents = document.querySelectorAll("*")
      for (const component of allComponents) {
        if (component.shadowRoot) {
          const shadowTarget = component.shadowRoot.querySelector(`#${sectionId}`)
          if (shadowTarget) {
            target = shadowTarget
            break
          }
        }
      }
    }

    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    } else {
      const sectionMap = {
        about: 0.15,
        technical: 0.4,
        download: 0.6,
        spins: 0.8,
      }

      if (sectionMap[sectionId]) {
        const scrollPosition = document.documentElement.scrollHeight * sectionMap[sectionId]
        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        })
      }
    }
  }
}

customElements.define("navbar-component", NavbarComponent)