const styles = /* css */ `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .download-section {
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
    margin-bottom: 2rem;
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
  }

  .requirements-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    margin-bottom: 3rem;
    backdrop-filter: blur(10px);
  }

  .requirements-title {
    font-size: var(--section-description-font);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .requirements-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .requirements-subtitle {
    font-size: var(--section-description-font);
    font-weight: 600;
    color: var(--primary-green);
    margin-bottom: 1rem;
  }
  .requirements-column {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .requirements-list {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .requirement-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--section-description-color);
  }


  .spins-image-container {
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .spins-image-container:hover {
    transform: scale(1.05);
  }

  .spins-image {
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  .spins-content {
    padding: 4rem 0;
    background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
  }
  .spins-section {
    text-align: center;
    margin-top: 3rem;
  }

  .spins-title {
    font-size: var(--section-description-font);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .spins-description {
    color: var(--section-description-color);
    margin-bottom: 2rem;
    font-size:1.4rem;
  }
  .spins-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .spin-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
  }

  .spin-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(169, 182, 80, 0.2);
    border-color: rgba(169, 182, 80, 0.3);
  }

  .spin-item.reverse {
    direction: rtl;
  }

  .spin-item.reverse > * {
    direction: ltr;
  }

  .spin-content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .spin-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .spin-icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(169, 182, 80, 0.1);
    border: 2px solid rgba(169, 182, 80, 0.2);
    border-radius: 50%;
  }

  .spin-icon img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .spin-name {
    font-size: var(--section-description-font);
    font-weight: 700;
    color: var(--text-primary);
  }

  .spin-description {
    color: var(--section-description-color);
    line-height: 1.6;
    font-size: var(--section-subtitle-font);
  }

  .spin-downloads {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .download-dropdown {
    display: flex;
    flex-direction: column;
    position: relative;
    min-width: 100%;
  }

  .dropdown-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .dropdown-content {
    display:flex;
    position: absolute;
    top: 100%;
    left: 0;
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(1.1rem);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    padding: 0.5rem 0;
    min-width: fit-content;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
    z-index: 1000; 
    flex-direction: row;
  }

  .dropdown-item {
    display: block;
    padding: 0.75rem 1rem;
    color: var(--text-primary);
    text-decoration: none;
    transition: background-color 0.3s ease;
    text-align: center;
  }

  .dropdown-item:hover {
    background-color: rgba(169, 182, 80, 0.1);
    color: var(--primary-green);
  }
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
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
    box-shadow: 0 4px 15px rgba(169, 182, 80, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(169, 182, 80, 0.4);
  }

  .btn-outline {
    background: transparent;
    color: var(--primary-green);
    border: 1px solid rgba(169, 182, 80, 0.5);
  }

  .btn-outline:hover {
    background: rgba(169, 182, 80, 0.1);
    border-color: var(--primary-green);
  }

  .spin-secondary {
    display: flex;
    gap: 0.5rem;
  }

  .spin-checksum {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-green);
    text-decoration: none;
    font-size: var(--button-font);
    transition: color 0.3s ease;
  }

  .spin-checksum:hover {
    color: var(--text-primary);
  }

  .spin-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spin-image-container {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border: 2px solid rgba(169, 182, 80, 0.2);
    max-width: 100%;
  }

  .spin-image-container img {
    width: 100%;
    height: auto;
    display: block;
  }

  .spin-image-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(169, 182, 80, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  .credits-section {
    text-align: center;
    margin-top: 2.2rem;
  }

  .credits-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    max-width: 55rem;
    margin: 0 auto;
  }

  .credits-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  .credits-description {
    color: var(--section-description-color);
    line-height: 1.6;
    font-size: 1.2rem;
  }

  .element {
    color: var(--primary-green);
    text-decoration: none;
    font-weight: 500;
  }

  .element:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .download-section {
      padding: 2rem 0;
    }

    .section-title {
      font-size: 2rem;
    }

    .requirements-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    .requirements-column {
      align-items:center;
    }
    .requirements-title {
      font-size: 2.2rem;
    }
    .requirements-subtitle {
      font-size: 1.6rem; 
    }
    .requirements-list {
      margin:0 5rem;
      width: auto;
      align-items:flex-start;
    }

    .spin-item {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 1.5rem;
    }

    .spin-item.reverse {
      direction: ltr;
    }

    .spin-name {
      font-size: 1.5rem;
    }

    .spin-secondary {
      flex-direction: column;
    }

    .credits-card {
      padding: 1.5rem;
    }
  }

  @media (max-width: 1920px){
    .container {
    max-width: 85%;
    margin: 0 auto;
    padding: 0 1.2rem;
  }
  }
`

