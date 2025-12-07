const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .changelog-section {
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
    margin-bottom: 3rem;
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
    color: var(--section-description-color);
    margin: 0 auto;
    line-height: 1.6;
    max-width: 600px;
  }

  .changelog-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 2rem;
  }

  .changelog-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2.5rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .changelog-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(169, 182, 80, 0.2);
    border-color: rgba(169, 182, 80, 0.3);
  }

  .changelog-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
  }

  .changelog-header {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .version-badge {
    background: var(--gradient-primary);
    color: var(--text-primary);
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .changelog-title {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0;
  }

  .changelog-subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-top: 0.5rem;
  }

  .changelog-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .changelog-section-group {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .changelog-section-title {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--primary-green);
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .changelog-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .changelog-list-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 1.1rem;
  }

  .changelog-list-item::before {
    content: '•';
    color: var(--primary-green);
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 0.1rem;
    flex-shrink: 0;
  }

  .changelog-highlight {
    color: var(--primary-green);
    font-weight: 500;
  }

  .changelog-deprecated {
    color: #ff6b6b;
    font-weight: 500;
  }

  .changelog-new {
    color: var(--color-light-green);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .changelog-section {
      padding: 2rem 0;
    }

    .section-title h1 {
      font-size: 2.5rem;
    }

    .changelog-item {
      padding: 2rem;
    }

    .changelog-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .changelog-title {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 1920px) {
    .container {
      max-width: 85%;
      margin: 0 auto;
      padding: 0 1.2rem;
    }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <section class="changelog-section" id="changelog">
    <div class="container">
      <div class="section-title">
        <h1><span data-i18n="str-changelog-title">Changelog</span></h1>
        <p class="section-description" data-i18n="str-changelog-description">
          Discover the latest updates and improvements in our recent releases
        </p>
      </div>

      <div class="changelog-grid">
        <!-- Skycatcher 2.0 -->
        <div class="changelog-item">
          <div class="changelog-header">
            <div class="version-badge">v2.0</div>
            <div>
              <h2 class="changelog-title">Skycatcher 2.0</h2>
              <p class="changelog-subtitle" data-i18n="str-changelog-news-changes-2.0-r">Major release with new base and enhanced features</p>
            </div>
          </div>
          
          <div class="changelog-content">
            <div class="changelog-section-group">
              <h3 class="changelog-section-title" data-i18n="str-changelog-news-changes-2.0-main-news-title"> Core Changes</h3>
              <ul class="changelog-list">
                <li class="changelog-list-item"><span data-i18n="str-changelog-news-changes-2.0-main-news-1">Update to the new Debian release: </span> <span class="changelog-highlight">Trixie (13)</span></li>
                <li class="changelog-list-item"> <span data-i18n="str-changelog-news-changes-2.0-main-news-2-1">New </span><span class="changelog-new" data-i18n="str-changelog-news-changes-2.0-main-news-2-2">Fastfetch configuration</span> <span data-i18n="str-changelog-news-changes-2.0-main-news-2-3">to get a better style </span></li>
                <li class="changelog-list-item"><span class="changelog-highlight">Yelena Store</span><span data-i18n="str-changelog-news-changes-2.0-main-news-3">as replace for Bauh Store </span></li>
                <li class="changelog-list-item" > <span data-i18n="str-changelog-news-changes-2.0-main-news-4">Refreshed styles for new ISOs, new version new life.</span></li>
                <li class="changelog-list-item" > <span data-i18n="str-changelog-news-changes-2.0-main-news-5">New kernel 6.12.58 with a new Zram configuration to get better performance using ZSTD algorithm. </span></li>
                <li class="changelog-list-item" > <span data-i18n="str-changelog-news-changes-2.0-main-news-6">Sway with pywal preinstalled and a new design.</span></li>
                <li class="changelog-list-item" > <span data-i18n="str-changelog-news-changes-2.0-main-news-7">New default browser, Vivaldi.</span></li>
                <li class="changelog-list-item" > <span data-i18n="str-changelog-news-changes-2.0-main-news-8">CuerdTools updated and remaked.</span></li>
                <li class="changelog-list-item" > <span data-i18n="str-changelog-news-changes-2.0-main-news-9">New Nvidia drivers installer and a new automatized upgrade program to update from CuerdOS 1.2.1.</span></li>
                <li class="changelog-list-item" > <span data-i18n="str-changelog-news-changes-2.0-main-news-10">New wallpapers and refreshed style.</span></li>
                <li class="changelog-list-item" > <span data-i18n="str-changelog-news-changes-2.0-main-news-11">All published by CuerdOS Public License v1.0.</span></li>
              </ul>
            </div>

            <div class="changelog-section-group">
              <h3 class="changelog-section-title" data-i18n="str-changelog-news-changes-2.0-deprecated-news-title"> Deprecated</h3>
              <ul class="changelog-list">
                <li class="changelog-list-item" ><span data-i18n="str-changelog-news-changes-2.0-deprecated-news-2-1">Deprecated isos: </span><span class="changelog-deprecated" data-i18n="str-changelog-news-changes-2.0-deprecated-news-2-2">Budgie and X3</span></li>
              </ul>
            </div>

            <div class="changelog-section-group">
              <h3 class="changelog-section-title" data-i18n="str-changelog-news-changes-2.0-newsFeatures-title"> New Features</h3>
              <ul class="changelog-list">
                <li class="changelog-list-item"><span data-i18n="str-changelog-news-changes-2.0-newsFeatures-2-1">New environments added: </span><span class="changelog-new" data-i18n="str-changelog-news-changes-2.0-newsFeatures-2-2">IceWM and Awesome</span></li>
                <li class="changelog-list-item" ><span data-i18n="str-changelog-news-changes-2.0-newsFeatures-3-1">New browser by default on bigger isos,</span><span class="changelog-highlight" >Vivaldi</span><span data-i18n="str-changelog-news-changes-2.0-newsFeatures-3-1"> and </span><span class="changelog-highlight">Min</span> <span data-i18n="str-changelog-news-changes-2.0-newsFeatures-3-3">only for lighter isos</span></li>
                <li class="changelog-list-item"><span data-i18n="str-changelog-news-changes-2.0-newsFeatures-4-1">New </span><span class="changelog-new">CuerdTools</span> <span data-i18n="str-changelog-news-changes-2.0-newsFeatures-4-2">updated to complement and enhance the user experience</span></li>
              </ul>
            </div>

            <div class="changelog-section-group">
              <h3 class="changelog-section-title" data-i18n="str-changelog-news-changes-2.0-SystemChanges-title"> System Changes</h3>
              <ul class="changelog-list">
                <li class="changelog-list-item"><span class="changelog-highlight">Ananicy</span> <span data-i18n="str-changelog-news-changes-2.0-newsFeatures-2-1">service disabled by default, the user must intervene if they require the service </span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

class ChangelogComponent extends HTMLElement {
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

customElements.define("changelog-component", ChangelogComponent)
