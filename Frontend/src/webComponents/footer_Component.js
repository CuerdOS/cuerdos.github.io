const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .footer {
    background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 3rem 0 1rem;
    font-size: 1rem;
  }

  .container {
    max-width: auto;
    margin: 0 auto;
    padding: 0 0.2rem;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;
    margin-bottom: 2rem;
    justify-content: center;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;
    justify-content: center;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    justify-content: center;
  }

  .footer-logo img {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 0.5rem;
  }

  .footer-title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .cuerd {
    color: var(--primary-green);
  }

  .os {
    color: var(--text-primary);
  }

  .footer-description {
    display: flex;
    color: #cccccc;
    line-height: 1.6;
    justify-content: center;
    max-width: auto;
  }

  .footer-heading {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;

  }

  .footer-list {
    list-style: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  .footer-list a {
    color: #cccccc;
    text-decoration: none;
    transition: color 0.3s ease;
    width:fit-content;
  }

  .footer-list a:hover {
    color: var(--primary-green);
  }

  .social-links {
    display: flex;
    gap: 1rem;
  }

  .social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #cccccc;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .social-link:hover {
    background: rgba(169, 182, 80, 0.1);
    border-color: rgba(169, 182, 80, 0.3);
    color: var(--primary-green);
    transform: translateY(-2px);
  }

  .footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.2rem;
    text-align: center;
  }

  .footer-bottom p {
    color: #cccccc;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .footer-license {
    font-size: 1rem;
  }

  .footer-license a {
    color: var(--primary-green);
    text-decoration: none;
  }

  .footer-license a:hover {
    text-decoration: underline;
  }
  .grid-box{
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .footer {
      padding: 2rem 0 1rem;
    }

    .footer-grid {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .footer-description {
      max-width: 30rem;
    }

    .social-links {
      justify-content: center;
    }

    .footer-logo {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    justify-content: center;
  }
  .footer-list {
    display: grid;

  }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">


        <div class="grid-box grid-box-links">
          <div class="footer-links">
            <h4 class="footer-heading" data-i18n="str-footer-resources">Resources</h4>
            <ul class="footer-list">
              <li><a href="https://cuerdoswiki.blogspot.com/" data-i18n="str-footer-wiki">Wiki</a></li>
              <li><a href="changelogs.html" data-i18n="str-changelog-nav">Changelog</a></li>
              <li><a href="https://github.com/CuerdOS" data-i18n="str-footer-source">Source Code</a></li>
            </ul>
          </div>
        </div>
        
        <div class="grid-box grid-box-brand">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="Frontend/src/Images/cuerdos_logo.webp" alt="CuerdOS Logo">
              <span class="footer-title"><span class="cuerd">Cuerd</span><span class="os">OS</span></span>
            </div>
            <p class="footer-description" data-i18n="str-footer-description">
              Optimized to the last pixel.
            </p>
          </div>
        </div>
        
        <div class="grid-box grid-box-brand">
          <div class="footer-social">
            <h4 class="footer-heading" data-i18n="str-footer-community">Community</h4>
            <div class="social-links">
              <a href="mailto:cuerdoslinux@proton.me" class="social-link">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round">
                    <path d="M22 4H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/><path d="M22 6l-10 7L2 6"/>
                </svg>
              </a>
              <a href="https://t.me/+GibSWjFc89Q2ODU8" class="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.120445"
                  height="18.633747"
                  viewBox="0 0 21.120445 18.633747"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <defs id="defs2"/>
                  <path
                    style="fill:none;stroke;stroke-width:1.99937;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"
                    d="M 15.249334,6.1428859 6.846787,11.148353 0.99950402,9.1992593 20.120791,0.9996207 17.26436,17.634132 9.9442193,12.60828 Z"/>
                </svg>
              </a>
              <a href="https://github.com/CuerdOS" class="social-link">
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
              <a href="https://matrix.to/#/%23cuerdos:matrix.org" class="social-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 54 54"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M19.4414 3.24C19.4414 1.4506 20.892 0 22.6814 0C34.6108 0 44.2814 9.67065 44.2814 21.6C44.2814 23.3894 42.8308 24.84 41.0414 24.84C39.252 24.84 37.8014 23.3894 37.8014 21.6C37.8014 13.2494 31.032 6.48 22.6814 6.48C20.892 6.48 19.4414 5.0294 19.4414 3.24Z"/>
                  <path d="M34.5586 50.76C34.5586 52.5494 33.108 54 31.3186 54C19.3893 54 9.71861 44.3294 9.71861 32.4C9.71861 30.6106 11.1692 29.16 12.9586 29.16C14.748 29.16 16.1986 30.6106 16.1986 32.4C16.1986 40.7505 22.9681 47.52 31.3186 47.52C33.108 47.52 34.5586 48.9706 34.5586 50.76Z"/>
                  <path d="M3.24 34.5601C1.4506 34.5601 -6.34076e-08 33.1095 -1.41625e-07 31.3201C-6.63074e-07 19.3907 9.67065 9.72007 21.6 9.72007C23.3894 9.72007 24.84 11.1707 24.84 12.9601C24.84 14.7495 23.3894 16.2001 21.6 16.2001C13.2495 16.2001 6.48 22.9695 6.48 31.3201C6.48 33.1095 5.0294 34.5601 3.24 34.5601Z"/>
                  <path d="M50.76 19.4399C52.5494 19.4399 54 20.8905 54 22.6799C54 34.6093 44.3294 44.2799 32.4 44.2799C30.6106 44.2799 29.16 42.8293 29.16 41.0399C29.16 39.2505 30.6106 37.7999 32.4 37.7999C40.7505 37.7999 47.52 31.0305 47.52 22.6799C47.52 20.8905 48.9706 19.4399 50.76 19.4399Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <p data-i18n="str-credits">© <span class="current-year">year</span> CuerdOS Dev Team. Licensed under GNU GPL v3.</p>
        <p class="footer-license" data-i18n="str-subtitle-logolicense">
          The <a href="https://github.com/CuerdOS/logo">CuerdOS logo</a> is published under
          <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA-4.0</a>
        </p>
      </div>
    </div>
  </footer>
`

class FooterComponent extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: "open" })
  }

  connectedCallback() {
    this.render()
    this.setYear()
  }

  render() {
    this.shadow.innerHTML = template
  }

  setYear() {
    const yearElement = this.shadow.querySelector(".current-year")
    yearElement.textContent = new Date().getFullYear()
  }
}

customElements.define("footer-component", FooterComponent)
