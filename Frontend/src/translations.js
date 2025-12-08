const translations = {
  //ENGLISH STRINGS
    en: {
    "str-menu-start": "Startpage",
    "str-menu-about": "About",
    "str-menu-download": "Download ",
    "str-menu-wiki": "Wiki",
    "str-menu-changelog": "Changelog",
      // Landing Component
    "str-slogan": "Optimized to the last pixel.",
    "str-title-about": "About",
    "str-content-about-1": "CuerdOS is a GNU/Linux distribution of Spanish origin focused on stability, efficiency, and performance.",
      // Features Component
    "str-features-title": "Why Choose CuerdOS?",
    "str-content-about-2": "This distribution is not just a derivative with a customized desktop environment, but includes numerous optimizations and performance improvements such as service tuning, better CPU, GPU, and memory handling, among many others.",
    "str-title-features": "Main characteristics",
    "str-title-feature-1": "Based on Debian as always.",
    "str-content-feature-1": "This provides great stability and security, along with excellent flexibility and compatibility.",
    "str-title-feature-2": "Lightweight and modern",
    "str-content-feature-2": "Unlike other lightweight distributions, CuerdOS opts for cutting-edge technologies.",
    "str-title-feature-3": "Sway",
    "str-content-feature-3": "This distribution focuses on offering a great experience with Sway, but also includes other desktop environments an windows managers.",
    "str-title-feature-4": "Own repositories",
    "str-content-feature-4": "CuerdOS has its own repositories where packages not found in Debian are provided with our newer own tools.",
      // Technical features
    "str-title-otherfeatures": "Other technical features",
    "str-content-otherfeatures-1": "Yelena Store preconfigured for easy installation of software (Debs and Flatpak).",
    "str-content-otherfeatures-2": "ZRam preconfigured with minimal CPU impact during compression.",
    "str-content-otherfeatures-3": "Nala preconfigured.",
    "str-content-otherfeatures-4": "CPU, GPU, and RAM consumption optimized via a patched kernel.",
    "str-content-otherfeatures-5": "Automatic security updates and Pipewire as default media server.",
    "str-content-otherfeatures-6": "Preconfigured TLP service to optimally manage power consumption.",
    "str-content-otherfeatures-7": "Waydroid compatibility guaranteed and system virtualization supported.",
    "str-content-otherfeatures-8": "Grub and Plymouth with custom and distro-specific themes.",
      // Download Component
    "str-title-download": "Download",
    "str-content-download-1": 'This is the second version of CuerdOS, called CuerdOS Skycatcher. If you find bugs or wish to contribute ideas, contact us via email or Telegram. Thank you all for your collaboration and support!',
    "str-content-download-2": 'You can view changelogs and reported bugs for different releases <a class="element" href="changelog.html">here</a>.',
    "str-titile-tabletitle": "System Requirements",
    "str-tabletitle-minimum": "Minimum",
    "str-tabletitle-recommended": "Recommended",
    "str-tablecontent-minram": "+1GB of RAM",
    "str-tablecontent-recracm": "2GB of RAM",
    "str-tablecontent-mincpu": "x86_64 1.00 GHz CPU",
    "str-tablecontent-recdisk": "8.5GB Disk storage on SSD",
    "str-tablecontent-mindisk": "8.5GB Disk storage",
    "str-tablecontent-reccpu": "x86_64 1.00 GHz CPU",
    "str-tablecontent-recram": "2GB of RAM",
    "str-title-downloadlink-sway": "CuerdOS Sway",
    "str-content-download-description-sway": "This is edition has Sway as default window manager, it's a Wayland i3-like windows manager.",
    "str-title-downloadlink-xfce": "CuerdOS XFCE",
    "str-content-download-description-2": "This edition has XFCE as default desktop environment, with a modern and comfortable finish for any user.",
    "str-subtitle-upgradewarning": "*Before testing the system, we strongly recommend upgrading to the latest version, as it includes all new features and fixes.*",
    "str-subtitle-logolicense": 'The <a class="element" href="https://github.com/CuerdOS/logo">CuerdOS logo</a> is published under the <a class="element" href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA-4.0</a> license.',
    "str-credits": "Created by the CuerdOS Dev Team.",
    "str-download-now": "Download Now",
    "str-learn-more": "Learn More",
    "str-download-sourceforge": "Download from Sourceforge",
    "str-download-sourceforge-2": "Download from Sourceforge",
    "str-spins-title": "CuerdOS Flavours",
    "str-spins-description": "Explore and enjoy the experience of our flavours.",
    "str-footer-description": "Optimized to the last pixel.",
    "str-footer-resources": "Resources",
    "str-footer-community": "Community",
    "str-footer-wiki": "Wiki",
    "str-footer-home": "Home",
    "str-footer-source": "Source Code",
    "str-technical-desc": "CuerdOS is not just another Linux distribution. It's a carefully crafted system with optimizations and features that modernize and improve Debian.",
    "str-changelog-nav": "Changelog",
    "str-errors-nav": "Errors",
    "str-back-home": "Back to Home",
    "str-changelog-subtitle": "Release history and bug reports",
    "str-release-history": "Release History",
    "str-latest-badge": "Latest",
    "str-launch-errors": "Launch Errors",
      //Spins
    "str-content-download-description-budgie":"This flavour has Budgie as desktop environment with finishes that bring back memories of Solus.",
    "str-content-download-description-Sway": "This flavour has Sway as main WM for those who prefers something lighter than XFCE. (Live user is 'user' and password is 'live'.)",
    "str-content-download-description-cinnamon" : "This flavour has Cinnamon as main desktop environment with familiar and modern design.",
    "str-content-download-description-lxqt": "This flavour has LXQt as main desktop environment with a polished design and better finish.",
    "str-content-download-description-mate": "This flavour has Mate as main desktop environment with a classic and modern design.",
    "str-content-download-description-shell" : "This flavour has Gnome as main desktop environment with a modern and eye-catching design.",
    "str-content-download-description-kde": "This flavour has KDE as main desktop environment with good contrasts and modern design.",
    "str-desc-autor": "These flavours are created and maintained by the CuerdOS development team, any misuse is at user's own risk.",
      //Changelogs
    "str-changelog-title": "Changelog",
    "str-changelog-description": "Track the evolution of CuerdOS through our detailed changelog and known issues",
      //v2.0
    "str-changelog-news-changes-2.0-r": "Major release with new base and enhanced features",
      //Core
    "str-changelog-news-changes-2.0-main-news-title": "Core Changes",
    "str-changelog-news-changes-2.0-main-news-1" : "Update to the new Debian release: ",
    "str-changelog-news-changes-2.0-main-news-2-1": "New ",
    "str-changelog-news-changes-2.0-main-news-2-2": "Fastfetch configuration",
    "str-changelog-news-changes-2.0-main-news-2-3" : "to get a better style",
    "str-changelog-news-changes-2.0-main-news-3": " as default frontend for APT",
    "str-changelog-news-changes-2.0-main-news-4": "Refreshed styles for new ISOs, new version new life",
    "str-changelog-news-changes-2.0-main-news-5": "New kernel 6.12.58 with a new Zram configuration to get better performance using ZSTD algorithm.",
    "str-changelog-news-changes-2.0-main-news-6": "Sway with pywal preinstalled and a new design.",
    "str-changelog-news-changes-2.0-main-news-7": "New default browser, Vivaldi.",
    "str-changelog-news-changes-2.0-main-news-8": "CuerdTools updated and remaked.",
    "str-changelog-news-changes-2.0-main-news-9": "New Nvidia drivers installer and a new automatized upgrade program to update from CuerdOS 1.2.1.",
    "str-changelog-news-changes-2.0-main-news-10": "New wallpapers and refreshed style.",
    "str-changelog-news-changes-2.0-main-news-11": "All published by CuerdOS Public License v1.0.",
      //Deprecated
    "str-changelog-news-changes-2.0-deprecated-news-title": "Deprecated",
    "str-changelog-news-changes-2.0-deprecated-news-2-1": "Deprecated isos: ",
    "str-changelog-news-changes-2.0-deprecated-news-2-2": "X3",
      //New Features
    "str-changelog-news-changes-2.0-newsFeatures-title": " New Features",
    "str-changelog-news-changes-2.0-newsFeatures-2-1": "New environments added: ", 
    "str-changelog-news-changes-2.0-newsFeatures-2-2" : "Sway and kde",
    "str-changelog-news-changes-2.0-newsFeatures-3-1" : "New browser by default on bigger isos, ",
    "str-changelog-news-changes-2.0-newsFeatures-3-2": " and  ",
    "str-changelog-news-changes-2.0-newsFeatures-3-3": "only for lighter isos",
    "str-changelog-news-changes-2.0-newsFeatures-4-1" : "New  updated to complement and enhance the user experience",
    "str-changelog-news-changes-2.0-newsFeatures-4-2" : " updated to complement and enhance the user experience",
      //System Changes
    "str-changelog-news-changes-2.0-SystemChanges-title" : " System Changes",
    "str-changelog-news-changes-2.0-newsFeatures-2-1": " service disabled by default, the user must intervene if they require the service",
      //v1.3
    "str-changelog-news-changes-1.3-r":"Maintenance release with minimal updates",
      //Maintenance
    "str-changelog-news-change-1.3-maintenance-title": " Maintenance Mode",
    "str-changelog-news-change-1.3-maintenance-1" : " is the only version available for the old stable version",
    "str-changelog-news-change-1.3-maintenance-2" : "You will only receive  ",
    "str-changelog-news-change-1.3-maintenance-2-1": "kernel updates",
    "str-changelog-news-change-1.3-maintenance-2-2": "as it remains in minimal maintenance",
      //Visual
    "str-changelog-news-change-1.3-visual-title" : " Visual Updates",
    "str-changelog-news-change-1.3-visual-2-1" : "New style",
    "str-changelog-news-change-1.3-visual-3-1" : "New ",
    "str-changelog-news-change-1.3-visual-3-2" : "Fastfetch configuration",
      //SystemChanges
    "str-changelog-news-change-1.3-SystemChanges-title" : "System Changes",
    "str-changelog-news-change-1.3-SystemChanges-1" : " service disabled by default, the user must intervene if they require the service",
      //Notification-component
    "str-content-banner-title":" Thank you for the reception and feedback of this new edition",
    "str-content-banner-text":"Click, here to get more info."
  },
  //SPANISH STRINGS
  es: {
    "str-menu-start": "Inicio",
    "str-menu-about": "Acerca de",
    "str-menu-download": "Descargar ",
    "str-menu-wiki": "Wiki",
    "str-menu-changelog": "Registro de cambios",
      // Landing Component
    "str-slogan": "Optimizado hasta el último píxel.",
    "str-title-about": "Acerca de",
    "str-content-about-1": "CuerdOS es una distribución GNU/Linux de origen español enfocada en la estabilidad, eficiencia y rendimiento.",
      // Features Component
    "str-features-title": "¿Por qué elegir CuerdOS?",
    "str-content-about-2": "Esta distribución no es solo un derivado con un entorno de escritorio personalizado, sino que tiene una serie de optimizaciones y mejoras de rendimiento que facilitan al usuario el uso del equipo en el día a día.",
    "str-title-features": "Características principales:",
    "str-title-feature-1": "Basado en Debian como de costumbre.",
    "str-content-feature-1": "Esto proporciona una gran estabilidad y seguridad, así como una muy buena flexibilidad y compatibilidad.",
    "str-title-feature-2": "Ligero y moderno.",
    "str-content-feature-2": "A diferencia de otras distribuciones ligeras, CuerdOS es un sistema que opta por tecnologías vanguardistas.",
    "str-title-feature-3": "Sway",
    "str-content-feature-3": "Esta distribución se centra en ofrecer una gran experiencia con Sway, aunque también cuenta con más entornos y gestores de ventanas.",
    "str-title-feature-4": "Repositorios propios",
    "str-content-feature-4":
    "CuerdOS tiene sus propios repositorios donde se proporcionan paquetes propios o que no están en Debian.",
      // Technical features
    "str-title-otherfeatures": "Otras características técnicas",
    "str-content-otherfeatures-1": "Yelena Store preconfigurado para facilitar la instalación de programas (Debs y flatpak).",
    "str-content-otherfeatures-2": "ZRam preconfigurado con apenas impacto en el uso de la CPU.",
    "str-content-otherfeatures-3": "Nala preinstalado y configurado.",
    "str-content-otherfeatures-4": "Optimización del consumo de CPU, GPU y RAM mediante kernel parcheado.",
    "str-content-otherfeatures-5": "Actualizaciones de seguridad automáticas y Pipewire como servidor multimedia predeterminado.",
    "str-content-otherfeatures-6": "Servicio TLP preconfigurado para gestionar el consumo de energía de manera óptima..",
    "str-content-otherfeatures-7": "Virtualización del sistema soportada y compatibilidad con Waydroid garantizada.",
    "str-content-otherfeatures-8": "Grub y Plymouth con temas personalizados junto a temas propios de la distribución.",
      // Download Component
    "str-title-download": "Descargar",
    "str-content-download-1": "Esta es la segunda versión de CuerdOS, llamada CuerdOS Skycatcher, en caso de encontrar errores o contribuir con ideas, contáctenos por e-mail o Telegram. ¡Gracias a todos por su colaboración y apoyo!",
    "str-content-download-2": 'Puede ver los registros de cambios y los errores reportados para diferentes versiones <a class="element" href="changelog.html">aquí</a>.',
    "str-title-tabletitle": "Requisitos del sistema",
    "str-tabletitle-minimum": "Minimos",
    "str-tabletitle-recommended": "Recomendados",
    "str-tablecontent-minram": "+1GB de RAM",
    "str-tablecontent-recracm": "2GB de RAM",
    "str-tablecontent-mincpu": "CPU x86_64 a 1,00 Ghz",
    "str-tablecontent-mindisk": "8.5GB de almacenamiento",
    "str-tablecontent-recdisk": "8.5GB de almacenamiento en SSD",
    "str-subtitle-upgradewarning": "*Antes de probar el sistema, recomendamos encarecidamente que se actualice a la última versión, ya que tendrá todas las nuevas características y errores corregidos.*",
    "str-subtitle-logolicense": 'El <a class="element" href="https://github.com/CuerdOS/logo">logo de CuerdOS</a> está publicado bajo licencia <a class="element" href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA-4.0</a>',
    "str-credits": "Creado por CuerdOS Dev Team. ",
    "str-download-now": "Descargar Ahora",
    "str-learn-more": "Saber Más",
    "str-download-sourceforge": "Descargar desde Sourceforge",
    "str-download-sourceforge-2": "Descargar desde Sourceforge",
    "str-spins-title": "Sabores de CuerdOS",
    "str-spins-description": "Explora y disfruta la experiencia CuerdOS con nuestros sabores.",
    "str-footer-description": "Optimizado hasta el último píxel.",
    "str-footer-resources": "Recursos",
    "str-footer-community": "Comunidad",
    "str-footer-wiki": "Wiki",
    "str-footer-home": "Inicio",
    "str-footer-source": "Código Fuente",
    "str-technical-desc": "CuerdOS no es solo otra distribución Linux. Es un sistema cuidadosamente elaborado con optimizaciones y características que modernizan y mejoran Debian.",
    "str-tablecontent-reccpu": "CPU x86_64 a 1,00 Ghz",
    "str-tablecontent-recram": "2GB de RAM",
    "str-changelog-nav": "Changelog",
    "str-errors-nav": "Errores",
    "str-back-home": "Volver al Inicio",
    "str-changelog-subtitle": "Historial de versiones y reportes de errores",
    "str-release-history": "Historial de Versiones",
    "str-latest-badge": "Última",
    "str-launch-errors": "Errores de Lanzamiento",
      //Spins
    //"str-title-downloadlink-sway": "CuerdOS Sway",
    //"str-title-downloadlink-xfce": "CuerdOS XFCE",
    "str-content-download-description-sway": "Este sabor monta Sway como gestor de ventanas predeterminado, es un gestor de ventanas Wayland parecido a i3.",
    "str-content-download-description-budgie":"Este sabor trae Budgie como escritorio principal con unos acabados que traen recuerdos de Solus.",
    "str-content-download-description-xfce": "Este sabor trae XFCE como entorno de escritorio predeterminado, con un acabado moderno y cómodo para cualquier usuario.",
    "str-content-download-description-Sway": "Este sabor monta Sway como entorno estrella, para aquellos que quieren algo más sencillo y ligero que XFCE. (Usuario del live cd 'user' y contraseña 'live'.)",
    "str-content-download-description-cinnamon" : "Este sabor trae Cinnamon como escritorio principal con acabados familiares y modernos.",
    "str-content-download-description-lxqt": "Este sabor trae LXQt como escritorio principal, ahora más pulida que nunca.",
    "str-content-download-description-mate": "Este sabor trae Mate como escritorio principal con una configuración clásica pero moderna.",
    "str-content-download-description-shell" :"Este sabor trae Gnome como escritorio principal con unos acabados bastante modernos y llamativos.",
    "str-content-download-description-kde": "Este sabor trae KDE como escritorio principal, tras mucho tiempo de espera por la comunidad, está de vuelta.",
    "str-desc-autor": "Estos sabores son creados y mantenidos por el equipo de desarrollo de CuerdOS, cualquier uso indebido queda bajo responsabilidad del usuario.",
      //Changelogs
    "str-changelog-title": "Registro de cambios",
    "str-changelog-description": "Sigue la evolución de CuerdOS a través de nuestro changelog detallado y conoce problemas encontrados",
      //v2.0
    "str-changelog-news-changes-2.0-r": "Migración a una nueva base principal y más novedades",
      //Core
    "str-changelog-news-changes-2.0-main-news-title": "Core Changes",
    "str-changelog-news-changes-2.0-main-news-1" : "Actualización a una nueva versión de Debian: ",
    "str-changelog-news-changes-2.0-main-news-2-1": "Nueva",
    "str-changelog-news-changes-2.0-main-news-2-2": "configuración para Fastfetch",
    "str-changelog-news-changes-2.0-main-news-2-3" : "para que tenga un estilo menos genérico",
    "str-changelog-news-changes-2.0-main-news-3": " alternativa a Bauh Store",
    "str-changelog-news-changes-2.0-main-news-4": "Estilos refrescados para cada iso, versión nueva vida nueva.",
    "str-changelog-news-changes-2.0-main-news-5": "Nuevo kernel 6.12.58 junto a nueva configuración de Zram para aprovechar el algoritmo ZSTD.",
    "str-changelog-news-changes-2.0-main-news-6": "Sway con pywal preinstalado junto a un nuevo diseño.",
    "str-changelog-news-changes-2.0-main-news-7": "Cambio de navegador predeterminado, Brave por Vivaldi.",
    "str-changelog-news-changes-2.0-main-news-8": "CuerdTools actualizadas y renovadas.",
    "str-changelog-news-changes-2.0-main-news-9": "Instalador automatizado para los drivers de Nvidia y subir a CuerdOS 2.0.",
    "str-changelog-news-changes-2.0-main-news-10": "Nuevos estilos y fondos de pantalla.",
    "str-changelog-news-changes-2.0-main-news-11": "Todo publicado bajo CuerdOS Public License v1.0.",
      //Deprecated
    "str-changelog-news-changes-2.0-deprecated-news-title": "Desechados",
    "str-changelog-news-changes-2.0-deprecated-news-2-1": "Retirado el soporte a: ",
    "str-changelog-news-changes-2.0-deprecated-news-2-2": "X3",
      //New Features
    "str-changelog-news-changes-2.0-newsFeatures-title": "Nuevas Mejoras",
    "str-changelog-news-changes-2.0-newsFeatures-2-1": "Reincorporación de cierto entorno pedido por la comunidad:", 
    "str-changelog-news-changes-2.0-newsFeatures-2-2" : "KDE",
    "str-changelog-news-changes-2.0-newsFeatures-3-1" : "Navegador por defecto para las isos más grandes ",
    "str-changelog-news-changes-2.0-newsFeatures-3-2": " y  ",
    "str-changelog-news-changes-2.0-newsFeatures-3-3": "en las más livianas",
    "str-changelog-news-changes-2.0-newsFeatures-4-1" : "Nuevas",
    "str-changelog-news-changes-2.0-newsFeatures-4-2" : " para complementar y mejorar la experiencia del usuario.",
      //System Changes
    "str-changelog-news-changes-2.0-SystemChanges-title" : "Cambios del sistema",
    "str-changelog-news-changes-2.0-newsFeatures-2-1": "deshabilitado por defecto, el usuario debe intervenir si requiere del servicio",
      //v1.3
    "str-changelog-news-changes-1.3-r":"Lanzamiento de mantenimiento con actualizaciones mínimas",
      //Maintenance
    "str-changelog-news-change-1.3-maintenance-title": "Modo Mantenimiento",
    "str-changelog-news-change-1.3-maintenance-1" : " como único entorno para esta versión old stable",
    "str-changelog-news-change-1.3-maintenance-2" : "Recibirá solo ",
    "str-changelog-news-change-1.3-maintenance-2-1": "actualizaciones de kernel",
    "str-changelog-news-change-1.3-maintenance-2-2": "ya que se queda en mantenimiento mínimo",
      //Visual
    "str-changelog-news-change-1.3-visual-title" : " Cambios Visuales",
    "str-changelog-news-change-1.3-visual-2-1" : "Nuevo estilo",
    "str-changelog-news-change-1.3-visual-3-1" : "Nueva ",
    "str-changelog-news-change-1.3-visual-3-2" : "configuración para Fastfetch",
      //SystemChanges
    "str-changelog-news-change-1.3-SystemChanges-title" : "Cambios del sistema",
    "str-changelog-news-change-1.3-SystemChanges-1" : "deshabilitado por defecto, el usuario debe intervenir si requiere del servicio",
      //Notification-component
    "str-content-banner-title":"Gracias por el recibimiento y feedback de esta nueva edición. ",
    "str-content-banner-text":"Haz clic aquí para más"
  },
}
// Función para detectar el idioma del navegador
function detectBrowserLanguage() {
  // Obtener idiomas del navegador
  const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage || "en"]

  for (const lang of browserLanguages) {
    const langCode = lang.split("-")[0].toLowerCase()

    // Verificar si tenemos traducciones
    if (translations[langCode]) {
      return langCode
    }
  }

  // Fallback a inglés si no se encuentra ningún idioma soportado
  return "en"
}

