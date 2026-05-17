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
          <select id="langSelect" class="lang-selector">
            <option value="en">EN</option>
            <option value="es">ES</option>
          </select>
          <a href="https://ko-fi.com/cuerdos" class="nav-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <path fill="currentColor"
                transform="translate(1.407 1.407) scale(2.81)"
                d="
                  M42.872 14.58c-8.846 0-16.334.085-22.376.851-7.998 1.022-14.805 7.147-14.805 18.464h-.002
                  c0 11.487.595 20.082 5.19 27.824 5.19 8.849 13.868 13.698 25.1 13.698h2.723
                  c13.783 0 21.27-7.318 25.015-13.103 1.617-2.554 2.807-5.105 3.573-7.66
                  9.785-.848 17.017-8.931 17.017-18.802v-1.36
                  c0-10.638-6.976-18.041-18.974-19.231-5.105-.51-8.678-.681-22.461-.681z

                  m-.001 6.382c13.785 0 16.678.171 21.527.595 8.595 1.02 13.529 5.191 13.529 13.103v1.276
                  c0 7.064-5.871 12.593-12.678 12.593h-3.064l-.51 2.127
                  c-.681 3.32-1.957 5.956-3.403 8.339-2.979 4.679-8.339 10.04-19.401 10.04h-2.636
                  c-8.424 0-15.827-2.893-19.91-10.466-3.573-6.552-4.254-13.613-4.254-24.589h-.001
                  c0-7.146 2.81-11.144 9.871-12.166 5.02-.766 11.657-.851 20.931-.851z

                  m21.444 7.488c-1.361 0-2.127.766-2.127 1.788v9.615
                  c.001 1.02.767 1.785 2.127 1.785 4.339 0 6.722-2.468 6.722-6.551
                  s-2.383-6.637-6.722-6.637z"/>
              
              <path fill="#ff4d6d"
                transform="translate(1.407 1.407) scale(2.81)"
                d="
                  M30.28 29.043c-5.956 0-9.871 4.849-9.871 10.295h.002
                  c0 5.02 2.807 9.359 6.381 12.764 2.383 2.298 6.127 4.681 8.678 6.212
                  .766.425 1.532.681 2.383.681 1.022 0 1.871-.256 2.554-.681
                  2.554-1.532 6.294-3.915 8.592-6.212 3.659-3.403 6.466-7.742 6.466-12.764
                  0-5.446-4.083-10.295-9.954-10.295-3.488 0-5.871 1.788-7.659 4.254
                  -1.617-2.468-4.083-4.254-7.573-4.254z"/>
              </svg>
          </a>
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
    this._onAppLanguageChanged = this._onAppLanguageChanged.bind(this)
  }

  async connectedCallback() {
    this.render()
    this.initializeNavigation()

    document.addEventListener("app-language-changed", this._onAppLanguageChanged)

    await customElements.whenDefined("app-i18n")
    this.translate()
  }

  disconnectedCallback() {
    document.removeEventListener("app-language-changed", this._onAppLanguageChanged)
  }

  render() {
    this.shadow.innerHTML = template
  }

  getI18n() {
    return document.querySelector("app-i18n")
  }

  t(key) {
    const i18n = this.getI18n()
    if (!i18n || typeof i18n.t !== "function") {
      return key
    }
    return i18n.t(key)
  }
  translate() {
    this.shadow.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n
      const value = this.t(key)

      if (value == null) return

      if (el.hasAttribute("data-i18n-attr")) {
        const attrName = el.getAttribute("data-i18n-attr")
        el.setAttribute(attrName, value)
      } else if (el.dataset.i18nHtml === "true") {
        el.innerHTML = value
      } else {
        el.textContent = value
      }
    })
  }

  _onAppLanguageChanged(event) {
    const lang = event?.detail?.lang
    this.syncLangSelect(lang)
    this.translate()
  }

  syncLangSelect(lang) {
    const langSelect = this.shadow.querySelector("#langSelect")
    if (!langSelect) return

    const normalized = String(lang || "").toLowerCase()

    const optionExists = Array.from(langSelect.options).some(
      (option) => option.value.toLowerCase() === normalized
    )

    if (optionExists) {
      langSelect.value = normalized
      return
    }

    const fallbackExists = Array.from(langSelect.options).some(
      (option) => option.value.toLowerCase() === "en"
    )

    if (fallbackExists) {
      langSelect.value = "en"
    } else if (langSelect.options.length > 0) {
      langSelect.value = langSelect.options[0].value
    }
  }

  initializeNavigation() {
    const langSelect = this.shadow.querySelector("#langSelect")
    if (langSelect) {
      langSelect.addEventListener("change", () => {
        const selectedLang = langSelect.value
        const currentLang = this.getI18n()?.lang

        if (selectedLang === currentLang) return

        this.dispatchEvent(new CustomEvent("app-language-changed", {
          detail: { lang: selectedLang },
          bubbles: true,
          composed: true,
        }))
      })
    }

    const navToggle = this.shadow.querySelector(".nav-toggle")
    const navList = this.shadow.querySelector(".nav-menu")

    navToggle?.addEventListener("click", () => {
      navList?.classList.toggle("active")
    })

    const currentUrl = window.location.href

    if (currentUrl.includes("changelogs")) {
      this.shadow.querySelector(".about")?.classList.toggle("hide")
      this.shadow.querySelector(".download")?.classList.toggle("hide")
      this.shadow.querySelector(".changelog")?.classList.toggle("hide")
      this.shadow.querySelector(".inicio")?.classList.remove("hide")
    }

    this.shadow.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        navList?.classList.toggle("active")
        e.preventDefault()
        const targetId = anchor.getAttribute("href").substring(1)
        this.scrollToSection(targetId)
      })
    })

    let lastScrollY = window.scrollY
    const navbar = this.shadow.querySelector(".navbar")

    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY

      if (!navbar) return

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