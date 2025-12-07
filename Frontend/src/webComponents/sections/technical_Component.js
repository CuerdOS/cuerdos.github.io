const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .technical-section {
    padding: var(--section-padding);
    background: var(--background-section);
  }
  .container {
    max-width: var(--container-width);
    margin: var(--container-margin);
    padding: var(--container-padding);
  }
  .section-title {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .section-title h1 {
    font-size: var(--section-title-font);
    margin-bottom: 0.7rem;
  }
  .section-title h1 span {
    background: var(--gradient-title);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .section-description {
    font-size: var(--section-description-font);
    color: var(--section-description-colot);
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }
  .technical-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
    margin: 0 auto;
  }

  .technical-features {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .technical-feature {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    min-height: 8rem;
  }

  .technical-feature:hover {
    background: rgba(169, 182, 80, 0.1);
    border-color: rgba(169, 182, 80, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(169, 182, 80, 0.15);
  }

  .technical-feature span {
    color: var(--text-primary);
    font-weight: 500;
    line-height: 1.5;
  }

  @media (max-width: 1368px) {
    .technical-section {
      padding: 4rem 0;
    }

    .technical-grid {
      grid-template-columns: 1fr;
      gap: 2.5rem;
      max-width: 800px;
    }

    .section-title h1 {
      font-size: var(--section-title-font);
    }

    .section-description {
      font-size: var(--section-description-font);
    }

    .technical-feature {
      padding: 1.2rem;
      min-height: auto;
    }
  }

  @media (max-width: 768px) {
    .technical-section {
      padding: 3rem 0;
    }

    .technical-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .section-title h1 {
      font-size: var(--mobile-section-title-font);
    }

    .section-description {
      font-size: var(--mobile-section-description-font);
      text-align: center;
      margin-bottom: 2rem;
    }

    .technical-feature {
      padding: 1rem;
      font-size: 0.9rem;
      min-height: auto;
    }

    .technical-feature:hover {
      transform: translateY(-2px);
    }

    .container {
      padding: 0 1rem;
    }
  }

  @media (min-width: 1920px) {
    .container {
      max-width: 1600px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .technical-grid {
      gap: 4rem;
    }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <section class="technical-section" id="technical">
    <div class="container">
      <div class="technical-content">
        <div class="section-title">
          <h1>
            <span data-i18n="str-title-otherfeatures">Technical Excellence</span>
          </h1>
          <p class="section-description" data-i18n="str-technical-desc">
            CuerdOS isn't just another Linux distribution. It's a carefully crafted system with performance
            optimizations and modern features.
          </p>
        </div>
        <div class="technical-grid">
          <div class="technical-features">
            <div class="technical-feature">
              <span data-i18n="str-content-otherfeatures-1">Bauh Store preconfigured for easy software installation</span>
            </div>
            <div class="technical-feature">
              <span data-i18n="str-content-otherfeatures-2">ZRam optimization for better memory management</span>
            </div>
            <div class="technical-feature">
              <span data-i18n="str-content-otherfeatures-3">Nala and Apt-fast for faster package management</span>
            </div>
            <div class="technical-feature">
              <span data-i18n="str-content-otherfeatures-4">Custom kernel with BORE scheduler and Ananicy daemon</span>
            </div>
          </div>
          <div class="technical-features">
            <div class="technical-feature">
              <span data-i18n="str-content-otherfeatures-5">TLP power management for optimal battery life</span>
            </div>
            <div class="technical-feature">
              <span data-i18n="str-content-otherfeatures-6">Pipewire audio server with low latency</span>
            </div>
            <div class="technical-feature">
              <span data-i18n="str-content-otherfeatures-7">Waydroid support for Android apps</span>
            </div>
            <div class="technical-feature">
              <span data-i18n="str-content-otherfeatures-8">Optimized boot speed and system responsiveness</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

class TechnicalComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
  }
  render() {
    this.shadow.innerHTML = template
  }
}

customElements.define("technical-component", TechnicalComponent)