const template = /* html */ `
  <style>${styles}</style>
  <section class="download-section" id="download">
    <div class="container">
      <div class="section-title">
        <h1>
          <span data-i18n="str-title-download">Download CuerdOS Skycatcher 2.0</span>
        </h1>
        <p class="section-description" data-i18n="str-content-download-1">
          Choose your preferred edition and start your journey with CuerdOS today.
        </p>
      </div>
      <!-- System Requirements -->
      <div class="requirements-card">
        <h3 class="requirements-title" data-i18n="str-title-tabletitle">System Requirements</h3>
        <div class="requirements-grid">
          <div class="requirements-column">
              <h4 class="requirements-subtitle" data-i18n="str-tabletitle-minimum">Minimum</h4>
              <ul class="requirements-list">
                <li class="requirement-item">
                  <span data-i18n="str-tablecontent-mincpu">x86_64 1.00 GHz CPU</span>
                </li>
                <li class="requirement-item">
                  <span data-i18n="str-tablecontent-minram">1GB of RAM</span>
                </li>
                <li class="requirement-item">
                  <span data-i18n="str-tablecontent-mindisk">8.5GB disk storage</span>
                </li>
              </ul>

          </div>
          <div class="requirements-column">
              <h4 class="requirements-subtitle" data-i18n="str-tabletitle-recommended">Recommended</h4>
              <ul class="requirements-list">
                <li class="requirement-item">
                  <span data-i18n="str-tablecontent-reccpu">x86_64 2.00 GHz CPU dual-core</span>
                </li>
                <li class="requirement-item">
                  <span data-i18n="str-tablecontent-recram">2GB of RAM</span>
                </li>
                <li class="requirement-item">
                  <span data-i18n="str-tablecontent-recdisk">8.5GB SSD storage</span>
                </li>
              </ul>
          </div>
        </div>
      </div>

      <div class="spins-section" data-i18n="spins">
        <h3 class="spins-title" data-i18n="str-spins-title">Other CuerdOS Desktops Available</h3>
        <p class="spins-description" data-i18n="str-spins-description">
          Explore alternative desktop environments created by our Team
        </p>
      </div>
      <div class="spins-grid">
        <!-- Xfce -->
        <div class="spin-item ">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon ">
                <img src="Frontend/src/Images/spins/logos/xfce-logo.webp" alt="Sway Xfce">
              </div>
              <h2 class="spin-name">CuerdOS Xfce</h2>
            </div>
            <p class="spin-description" data-i18n="str-content-download-description-xfce">
              Esta nueva versión podríamos llamarla xfce lite por su gran parecido estético y su configuración sencilla para cualquier tipo de usuario.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/CuerdOS-2.0-Xfce/CuerdOS-2.0-Xfce.iso/download" 
                 class="btn btn-primary spin-primary Xfce-btn">
                <span data-i18n="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <div class="download-dropdown">
                  <button class="btn btn-outline download-link dropdown-toggle" data-i18n="str-download-other">Otras Fuentes</button>
                  <div class="dropdown-content">
                    <a href="https://softlibre.unizar.es/cuerdos/CuerdOS-2.0-Xfce/CuerdOS-2.0-Xfce.iso"
                     class="dropdown-item">Unizar</a>
                    <a href="https://archive.org/download/cuerdos-2.0_xfce/CuerdOS-2.0-Xfce.iso"
                     class="dropdown-item">Archive</a>
                    <a href="https://archive.org/download/cuerdos-2.0_xfce/cuerdos-2.0_xfce_archive.torrent"
                     class="dropdown-item">Torrent</a>
                  </div>
                </div>
              </div>
              <a href="checksums/CuerdOS-2.0-Xfce.md5" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container XFCE-bg">
              <img src="Frontend/src/Images/spins/Xfce.webp" alt="CuerdOS Xfce">
            </div>
          </div>
        </div>

        <!-- Sway -->
        <div class="spin-item reverse">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon ">
                <img src="Frontend/src/Images/spins/logos/sway-logo.webp" alt="Sway Logo">
              </div>
              <h2 class="spin-name">CuerdOS Sway</h2>
            </div>
            <p class="spin-description" data-i18n="str-content-download-description-Sway">
              Esta nueva versión podríamos llamarla xfce lite por su gran parecido estético y su configuración sencilla para cualquier tipo de usuario.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/CuerdOS-2.0-Sway/CuerdOS-2.0-Sway.iso/download" 
                 class="btn btn-primary spin-primary budgie-btn">
                <span data-i18n="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <div class="download-dropdown">
                  <button class="btn btn-outline download-link dropdown-toggle" data-i18n="str-download-other">Otras Fuentes</button>
                  <div class="dropdown-content">
                    <a href="https://softlibre.unizar.es/cuerdos/CuerdOS-2.0-Sway/CuerdOS-2.0-Sway.iso"
                     class="dropdown-item">Unizar</a>
                    <a href="https://archive.org/download/cuerdos-2.0-sway/CuerdOS-2.0-Sway.iso"
                     class="dropdown-item">Archive</a>
                    <a href="https://archive.org/download/cuerdos-2.0-sway/cuerdos-2.0-sway_archive.torrent"
                     class="dropdown-item">Torrent</a>
                  </div>
                </div>
              </div>
              <a href="checksums/CuerdOS-2.0-Sway.md5" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container Sway-bg">
              <img src="Frontend/src/Images/spins/Sway.webp" alt="CuerdOS Sway">
            </div>
          </div>
        </div>

        <!-- Cinnamon -->
        <div class="spin-item ">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon cinnamon-icon">
                <img src="Frontend/src/Images/spins/logos/cinnamon-logo.webp" alt="Cinnamon Logo">
              </div>
              <h2 class="spin-name">CuerdOS Cinnamon</h2>
            </div>
            <p class="spin-description" data-i18n="str-content-download-description-cinnamon">
              Os presentamos otro clásico nuestro con acabados refrescados.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/CuerdOS-2.0-Cinnamon/CuerdOS-2.0-Cinnamon.iso/download" 
                 class="btn btn-primary spin-primary cinnamon-btn">
                <span data-i18n="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <div class="download-dropdown">
                  <button class="btn btn-outline download-link dropdown-toggle" data-i18n="str-download-other">Otras Fuentes</button>
                  <div class="dropdown-content">
                    <a href="https://softlibre.unizar.es/cuerdos/CuerdOS-2.0-Cinnamon/CuerdOS-2.0-Cinnamon.iso"
                     class="dropdown-item">Unizar</a>
                    <a href="https://ia802303.us.archive.org/3/items/cuerdos-2.0-cinnamom/CuerdOS-2.0-Cinnamon-XLibre.iso"
                     class="dropdown-item">Archive</a>
                    <a href="https://archive.org/download/cuerdos-2.0-cinnamom/cuerdos-2.0-cinnamom_archive.torrent"
                     class="dropdown-item">Torrent</a>
                  </div>
                </div>
              </div>
              <a href="checksums/CuerdOS-2.0-Cinnamon.md5" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container cinnamon-bg">
              <img src="Frontend/src/Images/spins/Cinnamon.webp" alt="CuerdOS Cinnamon">
            </div>
          </div>
        </div>

        <!-- LXQt -->
        <div class="spin-item reverse">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon lxqt-icon">
                <img src="Frontend/src/Images/spins/logos/lxqt-logo.webp" alt="LXQt Logo">
              </div>
              <h2 class="spin-name">CuerdOS LXQt</h2>
            </div>
            <p class="spin-description" data-i18n="str-content-download-description-lxqt">
              Esta edición trae una configuración familiar y cómoda para cualquier tipo de usuario.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/CuerdOS-2.0-LXQt/CuerdOS-2.0-LXQt.iso/download" 
                 class="btn btn-primary spin-primary lxqt-btn">
                <span data-i18n="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <div class="download-dropdown">
                  <button class="btn btn-outline download-link dropdown-toggle" data-i18n="str-download-other">Otras Fuentes</button>
                  <div class="dropdown-content">
                    <a href="https://softlibre.unizar.es/cuerdos/CuerdOS-2.0-LXQt/CuerdOS-2.0-LXQt.iso"
                     class="dropdown-item">Unizar</a>
                    <a href="https://ia903405.us.archive.org/28/items/cuerdos-2.0-lxqt/CuerdOS-2.0-LXQt-XLibre.iso"
                     class="dropdown-item">Archive</a>
                    <a href="https://archive.org/download/cuerdos-2.0-lxqt/cuerdos-2.0-lxqt_archive.torrent"
                     class="dropdown-item">Torrent</a>
                  </div>
                </div>
              </div>
              <a href="checksums/CuerdOS-2.0-LXQt.md5" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container lxqt-bg">
              <img src="Frontend/src/Images/spins/LXQt.webp" alt="CuerdOS LXQt">
            </div>
          </div>
        </div>

        <!-- Mate -->
        <div class="spin-item ">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon mate-icon">
                <img src="Frontend/src/Images/spins/logos/mate-logo.webp" alt="Mate Logo">
              </div>
              <h2 class="spin-name">CuerdOS MATE</h2>
            </div>
            <p class="spin-description" data-i18n="str-content-download-description-mate">
              La nueva edición Mate con un acabado nuevo y más sencillo saliendo de lo clásico.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/CuerdOS-2.0-Mate/CuerdOS-2.0-Mate.iso/download" 
                 class="btn btn-primary spin-primary mate-btn">
                <span data-i18n="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <div class="download-dropdown">
                  <button class="btn btn-outline download-link dropdown-toggle" data-i18n="str-download-other">Otras Fuentes</button>
                  <div class="dropdown-content">
                    <a href="https://softlibre.unizar.es/cuerdos/CuerdOS-2.0-Mate/CuerdOS-2.0-Mate.iso"
                     class="dropdown-item">Unizar</a>
                    <a href="https://dn721704.ca.archive.org/0/items/cuerdos-2.0-mate-xlibre/CuerdOS-2.0-MATE-XLibre.iso"
                     class="dropdown-item">Archive</a>
                    <a href="https://archive.org/download/cuerdos-2.0-mate-xlibre/cuerdos-2.0-mate-xlibre_archive.torrent"
                     class="dropdown-item">Torrent</a>
                  </div>
                </div>
              </div>
              <a href="checksums/CuerdOS-2.0-Mate.md5" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container mate-bg">
              <img src="Frontend/src/Images/spins/MATE.webp" alt="CuerdOS MATE">
            </div>
          </div>
        </div>

        <!-- Shell -->
        <div class="spin-item reverse">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon shell-icon">
                <img src="Frontend/src/Images/spins/logos/shell-logo.webp" alt="Shell Logo">
              </div>
              <h2 class="spin-name">CuerdOS Shell</h2>
            </div>
            <p class="spin-description" data-i18n="str-content-download-description-shell">
              La distribución de la avioneta y los tonos olivas presenta su nueva Shell, con acabados más estéticos y novedades curiosas.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/CuerdOS-2.0-Gnome/CuerdOS-2.0-Gnome.iso/download" 
                 class="btn btn-primary spin-primary shell-btn">
                <span data-i18n="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <div class="download-dropdown">
                  <button class="btn btn-outline download-link dropdown-toggle" data-i18n="str-download-other">Otras Fuentes</button>
                  <div class="dropdown-content">
                    <a href="https://softlibre.unizar.es/cuerdos/CuerdOS-2.0-Gnome/CuerdOS-2.0-Gnome.iso"
                     class="dropdown-item">Unizar</a>
                    <a href="https://archive.org/download/cuerd-os-2.0-gnome/CuerdOS-2.0-Gnome.iso"
                     class="dropdown-item">Archive</a>
                    <a href="https://archive.org/download/cuerd-os-2.0-gnome/cuerd-os-2.0-gnome_archive.torrent"
                     class="dropdown-item">Torrent</a>
                  </div>
                </div>
              </div>
              <a href="checksums/CuerdOS-2.0-Gnome.md5" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container shell-bg">
              <img src="Frontend/src/Images/spins/Shell.webp" alt="CuerdOS Shell">
            </div>
          </div>
        </div>

        <!-- KDE -->
        <div class="spin-item">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon KDE-icon">
                <img src="Frontend/src/Images/spins/logos/kde-logo.webp" alt="kde Logo">
              </div>
              <h2 class="spin-name">CuerdOS KDE</h2>
            </div>
            <p class="spin-description" data-i18n="str-content-download-description-kde">
              La distribución de la avioneta y los tonos olivas presenta su nuevo Plasma, con acabados más estéticos y novedades curiosas.
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/CuerdOS-2.0-Plasma/CuerdOS-2.0-Plasma.iso/download" 
                 class="btn btn-primary spin-primary kde-btn">
                <span data-i18n="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <div class="download-dropdown">
                  <button class="btn btn-outline download-link dropdown-toggle" data-i18n="str-download-other">Otras Fuentes</button>
                  <div class="dropdown-content">
                    <a href="https://softlibre.unizar.es/cuerdos/CuerdOS-2.0-Plasma/CuerdOS-2.0-Plasma.iso"
                     class="dropdown-item">Unizar</a>
                    <a href="https://archive.org/download/cuerdos-2.0-plasma/CuerdOS-2.0-Plasma.iso"
                     class="dropdown-item">Archive</a>
                    <a href="https://archive.org/download/cuerdos-2.0-plasma/cuerdos-2.0-plasma_archive.torrent"
                     class="dropdown-item">Torrent</a>
                  </div>
                </div>
              </div>
              <a href="checksums/CuerdOS-2.0-Plasma.md5" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container x3-bg">
              <img src="Frontend/src/Images/spins/KDE.webp" alt="CuerdOS kde">
            </div>
          </div>
        </div>
      </div>

        <!-- Budgie -->
        <div class="spin-item reverse">
          <div class="spin-content">
            <div class="spin-header">
              <div class="spin-icon budgie-icon">
                <img src="Frontend/src/Images/spins/logos/budgie-logo.webp" alt="budgie Logo">
              </div>
              <h2 class="spin-name">CuerdOS Budgie</h2>
            </div>
            <p class="spin-description" data-i18n="str-content-download-description-budgie">
              La distribución de la avioneta y los tonos olivas presenta su nueva edición Budgie, con acabados más estéticos y novedades curiosas..
            </p>
            <div class="spin-downloads">
              <a href="https://sourceforge.net/projects/cuerdos/files/CuerdOS-2.0-Budgie/CuerdOS-2.0-Budgie.iso/download" 
                 class="btn btn-primary spin-primary budgie-btn">
                <span data-i18n="str-download-sourceforge">Download from Sourceforge</span>
              </a>
              <div class="spin-secondary">
                <div class="download-dropdown">
                  <button class="btn btn-outline download-link dropdown-toggle" data-i18n="str-download-other">Otras Fuentes</button>
                  <div class="dropdown-content">
                    <a href="https://softlibre.unizar.es/cuerdos/CuerdOS-2.0-Budgie/CuerdOS-2.0-Budgie.iso"
                     class="dropdown-item">Unizar</a>
                    <a href="https://archive.org/download/cuerdos-2.0-budgie/CuerdOS-2.0-Budgie-XLibre.iso"
                     class="dropdown-item">Archive</a>
                    <a href="https://archive.org/download/cuerdos-2.0-budgie/cuerdos-2.0-budgie_archive.torrent"
                     class="dropdown-item">Torrent</a>
                  </div>
                </div>
              </div>
              <a href="checksums/CuerdOS-2.0-Budgie.md5" class="spin-checksum">
                Checksums
              </a>
            </div>
          </div>
          <div class="spin-image">
            <div class="spin-image-container x3-bg">
              <img src="Frontend/src/Images/spins/Budgie.webp" alt="CuerdOS budgie">
            </div>
          </div>
        </div>
      </div>
      <!-- Credits -->
      <div class="credits-section">
        <div class="credits-card">
          <p class="credits-description" data-i18n="str-desc-autor">
            These editions were created and are mainly maintained by the CuerdOS Team
          </p>
        </div>
      </div>
    </div>
  </section>
`

