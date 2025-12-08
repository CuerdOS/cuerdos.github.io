class NotificationBanner extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.state = 'normal' 
  }

  connectedCallback() {
    this.render()
    setTimeout(() => this.show(), 500)
  }

  show() {
    this.shadow.querySelector('.notification-container').classList.add('active')
  }

  hide() {
    this.shadow.querySelector('.notification-container').classList.remove('active')
  }

  toggleMinimize() {
    const container = this.shadow.querySelector('.notification-container')
    const content = this.shadow.querySelector('.notification-content')
    const minBtn = this.shadow.querySelector('.btn-minimize')
    const maxBtn = this.shadow.querySelector('.btn-maximize')
    const notification = this.shadow.querySelector('.notification-image')
    const notification_p = this.shadow.querySelector('.content-text p')

    if (this.state === 'normal' || this.state === 'maximized') {
      this.state = 'minimized'
      container.classList.add('minimized')
      container.classList.remove('maximized')
      content.style.display = 'none'
      minBtn.textContent = '□'
      minBtn.title = 'Restaurar'
      maxBtn.style.display = 'none'
    } else {
      this.state = 'normal'
      container.classList.remove('minimized')
      content.style.display = 'flex'
      minBtn.textContent = '−'
      minBtn.title = 'Minimizar'
      maxBtn.style.display = 'flex'
      notification.src = 'Frontend/src/Banner/notification_advise.jpg'
      notification_p.style.display = 'flex'
    }
  }

  toggleMaximize() {
    const container = this.shadow.querySelector('.notification-container')
    const maxBtn = this.shadow.querySelector('.btn-maximize')
    const notification = this.shadow.querySelector('.notification-image')
    const notification_p = this.shadow.querySelector('.content-text p')

    if (this.state === 'normal') {
      this.state = 'maximized'
      container.classList.add('maximized')
      maxBtn.style.display = 'none'
      notification_p.style.display = 'none'
      notification.src = 'Frontend/src/Banner/notification_image.jpg'

    } 
  }

  render() {
    this.shadow.innerHTML = 
      /* html */`
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .notification-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 380px;
          color:#a9b650;
          background: linear-gradient(135deg, #3a3a3a, #1a1a1a);
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
          z-index: 9999;
          opacity: 0;
          transform: translateX(120%);
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .notification-container.active {
          opacity: 1;
          transform: translateX(0);
        }

        .notification-container.minimized {
          width: 200px;
          height: 60px;
        }

        .notification-container.maximized {
          width: 600px;
          height: auto;
          min-height: 400px;
          bottom: 50%;
          right: 50%;
          transform: translate(50%, 50%);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .notification-container.maximized.active {
          opacity: 1;
          transform: translate(50%, 50%);
        }

        .notification-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background-color: #161b15f2;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .notification-icon {
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 12px;
          font-weight: bold;
        }
        .notification-icon img{
          max-width: 3rem;
          min-width: 2rem;
        }

        .notification-name {
          font-size: 13px;
          font-weight: 500;
          color: #98cca7;
        }

        .header-controls {
          display: flex;
          gap: 4px;
        }

        .control-btn {
          width: 28px;
          height: 28px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-radius: 4px;
          font-size: 16px;
          color: #98cca7;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }

        .control-btn:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        .btn-close:hover {
          background-color: #e81123;
          color: white;
        }

        .notification-content {
          padding: 16px;
          display: flex;
          gap: 14px;
          transition: all 0.3s ease;
        }

        .notification-container.maximized .notification-content {
          flex-direction: column;
          padding: 24px;
        }

        .notification-image {
          width: 80px;
          height: 80px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .notification-container.maximized .notification-image {
          width: 100%;
          height: auto;
          object-fit: cover;
        }

        .content-text {
          flex: 1;
        }

        .content-text h3 {
          margin: 0 0 8px;
          font-size: 15px;
          font-weight: 600;
          color: #90f755;
          line-height: 1.4;
          transition: font-size 0.3s ease;
        }

        .notification-container.maximized .content-text h3 {
          font-size: 24px;
          margin-bottom: 16px;
        }

        .content-text p {
          margin: 0 0 12px;
          font-size: 13px;
          color: #b2c530;
          text-decoration: underline;
          cursor: pointer;
          transition: font-size 0.3s ease;
        }

        .notification-container.maximized .content-text p {
          font-size: 16px;
          margin-bottom: 20px;
        }

        .content-text p:hover {
          color: #90f755;
        }

        .stuff-url {
          font-size: 12px;
          color: #ccdb68;
          margin: 8px 0 0;
          transition: font-size 0.3s ease;
        }

        .notification-container.maximized .stuff-url {
          font-size: 14px;
        }


        .notification-container.maximized  {
          display: block;
        }

        .cta-button {
          background-color: #0067c0;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .cta-button:hover {
          background-color: #004999;
        }

        @media (max-width: 650px) {
          .notification-container {
            width: calc(100% - 40px);
          }

          .notification-container.maximized {
            width: calc(100% - 40px);
            height: calc(100vh - 80px);
            max-height: 600px;
          }
        }
      </style>

      <div class="notification-container">
        <div class="notification-header">
          <div class="header-left">
            <div class="notification-icon"><img src="Frontend/src/Images/cuerdos_logo.webp" alt=""></div>
            <span class="notification-name">Noticias CuerdOS</span>
          </div>
          <div class="header-controls">
            <button class="control-btn btn-minimize" title="Minimizar">−</button>
            <button class="control-btn btn-maximize" title="Maximizar">□</button>
            <button class="control-btn btn-close" title="Cerrar">×</button>
          </div>
        </div>
        <div class="notification-content">
          <img class="notification-image" src="Frontend/src/Banner/notification_advise.jpg" alt="Notificacion">
          <div class="content-text">
            <h3 data-i18n="str-content-banner-title">Gracias por el recibimiento y feedback de esta nueva edición. </h3>
            <p data-i18n="str-content-banner-text">Haz clic aquí para más</p>
            <div class="stuff-url">CuerdOS Team</div>
          </div>
        </div>
      </div>
    `

    this.shadow.querySelector('.btn-close').addEventListener('click', () => {
      this.hide()
    })

    this.shadow.querySelector('.btn-minimize').addEventListener('click', () => {
      this.toggleMinimize()
    })

    this.shadow.querySelector('.btn-maximize').addEventListener('click', () => {
      this.toggleMaximize()
    })

    this.shadow.querySelector('.content-text p').addEventListener('click', () => {
      this.toggleMaximize()
    })
  }
}

customElements.define('notification-banner', NotificationBanner)