// Inicializar idioma: localStorage > navegador > inglés
let currentLang = localStorage.getItem("lang") || detectBrowserLanguage()

// Función para aplicar traducciones
function applyTranslations(container = document) {
  container.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n")
    const translated = translations[currentLang][key]

    if (translated !== undefined) {
      el.innerHTML = translated
    } else {
      console.warn(`Missing translation for key "${key}" in "${currentLang}"`)
    }
  })

  // Buscar en shadow roots de web components
  container.querySelectorAll("*").forEach((el) => {
    if (el.shadowRoot) {
      el.shadowRoot.querySelectorAll("[data-i18n]").forEach((shadowEl) => {
        const key = shadowEl.getAttribute("data-i18n")
        const translated = translations[currentLang][key]

        if (translated !== undefined) {
          shadowEl.innerHTML = translated
        } else {
          console.warn(`Missing translation for key "${key}" in "${currentLang}"`)
        }
      })
    }
  })
}
// MutationObserver para detectar elementos dinámicos
let observer
function initTranslationObserver() {
  if (observer) {
    observer.disconnect()
  }

  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      // Verificar nodos añadidos
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // Aplicar traducciones al nuevo elemento
          applyTranslations(node)

          // Si el elemento tiene shadow root, observarlo también
          if (node.shadowRoot) {
            applyTranslations(node.shadowRoot)
          }
        }
      })
    })
  })
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
}

// Función para cambiar idioma
function changeLanguage(newLang) {
  if (translations[newLang]) {
    currentLang = newLang
    localStorage.setItem("lang", currentLang)
    applyTranslations()

    // Actualizar selector de idioma si existe
    const switcher = document.getElementById("langSelect")
    if (switcher) {
      switcher.value = currentLang
    }
  }
}

function initLanguageSwitcher() {
  const switcher = document.getElementById("langSelect")
  if (switcher) {
    switcher.value = currentLang

    switcher.addEventListener("change", () => {
      changeLanguage(switcher.value)
    })
  }
}

// Función para obtener el idioma actual
function getCurrentLanguage() {
  return currentLang
}

// Función para obtener todas las traducciones de un idioma
function getTranslations(lang = currentLang) {
  return translations[lang] || translations["en"]
}


document.addEventListener("DOMContentLoaded", () => {

  applyTranslations()

  initLanguageSwitcher()
  // Inicializar observer para elementos dinámicos
  initTranslationObserver()

  console.log(`Language initialized: ${currentLang}`)
})

window.TranslationManager = {
  changeLanguage,
  getCurrentLanguage,
  getTranslations,
  applyTranslations,
}
