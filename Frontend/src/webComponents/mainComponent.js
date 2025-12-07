const styles = /* css */ `


.background{

  z-index=: 1;
  background: var(--background-main);
}
.component{
  z-index=: 2;
}
`

class Main extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
            <style>${styles}</style>
            <main>
                <div class="background"></div>
                <slot class="component"></slot>
            </main>
        `
  }
}

customElements.define('main-component', Main)