class DownloadComponent extends HTMLElement {
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
    const dropdowns = this.shadow.querySelectorAll(".download-dropdown")

    dropdowns.forEach((dropdown) => {
      const dropdownContent = dropdown.querySelector(".dropdown-content")
      const toggleButton = dropdown.querySelector(".dropdown-toggle")

      if (dropdown && dropdownContent && toggleButton) {
        dropdown.addEventListener("mouseenter", () => {
          if (window.innerWidth > 768) {
            dropdownContent.style.opacity = "1"
            dropdownContent.style.visibility = "visible"
            dropdownContent.style.transform = "translateY(0)"
          }
        })

        dropdown.addEventListener("mouseleave", () => {
          if (window.innerWidth > 768) {
            dropdownContent.style.opacity = "0"
            dropdownContent.style.visibility = "hidden"
            dropdownContent.style.transform = "translateY(-10px)"
          }
        })

        toggleButton.addEventListener("click", (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault()
            e.stopPropagation()

            const isVisible = dropdownContent.style.visibility === "visible" && dropdownContent.style.opacity === "1"

            dropdowns.forEach((otherDropdown) => {
              if (otherDropdown !== dropdown) {
                const otherContent = otherDropdown.querySelector(".dropdown-content")
                if (otherContent) {
                  otherContent.style.opacity = "0"
                  otherContent.style.visibility = "hidden"
                  otherContent.style.transform = "translateY(-10px)"
                }
              }
            })

            if (isVisible) {
              dropdownContent.style.opacity = "0"
              dropdownContent.style.visibility = "hidden"
              dropdownContent.style.transform = "translateY(-10px)"
            } else {
              dropdownContent.style.opacity = "1"
              dropdownContent.style.visibility = "visible"
              dropdownContent.style.transform = "translateY(0)"
            }
          }
        })
      }
    })

    document.addEventListener("click", (e) => {
      const path = e.composedPath()
      const clickedInsideComponent = path.some(
        (element) => element === this || (element.shadowRoot && element.shadowRoot.contains(e.target)),
      )

      if (!clickedInsideComponent) {
        dropdowns.forEach((dropdown) => {
          const dropdownContent = dropdown.querySelector(".dropdown-content")
          if (dropdownContent) {
            dropdownContent.style.opacity = "0"
            dropdownContent.style.visibility = "hidden"
            dropdownContent.style.transform = "translateY(-10px)"
          }
        })
      }
    })

    window.addEventListener("resize", () => {
      dropdowns.forEach((dropdown) => {
        const dropdownContent = dropdown.querySelector(".dropdown-content")
        if (dropdownContent) {
          dropdownContent.style.opacity = "0"
          dropdownContent.style.visibility = "hidden"
          dropdownContent.style.transform = "translateY(-10px)"
        }
      })
    })
  }
}

customElements.define("download-component", DownloadComponent)
