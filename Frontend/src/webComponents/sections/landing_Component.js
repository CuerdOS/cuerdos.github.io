const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .landing {
    min-height: 100vh;
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, var(--background-dark) 0%, var(--background-card) 100%);
    position: relative;
    overflow: hidden;
  }

  .landing::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(169, 182, 80, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .container {
    max-width: 2560px;
    margin: 0 auto;
    padding: 0 0.2rem;
  }

  .landing-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2em;
    align-items: center;
  }

  .landing-text {
    display:flex;
    flex-direction:column;
    z-index: 2;
    text-align: center
  }

  .landing-title {
    font-size: var(--landing-title);
    font-weight: 900;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .gradient-text {
    background: var(--gradient-title);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cuerd {
    color: var(--primary-green);
  }

  .os {
    color: var(--text-primary);
  }

  .landing-subtitle {
    font-size: var(--landing-subtitle);
    color: var(--primary-green);
    margin-bottom: 1.5rem;
    font-weight: 500;
  }

  .landing-description {
    font-size: var(--landing-description);
    color: var(--section-description-color);
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  .landing-buttons {
    display: flex;
    gap: 1rem;
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 600;
    font-size: var(--button-font);
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .btn-primary {
    background: linear-gradient(135deg, var(--primary-green) 0%, #8fa142 100%);
    color: var(--text-primary);
    box-shadow: 0 0.25rem 1rem rgba(169, 182, 80, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 0.5rem 1.5rem rgba(169, 182, 80, 0.4);
  }

  .btn-secondary {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid rgba(255, 255, 255, 0.2);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
  }

  .landing-image {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
  }

  .landing-image-container {
    display:flex;
    max-width: 100%;
    align-items: center;
    padding:4rem;
    justify-items: center;
  }

  .computer-svg {
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
  }

@media (max-width: 768px) {
  .landing {
    min-height: auto;
    padding: 4rem 0 2rem;
  }

  .landing-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .landing-title {
    font-size: var(--mobile-landing-title);
    line-height: 1.2;
  }

  .landing-subtitle {
    font-size: var(--mobile-landing-subtitle);
  }

  .landing-description {
    font-size: var(--mobile-landing-description);
    padding: 0 1rem;
  }

  .landing-buttons {
    flex-direction: column;
    gap: 0.8rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
    padding: 0.9rem 1.2rem;
    font-size: var(--button-font);
  }

  .landing-image {
    width: 100%;
    max-width: 100%;
  }

  .landing-image-container {
    max-width: 100%;
    padding: 0 1rem;
  }

  .computer-svg {
    width: 100%;
    height: auto;
  }

  .container {
    max-width: 100%;
    padding: 0 1rem;
  }
}
@media (max-width: 2560px) {
    .container {
    max-width: 90%;
    margin: 0 auto;
    padding: 0 0.2rem;
    width: 100%;
  }

}
`

const template = /* html */ `
  <style>${styles}</style>
  <section class="landing">
    <div class="container">
      <div class="landing-content">
        <div class="landing-text">
          <h1 class="landing-title">
            <span class="gradient-text"><span class="cuerd">Cuerd</span><span class="os">OS</span></span>
          </h1>
          <p class="landing-subtitle" data-i18n="str-slogan">Optimized to the last pixel</p>
          <p class="landing-description" data-i18n="str-content-about-1">
            A GNU/Linux distribution focused on stability, efficiency and performance on computers of any range,
            without losing any functionality.
          </p>
          <div class="landing-buttons">
            <button class="btn btn-primary" onclick="scrollToSection('download')">
              <i data-lucide="download"></i>
              <span data-i18n="str-download-now">Download Now</span>
            </button>
            <button class="btn btn-secondary" onclick="scrollToSection('about')">
              <span data-i18n="str-learn-more">Learn More</span>
            </button>
          </div>
        </div>

        <div class="landing-image-container">
          <div class="landing-image">
            <svg id="scalable-svg" viewBox="0 0 800 600" class="computer-svg" style="width: 100%; height: auto;">
              <rect x="50" y="400" width="700" height="150" rx="20" fill="#2a2a2a" stroke="#444" stroke-width="2"/>
              <rect x="100" y="80" width="600" height="380" rx="15" fill="#1a1a1a" stroke="#444" stroke-width="3"/>
              <rect x="120" y="100" width="560" height="340" rx="10" fill="#000"/>
              <foreignObject x="125" y="105" width="550" height="330">
                <img src="Frontend/src/Images/pc-image.webp" alt="CuerdOS Desktop" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;"/>
              </foreignObject>
              <rect x="125" y="105" width="550" height="330" rx="8" fill="url(#screenGradient)" opacity="0.1"/>
              <rect x="150" y="480" width="500" height="60" rx="8" fill="#333" stroke="#555" stroke-width="1"/>
              <g fill="#444" stroke="#666" stroke-width="0.5">
                <rect x="160" y="490" width="30" height="8" rx="2"/>
                <rect x="195" y="490" width="30" height="8" rx="2"/>
                <rect x="230" y="490" width="30" height="8" rx="2"/>
                <rect x="265" y="490" width="30" height="8" rx="2"/>
                <rect x="300" y="490" width="30" height="8" rx="2"/>
                <rect x="335" y="490" width="30" height="8" rx="2"/>
                <rect x="370" y="490" width="30" height="8" rx="2"/>
                <rect x="405" y="490" width="30" height="8" rx="2"/>
                <rect x="440" y="490" width="30" height="8" rx="2"/>
                <rect x="475" y="490" width="30" height="8" rx="2"/>
                <rect x="510" y="490" width="30" height="8" rx="2"/>
                <rect x="545" y="490" width="30" height="8" rx="2"/>
                <rect x="580" y="490" width="60" height="8" rx="2"/>
              </g>
              
              <!-- Trackpad -->
              <rect x="350" y="555" width="100" height="60" rx="8" fill="#222" stroke="#444" stroke-width="1"/>
              
              <!-- Power Button -->
              <circle cx="400" cy="470" r="4" fill="#a9b650" opacity="0.8"/>
              
              <!-- Gradients -->
              <defs>
                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:white;stop-opacity:0.3"/>
                  <stop offset="100%" style="stop-color:white;stop-opacity:0"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
`

class LandingComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
    this.initializeButtons()
  }

  render() {
    this.shadow.innerHTML = template
  }

  initializeButtons() {
    // Make scrollToSection globally available
    if (!window.scrollToSection) {
      window.scrollToSection = (sectionId) => {
        // First try to find the element by ID
        let target = document.getElementById(sectionId)

        // If not found, try to find it by querySelector
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
          // Fallback: scroll to approximate positions
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
  }

}

customElements.define("landing-component", LandingComponent)
