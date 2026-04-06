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
  .spinner-container{
    display: flex;
    position:absolute;
    max-width: fit-content;
    max-height: fit-content;
  }
  .sp-border {
    width: 2.2rem; height: 2.2rem;
    border-radius: 50%;
    border: 3px solid #99999940;
    border-top-color: var(--primary-green);
    animation: spin 0.8s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

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
            <svg id="scalable-svg" viewBox="0 0 800 600" class="computer-svg" version="1.1" xml:space="preserve" width="800" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
              <defs id="defs20">
              <linearGradient id="screenGradient" x1="96.824584" y1="135.55442" x2="522.85275" y2="561.58259" gradientTransform="scale(1.2909944,0.77459667)" gradientUnits="userSpaceOnUse">
                <stop 
                  offset="0%"
                  style="stop-color:white;stop-opacity:0.3"
                  id="stop19" /> 
                  <stop offset="100%" style="stop-color:white;stop-opacity:0" id="stop20" />
                  </linearGradient><filter
                id="alpha"
                filterUnits="objectBoundingBox" 
                x="0"
                y="0"
                width="1"
                height="1"><feColorMatrix
                  type="matrix"
                  in="SourceGraphic"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
                  id="feColorMatrix2" /></filter><clipPath
                id="clip6"><path
                  d="m 76,645 h 147 v 36 H 76 Z m 0,0"
                  id="path6" /></clipPath><clipPath
                id="clip7"><path
                  d="m 216.67187,608.85547 -10.38281,3.17578 c -5.03906,1.54297 -8.60937,6.02344 -8.98047,11.27734 l -0.78125,6.23438 -4.01953,-3.92969 c -1.76172,-1.72266 -4.1289,-2.6875 -6.58984,-2.6875 h -23.72266 c -8.89453,-1.09766 -12.0039,-11.4375 -34.33203,-11.4375 -22.32812,0 -22.88672,11.4375 -22.88672,11.4375 H 93.53125 c -11.441406,0 -11.441406,11.44141 -11.441406,11.44141 v 5.60937 h -2.976563 v -15.45703 c 0,-0.78906 -0.566406,-1.51953 -1.351562,-1.58594 -0.882813,-0.0781 -1.621094,0.61328 -1.621094,1.48047 v 42.78125 c 0,0.82031 0.667969,1.48438 1.488281,1.48438 0.820313,0 1.484375,-0.66407 1.484375,-1.48438 v -15.5625 h 2.976563 v 5.60938 c 0,0 0,11.4375 11.441406,11.4375 4.867188,0 10.21875,0.082 15.88281,0.15234 -2.71093,0.62109 -4.6914,3.16406 -4.41015,6.12109 0.24609,2.65625 2.38672,4.83594 5.03906,5.12891 3.45312,0.38281 6.375,-2.30469 6.375,-5.67969 0,-2.67578 -1.83984,-4.91797 -4.32031,-5.53906 47.54687,0.50781 115.04296,-0.89844 110.54687,-57.375 -0.0234,-0.29687 -0.23828,-0.66016 -0.54687,-1.03906 -0.95704,-1.19141 -2.40235,-1.82422 -3.89063,-1.82422 -0.51172,0 -1.03125,0.0742 -1.53516,0.23047"
                  id="path7" /></clipPath><mask
                id="mask1"><g
                  filter="url(#alpha)"
                  id="g7"><rect
                    x="0"
                    y="0"
                    width="299"
                    height="772"
                    style="fill:#000000;fill-opacity:0.100006;stroke:none"
                    id="rect7-3" /></g></mask><clipPath
                id="clip9"><path
                  d="M 0,0.804688 H 146.76953 V 36 H 0 Z m 0,0"
                  id="path8" /></clipPath><clipPath
                id="clip10"><path
                  d="m 140.67187,-36.144531 -10.38281,3.175781 c -5.03906,1.542969 -8.60937,6.023438 -8.98047,11.277344 l -0.78125,6.234375 -4.01953,-3.929688 c -1.76172,-1.722656 -4.1289,-2.6875 -6.58984,-2.6875 H 86.195312 c -8.894531,-1.097656 -12.003906,-11.4375 -34.332031,-11.4375 -22.328125,0 -22.886719,11.4375 -22.886719,11.4375 H 17.53125 c -11.441406,0 -11.441406,11.441407 -11.441406,11.441407 v 5.609374 H 3.113281 v -15.457031 c 0,-0.789062 -0.566406,-1.519531 -1.351562,-1.585937 -0.882813,-0.07813 -1.621094,0.613281 -1.621094,1.480468 v 42.78125 c 0,0.820313 0.667969,1.484376 1.488281,1.484376 0.820313,0 1.484375,-0.664063 1.484375,-1.484376 v -15.5625 h 2.976563 v 5.609376 c 0,0 0,11.4375 11.441406,11.4375 4.867188,0 10.21875,0.08203 15.882812,0.152343 -2.710937,0.621094 -4.691406,3.164063 -4.410156,6.121094 0.246094,2.65625 2.386719,4.835937 5.039063,5.128906 3.453125,0.382813 6.375,-2.304687 6.375,-5.679687 0,-2.675782 -1.839844,-4.917969 -4.320313,-5.539063 47.546875,0.507813 115.042964,-0.898437 110.546874,-57.375 -0.0234,-0.296875 -0.23828,-0.660156 -0.54687,-1.039062 -0.95704,-1.191407 -2.40235,-1.824219 -3.89063,-1.824219 -0.51172,0 -1.03125,0.07422 -1.53516,0.230469"
                  id="path9" /></clipPath><clipPath
                id="clip8"><rect
                  x="0"
                  y="0"
                  width="147"
                  height="36"
                  id="rect9-6" /></clipPath><g
                id="surface4650"
                clip-path="url(#clip8)"><g
                  clip-path="url(#clip9)"
                  clip-rule="nonzero"
                  id="g11"><g
                    clip-path="url(#clip10)"
                    clip-rule="nonzero"
                    id="g10"><path
                      style="fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                      d="M -1.128906,0.804688 H 146.76953 V 38.515625 H -1.128906 Z m 0,0"
                      id="path10" /></g></g></g><g
                id="compositing-group-0"
                transform="translate(185,334)"><rect
                  x="-185"
                  y="-334"
                  width="720"
                  height="720"
                  fill="#000000"
                  fill-opacity="0"
                  id="rect191" /><clipPath
                  id="clip-5"><path
                    clip-rule="nonzero"
                    d="M 0.582031,0.15625 H 134.58203 V 20.511719 H 0.582031 Z m 0,0"
                    id="path191" /></clipPath><g
                  clip-path="url(#clip-5)"
                  id="g192"><rect
                    x="-185"
                    y="-334"
                    width="720"
                    height="720"
                    fill="#ffffff"
                    fill-opacity="1"
                    id="rect192" /></g></g><g
                id="compositing-group-5"
                transform="translate(185,334)"><rect
                  x="-185"
                  y="-334"
                  width="720"
                  height="720"
                  fill="#000000"
                  fill-opacity="0"
                  id="rect330" /><clipPath
                  id="clip-11"><path
                    clip-rule="nonzero"
                    d="M 0.582031,0.15625 H 134.58203 V 20 H 0.582031 Z m 0,0"
                    id="path330" /></clipPath><g
                  clip-path="url(#clip-11)"
                  id="g331"><rect
                    x="-185"
                    y="-334"
                    width="720"
                    height="720"
                    fill="#ffffff"
                    fill-opacity="1"
                    id="rect331" /></g></g><g
                id="compositing-group-10"
                transform="translate(401,334)"><rect
                  x="-401"
                  y="-334"
                  width="720"
                  height="720"
                  fill="#000000"
                  fill-opacity="0"
                  id="rect472" /><clipPath
                  id="clip-18"><path
                    clip-rule="nonzero"
                    d="M 0.667969,0.15625 H 134.66797 V 20.511719 H 0.667969 Z m 0,0"
                    id="path472" /></clipPath><g
                  clip-path="url(#clip-18)"
                  id="g473"><rect
                    x="-401"
                    y="-334"
                    width="720"
                    height="720"
                    fill="#ffffff"
                    fill-opacity="1"
                    id="rect473" /></g></g><g
                id="compositing-group-15"
                transform="translate(401,334)"><rect
                  x="-401"
                  y="-334"
                  width="720"
                  height="720"
                  fill="#000000"
                  fill-opacity="0"
                  id="rect611" /><clipPath
                  id="clip-24"><path
                    clip-rule="nonzero"
                    d="M 0.667969,0.15625 H 134.66797 V 20 H 0.667969 Z m 0,0"
                    id="path611" /></clipPath><g
                  clip-path="url(#clip-24)"
                  id="g612"><rect
                    x="-401"
                    y="-334"
                    width="720"
                    height="720"
                    fill="#ffffff"
                    fill-opacity="1"
                    id="rect612" /></g></g><g
                id="compositing-group-20"
                transform="translate(185,544)"><rect
                  x="-185"
                  y="-544"
                  width="720"
                  height="720"
                  fill="#000000"
                  fill-opacity="0"
                  id="rect753" /><clipPath
                  id="clip-31"><path
                    clip-rule="nonzero"
                    d="M 0.582031,1 H 134.58203 V 21.179688 H 0.582031 Z m 0,0"
                    id="path753" /></clipPath><g
                  clip-path="url(#clip-31)"
                  id="g754"><rect
                    x="-185"
                    y="-544"
                    width="720"
                    height="720"
                    fill="#ffffff"
                    fill-opacity="1"
                    id="rect754" /></g></g><g
                id="compositing-group-25"
                transform="translate(185,544)"><rect
                  x="-185"
                  y="-544"
                  width="720"
                  height="720"
                  fill="#000000"
                  fill-opacity="0"
                  id="rect892" /><clipPath
                  id="clip-37"><path
                    clip-rule="nonzero"
                    d="M 0.582031,0.820312 H 134.58203 V 21 H 0.582031 Z m 0,0"
                    id="path892" /></clipPath><g
                  clip-path="url(#clip-37)"
                  id="g893"><rect
                    x="-185"
                    y="-544"
                    width="720"
                    height="720"
                    fill="#ffffff"
                    fill-opacity="1"
                    id="rect893" /></g></g><g
                id="compositing-group-30"
                transform="translate(400,544)"><rect
                  x="-400"
                  y="-544"
                  width="720"
                  height="720"
                  fill="#000000"
                  fill-opacity="0"
                  id="rect1034" /><clipPath
                  id="clip-44"><path
                    clip-rule="nonzero"
                    d="M 0.417969,1 H 134.41797 V 21.179688 H 0.417969 Z m 0,0"
                    id="path1034" /></clipPath><g
                  clip-path="url(#clip-44)"
                  id="g1035"><rect
                    x="-400"
                    y="-544"
                    width="720"
                    height="720"
                    fill="#ffffff"
                    fill-opacity="1"
                    id="rect1035" /></g></g><g
                id="compositing-group-35"
                transform="translate(400,544)"><rect
                  x="-400"
                  y="-544"
                  width="720"
                  height="720"
                  fill="#000000"
                  fill-opacity="0"
                  id="rect1173" /><clipPath
                  id="clip-50"><path
                    clip-rule="nonzero"
                    d="M 0.417969,0.820312 H 134.41797 V 21 H 0.417969 Z m 0,0"
                    id="path1173" /></clipPath><g
                  clip-path="url(#clip-50)"
                  id="g1174"><rect
                    x="-400"
                    y="-544"
                    width="720"
                    height="720"
                    fill="#ffffff"
                    fill-opacity="1"
                    id="rect1174" /></g></g><marker
                style="overflow:visible"
                id="Dot"
                refX="0"
                refY="0"
                orient="auto"
                markerWidth="0.60000002"
                markerHeight="0.60000002"
                viewBox="0 0 1 1"
                preserveAspectRatio="xMidYMid"><path
                  transform="scale(0.5)"
                  style="fill:context-stroke;fill-rule:evenodd;stroke:none"
                  d="M 5,0 C 5,2.76 2.76,5 0,5 -2.76,5 -5,2.76 -5,0 c 0,-2.76 2.3,-5 5,-5 2.76,0 5,2.24 5,5 z"
                  id="path30" /></marker></defs>
                                <g
              id="g1"><rect
                x="50"
                y="400"
                width="700"
                height="150"
                rx="20"
                fill="#2a2a2a"
                stroke="#444444"
                stroke-width="2"
                id="rect1" /><rect
                x="100"
                y="80"
                width="600"
                height="380"
                rx="15"
                fill="#1a1a1a"
                stroke="#444444"
                stroke-width="3"
                id="rect2" /><rect
                x="120"
                y="100"
                width="560"
                height="340"
                rx="10"
                fill="#000000"
                id="rect3" /><rect
                x="125"
                y="105"
                width="550"
                height="330"
                rx="8"
                fill="url(#screenGradient)"
                opacity="0.1"
                id="rect4"
                style="fill:url(#screenGradient)" /><rect
                x="150"
                y="480"
                width="500"
                height="60"
                rx="8"
                fill="#333333"
                stroke="#555555"
                stroke-width="1"
                id="rect5" /><g
                fill="#444444"
                stroke="#666666"
                stroke-width="0.5"
                id="g18">
                <rect x="160" y="490" width="30" height="8" rx="2" id="rect6" />
                <rect x="195" y="490" width="30" height="8" rx="2" id="rect7" />
                <rect
                  x="230"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect8" /><rect
                  x="265"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect9" /><rect
                  x="300"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect10" /><rect
                  x="335"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect11" /><rect
                  x="370"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect12" /><rect
                  x="405"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect13" /><rect
                  x="440"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect14" /><rect
                  x="475"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect15" /><rect
                  x="510"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect16" /><rect
                  x="545"
                  y="490"
                  width="30"
                  height="8"
                  rx="2"
                  id="rect17" /><rect
                  x="580"
                  y="490"
                  width="60"
                  height="8"
                  rx="2"
                  id="rect18" /></g><rect
                x="350"
                y="555"
                width="100"
                height="60"
                rx="8"
                fill="#222222"
                stroke="#444444"
                stroke-width="1"
                id="rect19" /><circle
                cx="400"
                cy="470"
                r="4"
                fill="#a9b650"
                opacity="0.8"
                id="circle19" /><g
                id="g22"
                transform="matrix(0.345851,0,0,0.32272252,386.56959,269.33183)"><g
                  id="layer1"
                  transform="matrix(3.7795276,0,0,3.7795276,-1088.4868,-572.07151)"><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,225.93854 h -19.78625 l -12.85792,-13.31659 -87.61835,0.22443 -12.63346,13.09216 h -23.67353"
                    id="path21-2-7" /><path
                    style="fill:#a9b650;fill-opacity:1;stroke-width:0.0801625"
                    d="m 344.20214,210.1174 c -0.12947,0.002 -0.2799,0.003 -0.33413,0.003 -0.0541,1e-4 -0.14843,7.5e-4 -0.20941,0.002 -0.061,7.5e-4 -0.19652,0.002 -0.30125,0.004 l -0.1904,0.002 -0.10578,0.14881 c -0.0581,0.0817 -0.88268,1.24439 -1.83206,2.5834 l -1.72615,2.43459 -0.13837,0.002 c -0.0761,0.002 -0.35341,-0.002 -0.61621,-0.009 -0.2628,-0.007 -0.55129,-0.0116 -0.64113,-0.0125 -0.16522,-7.4e-4 -0.72482,-0.0128 -1.23799,-0.0242 -0.32314,-0.007 -0.51329,0.0208 -0.7646,0.11225 -0.47453,0.17266 -0.8643,0.47017 -1.16949,0.8926 -0.12322,0.17049 -0.13876,0.20169 -0.15874,0.31647 -0.0281,0.16175 -0.004,0.29972 0.072,0.43385 0.0934,0.16223 0.2308,0.28301 0.61303,0.53887 0.28537,0.19102 0.39888,0.25528 0.6678,0.37827 0.50713,0.23184 0.51509,0.23382 0.95194,0.23431 0.12151,-7.5e-4 0.27901,-5e-4 0.35015,0.002 0.071,-1.4e-4 0.20077,4.7e-4 0.28818,0.002 0.0874,-3.4e-4 0.2501,6.2e-4 0.36166,0.003 0.11146,0.002 0.25533,0.003 0.31955,0.002 0.22118,2.3e-4 0.99794,0.004 1.05254,0.005 0.03,3.8e-4 0.12726,0.002 0.21608,0.002 0.13684,0.002 0.16501,0.007 0.18527,0.0459 0.0131,0.0247 0.10163,0.16631 0.19646,0.31477 0.20422,0.31939 0.53566,0.84192 0.68132,1.07414 0.17785,0.28352 0.46223,0.73452 0.67309,1.06741 0.18763,0.29621 0.46878,0.74139 0.98596,1.56115 0.11453,0.18141 0.26924,0.4251 0.34399,0.54154 0.0748,0.11646 0.14636,0.22979 0.15939,0.25189 0.14956,0.25587 0.16422,0.27504 0.21014,0.27469 0.0253,-1.4e-4 0.32961,-0.003 0.67632,-0.005 0.34666,-0.003 0.65781,-0.007 0.69138,-0.009 l 0.0612,-0.003 -0.0276,-0.14443 c -0.0153,-0.0795 -0.0521,-0.24644 -0.0823,-0.37115 l -0.0546,-0.22675 -0.21105,-0.15025 -0.21105,-0.15026 -0.0373,-0.17554 c -0.0997,-0.46625 -0.13486,-0.6217 -0.14257,-0.62713 -0.005,-0.002 -0.0166,-0.0498 -0.0268,-0.10348 -0.0274,-0.14443 -0.0617,-0.29855 -0.25389,-1.1387 -0.0958,-0.41934 -0.21083,-0.9254 -0.25547,-1.12459 -0.0446,-0.1992 -0.11239,-0.49187 -0.15049,-0.65042 -0.0381,-0.15847 -0.0718,-0.32005 -0.0749,-0.35897 l -0.006,-0.0707 0.37292,-0.005 c 0.20511,-0.002 0.62838,-0.0108 0.94056,-0.0185 0.31216,-0.007 0.68026,-0.0152 0.81797,-0.017 0.13775,-0.002 0.43426,-0.007 0.65901,-0.0149 l 0.40861,-0.0103 0.40844,0.36056 c 0.22465,0.19833 0.57982,0.51129 0.78927,0.69548 l 0.38085,0.33493 0.0845,-0.002 c 0.0935,-0.002 0.52658,-0.01 0.99424,-0.0191 0.16681,-0.002 0.3713,-0.005 0.45434,-0.009 0.0831,-0.002 0.15486,-0.009 0.15954,-0.0148 0.01,-0.0129 -0.0757,-0.17064 -0.26405,-0.4885 -0.096,-0.16186 -0.43819,-0.74762 -0.83392,-1.42719 -0.0321,-0.0553 -0.13818,-0.23602 -0.23535,-0.40145 -0.0971,-0.16543 -0.17923,-0.31562 -0.18231,-0.33376 -0.002,-0.0191 0.10119,-0.21006 0.24717,-0.45176 0.13904,-0.23032 0.27453,-0.45601 0.30114,-0.50149 0.0266,-0.0455 0.11995,-0.20162 0.20738,-0.34698 0.0874,-0.14537 0.17003,-0.28569 0.18347,-0.31191 0.0141,-0.0263 0.11807,-0.20031 0.23238,-0.38679 0.11442,-0.18652 0.20886,-0.35296 0.20995,-0.36988 4.6e-4,-0.0219 -0.0467,-0.0286 -0.16761,-0.0234 -0.0933,0.004 -0.17646,0.009 -0.18491,0.0105 -0.007,7.4e-4 -0.0589,0.003 -0.11222,0.004 -0.0533,0.002 -0.11446,0.004 -0.13592,0.007 -0.0214,0.002 -0.13029,0.0117 -0.2418,0.0173 -0.11135,0.007 -0.22103,0.0128 -0.24346,0.0132 -0.0224,7.5e-4 -0.0958,0.007 -0.16303,0.0102 -0.0674,0.003 -0.14069,0.007 -0.16324,0.0102 -0.0227,7.5e-4 -0.12619,0.007 -0.23029,0.0129 l -0.18936,0.0106 -0.2667,0.27642 c -0.1467,0.15203 -0.413,0.42848 -0.59176,0.61432 l -0.32502,0.33793 -0.35527,-0.0307 c -0.19541,-0.0168 -0.39496,-0.0325 -0.44345,-0.0347 -0.0486,-0.002 -0.36487,-0.0264 -0.70306,-0.0537 -0.33815,-0.0273 -0.63304,-0.0507 -0.6553,-0.052 -0.0224,-4.8e-4 -0.072,-0.006 -0.11067,-0.01 -0.0386,-0.002 -0.31266,-0.0259 -0.60911,-0.0492 -0.29645,-0.0232 -0.54217,-0.0498 -0.54602,-0.0588 -0.002,-0.01 0.0102,-0.0777 0.0315,-0.15249 0.021,-0.0748 0.0447,-0.16667 0.0522,-0.20427 0.0136,-0.0671 0.0427,-0.18303 0.20071,-0.79376 0.0438,-0.16918 0.10782,-0.42215 0.14222,-0.56219 0.0343,-0.14012 0.0929,-0.3736 0.12985,-0.519 0.0369,-0.14539 0.0996,-0.39352 0.13917,-0.5513 0.0396,-0.15788 0.0912,-0.36117 0.11445,-0.45189 0.0234,-0.0908 0.0746,-0.29358 0.1143,-0.45081 0.0396,-0.15722 0.0779,-0.29447 0.0855,-0.30493 0.007,-0.0113 0.13008,-0.0924 0.27258,-0.18209 l 0.25908,-0.16308 0.0123,-0.40358 c 0.007,-0.22197 0.006,-0.40781 9e-5,-0.413 -0.007,-0.007 -0.11924,-0.009 -0.2488,-0.007 z"
                    id="path208-0" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-start:url(#Dot)"
                    d="m 443.87083,159.49348 13.75407,-13.75407 h 51.01854"
                    id="path20" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,150.58585 h -48.27637 l -16.00985,16.00983 h -62.6927"
                    id="path21" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,155.67308 h -45.2839 l -16.4587,16.45871 h -57.45583"
                    id="path22" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,161.33923 h -33.01467 v 16.15945 h -65.17213"
                    id="path23-4" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,164.63097 h -28.40571 v 16.15945 h -51.22764"
                    id="path24" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,168.82046 h -23.17863 v 16.4587 h -63.93596"
                    id="path25" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,177.27781 h -12.76638 v 15.8602 H 387.8481"
                    id="path26" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,181.92596 h -7.83855 v 15.56096 h -66.71296"
                    id="path27" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1"
                    d="m 508.64344,216.66114 h -15.89939 l -13.31659,-13.31658 -94.95702,0.22443 -13.09214,13.09215 h -28.78043"
                    id="path28" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,220.89316 h -17.49291 l -13.31658,-13.31659 -91.28769,0.22444 -13.09213,13.09215 h -13.98011"
                    id="path21-2" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,230.98391 h -21.62093 l -13.31658,-13.31658 -83.03166,0.22443 -13.09214,13.09215 h -34.1188"
                    id="path21-2-7-6" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,239.06563 h -16.85521 v 23.80011 h -10.1549 l -20.67755,-20.67757 h -40.04771"
                    id="path29" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,243.65234 h -12.74772 v 23.80011 h -17.0349 l -20.65704,-20.67757 h -78.12226"
                    id="path22-6" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.62971,248.23905 h -9.04414 v 23.8001 h -23.93542 l -20.67756,-20.67757 h -62.34033"
                    id="path22-6-9" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.65083,278.46054 h -37.08766 l -20.2394,-20.67757 h -36.80329"
                    id="path22-6-9-2-7" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="M 508.64344,283.50592 H 468.33198 L 447.65442,262.82834 H 387.84426"
                    id="path22-6-9-2-7-2" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 461.53159,286.76925 -17.51948,-17.881 h -43.95466"
                    id="path31" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="M 445.58362,286.76925 V 275.09578 H 375.59557"
                    id="path32" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 439.4858,286.76925 0.0478,-6.52369 h -73.3561"
                    id="path33-5" /><path
                    style="fill:none;fill-opacity:1;stroke:#a9b650;stroke-width:1.18315;stroke-dasharray:none;stroke-opacity:1;marker-end:url(#Dot)"
                    d="m 508.64344,172.94849 h -18.13327 v 16.4587 h -82.6488"
                    id="path18-9" /><g
                    id="g111-4"
                    transform="matrix(1.3391001,0,0,1.3391001,-144.79202,-40.367543)"
                    style="fill:#a9b650;fill-opacity:1"><path
                      fill-rule="nonzero"
                      fill="#000000"
                      fill-opacity="1"
                      d="m 409.65538,203.61926 c -0.12402,1.06798 -0.51952,1.89067 -1.18373,2.47083 -0.66284,0.57877 -1.5434,0.86954 -2.6417,0.86954 -1.192,0 -2.14974,-0.42719 -2.86908,-1.2802 -0.71933,-0.85438 -1.07762,-1.99815 -1.07762,-3.42994 v -0.96876 c 0,-0.93706 0.16674,-1.76388 0.5016,-2.47495 0.33625,-0.71245 0.81167,-1.25815 1.4249,-1.63849 0.6146,-0.38171 1.32705,-0.57189 2.13596,-0.57189 1.07349,0 1.93338,0.30042 2.57968,0.89849 0.64768,0.59531 1.02526,1.42351 1.12999,2.48322 h -1.33669 c -0.11576,-0.80477 -0.36794,-1.38768 -0.75379,-1.74735 -0.38447,-0.36105 -0.92329,-0.54157 -1.61919,-0.54157 -0.85025,0 -1.51723,0.31419 -1.99954,0.94396 -0.48369,0.62838 -0.72485,1.52273 -0.72485,2.68166 v 0.97702 c 0,1.09555 0.22876,1.96784 0.68764,2.61552 0.45751,0.64492 1.0983,0.96876 1.92099,0.96876 0.73863,0 1.30638,-0.16674 1.70188,-0.5016 0.39412,-0.33624 0.65594,-0.92053 0.78686,-1.75425 z m 6.9591,2.46256 c -0.49885,0.58566 -1.23197,0.87781 -2.19797,0.87781 -0.80202,0 -1.41112,-0.23289 -1.83004,-0.69591 -0.41754,-0.46302 -0.62701,-1.15066 -0.62976,-2.06155 v -4.87963 h 1.2802 v 4.84656 c 0,1.13688 0.46164,1.70601 1.3863,1.70601 0.97979,0 1.6316,-0.36518 1.95406,-1.09691 v -5.45566 h 1.28433 v 7.49928 h -1.21819 z m 7.01421,0.87781 c -1.01561,0 -1.84243,-0.33211 -2.48047,-0.9977 -0.63665,-0.66835 -0.95635,-1.56132 -0.95635,-2.68166 v -0.23703 c 0,-0.74138 0.14193,-1.40422 0.42718,-1.98988 0.28388,-0.58567 0.68076,-1.0418 1.19201,-1.36977 0.51125,-0.33211 1.06385,-0.49747 1.66053,-0.49747 0.97428,0 1.7322,0.32246 2.27377,0.96463 0.54019,0.64078 0.81166,1.55855 0.81166,2.75607 v 0.53468 h -5.08496 c 0.0179,0.74 0.23565,1.3367 0.65043,1.79145 0.41342,0.45613 0.93983,0.6835 1.57648,0.6835 0.45338,0 0.83647,-0.0923 1.15204,-0.27836 0.31419,-0.18328 0.58842,-0.42995 0.82407,-0.73587 l 0.78135,0.61185 c -0.62701,0.96324 -1.56821,1.44556 -2.82774,1.44556 z m -0.1571,-6.72207 c -0.51951,0 -0.9536,0.18879 -1.30362,0.56637 -0.3514,0.37621 -0.56775,0.90262 -0.65043,1.58199 h 3.75515 v -0.0951 c -0.0358,-0.65181 -0.21084,-1.15617 -0.52503,-1.51584 -0.31557,-0.35691 -0.74138,-0.53743 -1.27607,-0.53743 z m 8.90489,0.23565 c -0.19293,-0.0303 -0.40377,-0.0455 -0.62839,-0.0455 -0.84336,0 -1.41386,0.35829 -1.71428,1.07211 v 5.32198 h -1.28433 v -7.49928 h 1.25126 l 0.0207,0.86954 c 0.41892,-0.6711 1.01561,-1.00597 1.78869,-1.00597 0.24805,0 0.43684,0.0317 0.56638,0.0951 z m 1.44556,2.53696 c 0,-1.15066 0.27147,-2.07395 0.8158,-2.77261 0.54708,-0.70004 1.2609,-1.05144 2.14423,-1.05144 0.87781,0 1.57372,0.30179 2.08772,0.90261 v -3.91087 h 1.28296 v 10.64396 h -1.1796 l -0.062,-0.80201 c -0.51402,0.627 -1.22784,0.93982 -2.14148,0.93982 -0.86954,0 -1.57923,-0.35416 -2.12769,-1.06385 -0.54708,-0.71244 -0.81993,-1.63986 -0.81993,-2.78639 z m 1.28433,0.14469 c 0,0.85163 0.17364,1.51722 0.52503,1.99954 0.35003,0.47956 0.83647,0.72071 1.45797,0.72071 0.81166,0 1.40422,-0.36518 1.78042,-1.09691 v -3.44372 c -0.38447,-0.70556 -0.97289,-1.05971 -1.76802,-1.05971 -0.62976,0 -1.12034,0.24391 -1.47037,0.72898 -0.35139,0.48231 -0.52503,1.20027 -0.52503,2.15111 z m 0,0"
                      id="path179-9-5"
                      style="fill:#a9b650;fill-opacity:1;stroke-width:0.352778" /><path
                      fill-rule="nonzero"
                      fill="#000000"
                      fill-opacity="1"
                      d="m 450.415,202.53475 c 0,0.8723 -0.15572,1.64538 -0.46716,2.31786 -0.31281,0.66973 -0.75792,1.18925 -1.33807,1.5558 -0.5774,0.36794 -1.24024,0.55122 -1.99127,0.55122 -1.13688,0 -2.05741,-0.40377 -2.76159,-1.21268 -0.70142,-0.8089 -1.05144,-1.89893 -1.05144,-3.27008 v -1.45245 c 0,-0.86954 0.15434,-1.63987 0.46716,-2.31372 0.31143,-0.67662 0.75792,-1.19752 1.33807,-1.56546 0.57878,-0.36518 1.24299,-0.54984 1.99127,-0.54984 0.75378,0 1.42075,0.18466 1.99953,0.54984 0.58015,0.36794 1.02802,0.88884 1.34221,1.56546 0.31419,0.67661 0.47129,1.44693 0.47129,2.31372 z m -0.37207,-1.52687 c 0,-1.21956 -0.31006,-2.19797 -0.93156,-2.93522 -0.61874,-0.73587 -1.4552,-1.10518 -2.5094,-1.10518 -1.0418,0 -1.87,0.36793 -2.48874,1.10105 -0.61874,0.73174 -0.92742,1.72806 -0.92742,2.98896 v 1.47726 c 0,0.80339 0.13918,1.51308 0.41892,2.13182 0.27837,0.61461 0.67524,1.09003 1.19201,1.42352 0.51814,0.33073 1.12585,0.49609 1.82176,0.49609 1.05145,0 1.88516,-0.36656 2.50114,-1.10105 0.61461,-0.73312 0.92329,-1.73633 0.92329,-3.00826 z m 9.43818,3.39687 c 0,-0.42995 -0.1006,-0.79375 -0.30179,-1.09141 -0.20257,-0.29903 -0.51952,-0.56086 -0.95222,-0.791 -0.43133,-0.22875 -1.08452,-0.46302 -1.9582,-0.70417 -0.87367,-0.23978 -1.52686,-0.48094 -1.9637,-0.72347 -0.43684,-0.24529 -0.75654,-0.53055 -0.96049,-0.85301 -0.20533,-0.32521 -0.30593,-0.71795 -0.30593,-1.1796 0,-0.73311 0.30868,-1.32842 0.92742,-1.78318 0.6215,-0.45613 1.42903,-0.68351 2.42259,-0.68351 0.64768,0 1.22921,0.12679 1.74322,0.37621 0.51539,0.25218 0.91502,0.60496 1.19614,1.05971 0.28112,0.45613 0.42168,0.97152 0.42168,1.54341 h -0.37207 c 0,-0.75242 -0.27699,-1.37391 -0.83234,-1.86587 -0.55535,-0.49334 -1.27468,-0.74138 -2.15663,-0.74138 -0.88607,0 -1.60541,0.19843 -2.15387,0.59255 -0.5457,0.3955 -0.81993,0.89022 -0.81993,1.48553 0,0.60771 0.23702,1.09554 0.71244,1.46485 0.4768,0.37069 1.26366,0.69729 2.35645,0.98116 1.09554,0.28526 1.89756,0.61323 2.41019,0.9853 0.64492,0.47818 0.96876,1.11483 0.96876,1.91134 0,0.50849 -0.1447,0.95911 -0.43133,1.35048 -0.28801,0.3886 -0.69453,0.68902 -1.22094,0.90123 -0.52503,0.21222 -1.11621,0.31971 -1.77216,0.31971 -0.73174,0 -1.38906,-0.12127 -1.97197,-0.36105 -0.58153,-0.24115 -1.01975,-0.58704 -1.31189,-1.0349 -0.29353,-0.44786 -0.43822,-0.97841 -0.43822,-1.58888 h 0.37207 c 0,0.8282 0.30868,1.47174 0.92742,1.92925 0.6215,0.45475 1.42903,0.68213 2.42259,0.68213 0.88195,0 1.61093,-0.19981 2.18144,-0.60358 0.57326,-0.40652 0.86127,-0.93155 0.86127,-1.57785 z m 0,0"
                      id="path180-1-0"
                      style="fill:#a9b650;fill-opacity:1;stroke-width:0.352778" /></g></g></g>
                      <foreignObject x="380" y="325" width="550" height="330">
                        <div class="spinner-container">
                          <div class="sp-border" id="border" aria-label="Cargando">
                          </div>
                        </div>
                      </foreignObject>
                    <g
                id="g23"
                transform="matrix(0.62773995,0,0,0.62800911,345.64901,186.77505)"><path
                  style="fill:#a8b54f;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 173.16405,86.542993 c 0,47.796877 -38.76562,86.546877 -86.582031,86.546877 -47.81641,0 -86.582030270149,-38.75 -86.582030270149,-86.546877 C -1.1270149e-5,38.746123 38.765609,2.3576696e-5 86.582019,2.3576696e-5 134.39843,2.3576696e-5 173.16405,38.746123 173.16405,86.542993"
                  id="path153" /><path
                  style="fill:#eeebbd;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 53.499989,119.93752 c 0,3.15625 -2.55859,5.71875 -5.71875,5.71875 -3.16016,0 -5.72266,-2.5625 -5.72266,-5.71875 0,-3.16015 2.5625,-5.72265 5.72266,-5.72265 3.16016,0 5.71875,2.5625 5.71875,5.72265"
                  id="path154" /><path
                  style="fill:#e6f0c2;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 30.613269,68.460963 c -11.44141,0 -11.44141,11.44141 -11.44141,11.44141 v 22.874997 c 0,0 0,11.4414 11.44141,11.4414 z m 0,0"
                  id="path155" /><path
                  style="fill:#fdfdff;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 30.613269,68.460963 h 92.386721 c 2.46094,0 4.82812,0.96484 6.58984,2.6875 l 4.01563,3.92969 0.78515,-6.23438 c 0.375,-5.2539 3.94141,-9.73437 8.98047,-11.27734 l 10.38281,-3.17578 c 1.96485,-0.60156 4.13672,-0.008 5.42969,1.58984 0.30469,0.38281 0.51953,0.7461 0.54297,1.04297 5.12891,64.390627 -83.335941,57.195307 -129.113281,57.195307 z m 0,0"
                  id="path156" /><path
                  style="fill:#e6f0c2;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 99.277329,68.460963 c -8.89453,-1.09766 -12.0039,-11.4375 -34.33203,-11.4375 -22.32812,0 -22.88672,11.4375 -22.88672,11.4375 z m 0,0"
                  id="path157" /><path
                  style="fill:#d9e3b8;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 16.195299,85.511743 h 2.97656 v 11.65625 h -2.97656 z m 0,0"
                  id="path158" /><path
                  style="fill:#eeebbd;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 14.710929,114.21487 c 0.82031,0 1.48828,-0.66407 1.48828,-1.48438 V 69.949243 c 0,-0.82031 -0.66797,-1.48828 -1.48828,-1.48828 -0.82032,0 -1.48828,0.66797 -1.48828,1.48828 v 42.781247 c 0,0.82031 0.66796,1.48438 1.48828,1.48438"
                  id="path159" /><path
                  style="fill:#eeebbd;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 93.554679,102.77737 h -45.77344 c -3.16016,0 -5.72266,-2.5586 -5.72266,-5.718747 0,-3.16016 2.5625,-5.71875 5.72266,-5.71875 h 45.77344 c 3.16015,0 5.72265,2.55859 5.72265,5.71875 0,3.160147 -2.5625,5.718747 -5.72265,5.718747"
                  id="path160" /><path
                  style="fill:#e6f0c2;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 13.222649,69.949243 h 2.97265 v 3.42969 h -2.97265 z m 0,0"
                  id="path161" /><path
                  style="fill:#e6f0c2;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 13.222649,109.3008 h 2.97265 v 3.42969 h -2.97265 z m 0,0"
                  id="path162" /><path
                  id="path154-6"
                  style="opacity:0.1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none"
                  d="m 155.26757,54.161643 c -0.50012,0.004 -1.00439,0.0796 -1.49561,0.22999 l -0.55078,0.16845 h 4.03857 c -0.62878,-0.25818 -1.30402,-0.40391 -1.99218,-0.39844 z M 13.240709,91.339383 v 17.961907 3.43067 c 0,0.82031 0.66797,1.48388 1.48828,1.48388 0.82032,0 1.48828,-0.66357 1.48828,-1.48388 V 97.169463 h 2.97217 v 5.608877 c 0,0 4.9e-4,11.4419 11.4419,11.4419 4.84023,0 10.23065,0.0787 15.86425,0.14648 -2.53165,0.59052 -4.41943,2.86096 -4.41943,5.57227 0,3.15625 2.56299,5.71875 5.72315,5.71875 3.16016,0 5.71875,-2.5625 5.71875,-5.71875 0,-2.66152 -1.81529,-4.89871 -4.27588,-5.53858 34.92821,0.37191 80.598601,-0.29703 100.596681,-23.061027 z" /></g></g>
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
