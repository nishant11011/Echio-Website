import StayInTouch from "../ButtonComponents/StayInTouch";

export default function Footer() {
  return (
    <div id="footer">
      <div class="footer-top">
        <div class="footer-top-left">
          <img class="footer-logo" src="../images/logo-lastpage.png" alt="logo" />
        </div>
        <div id="footer-top-right-box">
          <StayInTouch />
        </div>
      </div>

      <div class="footer-middle">
        <div class="disclaimer">
          <div class="footer-headings">
            <h5>Disclaimer</h5>
          </div>
          <div class="disclaimer-para">
            <p class="disclaimer-paratext">
              Echiofy Private Limited is an unlisted private company
              incorporated on 25 March 2022. It is classified as a private
              limited company and is located in Delhi. The Corporate
              Identification Number (CIN) of Echiofy Private Limited is
              U72900DL2022PTC395579.
            </p>
            <p class="disclaimer-paratext">
              The registered office of Echiofy Private Limited is at 303, Tower
              B, Logix Technova, Sector 132, Noida- 201301.
            </p>
          </div>
        </div>

        <div class="second-div">
          <div class="company">
            <div class="footer-headings">
              <h5>Company</h5>
            </div>
            <div class="company-list">
              <ul className="footerList">
                <li>Blogs</li>
                <li>Team</li>
                <li>About</li>
                <li>Partner with Us</li>
                <li>Our Case Study</li>
                <li>Our Journey</li>
              </ul>
            </div>
          </div>

          <div class="features">
            <div class="footer-headings">
              <h5>Features</h5>
            </div>
            <div class="features-list">
              <ul className="footerList">
                <li>Brands</li>
                <li>Influencers</li>
                <li>Studio</li>
                <li>Agency</li>
                <li>Our Services</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="third-div">
          <div class="policy">
            <div class="footer-headings">
              <h5>Policy</h5>
            </div>
            <div class="policy-list">
              <ul className="footerList">
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>

          <div class="contact">
            <div class="footer-headings">
              <h5>Contact Us</h5>
            </div>
            <div class="contact-list">
              <ul className="footerList">
                <li>Call Us</li>
                <li>Email Us</li>
                <li>Bangalore, India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-left">
          <p id="footer-copyright">
            201301. © Copyright 2024 Echiofy Private Limited. All Rights
            Reserved.
          </p>
        </div>

        <div class="footer-bottom-right">
          <div class="follow-top">Follow Us On</div>

          <div class="follow-bottom">
            <div className="socialmediaicon">
              <a href="https://your-link-here.com" target="_blank">
                <svg
                  className="socialmedia"
                  xmlns="http://www.w3.org/2000/svg"
                  height="100%"
                  style={{
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    strokeLinejoin: "round",
                    strokeMiterlimit: 2,
                  }}
                  viewBox="0 0 512 512"
                  width="100%"
                >
                  <g>
                    <path
                      d="M512,256c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
                      style={{ fill: "#1877f2" }}
                    />
                    <path
                      d="M355.65,330l11.35,-74l-71,0l0,-48.022c0,-20.245 9.917,-39.978 41.719,-39.978l32.281,0l0,-63c0,0 -29.297,-5 -57.305,-5c-58.476,0 -96.695,35.44 -96.695,99.6l0,56.4l-65,0l0,74l65,0l0,178.89c13.033,2.045 26.392,3.11 40,3.11c13.608,0 26.966,-1.065 40,-3.11l0,-178.89l59.65,0Z"
                      style={{ fill: "#fff" }}
                    />
                  </g>
                </svg>
              </a>
            </div>

            <div className="socialmediaicon">
              <a href="https://www.instagram.com/echio.in?igshid=NjIwNzIyMDk2Mg%3D%3D" target="_blank">
                <svg
                  className="socialmedia"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <linearGradient
                    id="SVGID_1_"
                    x1="16"
                    x2="16"
                    y1="0"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" style={{ stopColor: "#FEC053" }} />
                    <stop offset="0.327" style={{ stopColor: "#F2203E" }} />
                    <stop offset="0.648" style={{ stopColor: "#B729A8" }} />
                    <stop offset="1" style={{ stopColor: "#5342D6" }} />
                  </linearGradient>
                  <circle cx="16" cy="16" r="16" fill="url(#SVGID_1_)" />
                  <path
                    fill="#FFFFFF"
                    d="M20.7,6h-9.5C8.3,6,6,8.4,6,11.4v9.2c0,2.9,2.3,5.3,5.3,5.4h9.5c2.9,0,5.3-2.4,5.3-5.4v-9.2C26,8.4,23.7,6,20.7,6z M24.2,20.5c0,2-1.6,3.7-3.7,3.7h-9.1c-2,0-3.7-1.7-3.6-3.7v-9c0-2,1.6-3.7,3.6-3.7h9.1c2,0,3.7,1.7,3.7,3.7V20.5z M16,10.9 c-2.8-0.1-5.2,2.2-5.2,5c-0.1,2.8,2.2,5.2,5,5.2s5.2-2.2,5.2-5l0-0.1C21.1,13.2,18.8,10.9,16,10.9z M16,19.3c-1.8,0-3.3-1.4-3.4-3.2 c0-1.8,1.4-3.3,3.2-3.4s3.3,1.4,3.4,3.2l0,0.1C19.3,17.8,17.8,19.3,16,19.3z M21.3,9.4c0.6,0,1.1,0.5,1.1,1.2s-0.5,1.2-1.1,1.2s-1.1-0.5-1.1-1.2 S20.7,9.4,21.3,9.4z"
                  />
                </svg>
              </a>
            </div>

            <div className="socialmediaicon">
              <a href="https://www.linkedin.com/company/echiofy-private-limited/" target="_blank">
                <svg
                  className="socialmedia"
                  xmlns="http://www.w3.org/2000/svg"
                  height="67px"
                  id="Layer_1"
                  style={{ enableBackground: "new 0 0 67 67" }}
                  version="1.1"
                  viewBox="0 0 67 67"
                  width="67px"
                >
                  <path
                    d="M50.837,48.137V36.425c0-6.275-3.35-9.195-7.816-9.195  c-3.604,0-5.219,1.983-6.119,3.374V27.71h-6.79c0.09,1.917,0,20.427,0,20.427h6.79V36.729c0-0.609,0.044-1.219,0.224-1.655  c0.49-1.22,1.607-2.483,3.482-2.483c2.458,0,3.44,1.873,3.44,4.618v10.929H50.837z M22.959,24.922c2.367,0,3.842-1.57,3.842-3.531  c-0.044-2.003-1.475-3.528-3.797-3.528s-3.841,1.524-3.841,3.528c0,1.961,1.474,3.531,3.753,3.531H22.959z M34,64  C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z M26.354,48.137V27.71h-6.789v20.427  H26.354z"
                    style={{
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      fill: "#007AB9",
                    }}
                  />
                </svg>
              </a>
            </div>
            <div class="socialmediaicon">
              <a href="" target="_blank">
                <svg
                  className="socialmedia"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  height="100px"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 100 100"
                  width="100px"
                  xmlSpace="preserve"
                >
                  <path
                    d="M50,3.84C24.506,3.84,3.84,24.506,3.84,50S24.506,96.16,50,96.16S96.16,75.494,96.16,50S75.494,3.84,50,3.84  z M73.887,37.989c-0.881,0.831-1.98,2.324-3.107,2.792c0.217,1.023-0.001,2.209-0.206,3.233c-0.234,1.167-0.046,2.441-0.404,3.569  c-0.38,1.198-0.492,2.439-0.893,3.634c-0.463,1.38-1.282,2.821-2.08,4.022c-0.69,1.039-1.165,2.147-1.829,3.177  c-0.765,1.185-1.819,1.93-2.713,2.928c-1.339,1.494-3.207,2.733-4.933,3.896c-1.428,0.961-3.094,1.379-4.659,2.091  c-0.613,0.279-1.356,0.51-2.026,0.683c-0.604,0.155-1.623,0.535-2.272,0.535l-1.168,0.201c-0.473,0.043-1.658-0.047-2.272-0.006  c-0.613,0.039-1.203-0.132-1.831-0.13c-1.539,0.003-3.081-0.047-4.596-0.246c-2.639-0.347-5.681-1.528-7.854-3.08  c-0.392-0.28-0.69-0.675-1.079-0.961c2.276,0.534,5.147,0.449,7.315-0.52c1.202-0.538,2.566-0.776,3.645-1.536  c0.829-0.586,1.799-1.216,2.643-1.691c-1.948-0.182-3.746-0.75-5.515-1.685c-0.872-0.46-3.177-3.003-3.167-4.94  c1.353-0.025,2.572,0.157,3.944-0.025c-0.968-0.257-1.773-0.679-2.659-1.269c-0.998-0.663-1.834-1.155-2.867-2.283  c-1.214-1.324-1.606-3.868-1.469-5.706c0.626,0.062,1.149,0.461,1.757,0.643c0.629,0.187,1.374,0.161,1.973,0.457  c-1.992-0.648-3.017-3.828-3.531-5.601c-0.599-2.063,0.672-6.736,0.714-6.857c1.553,1.18,2.691,2.959,4.253,4.035  c0.904,0.622,1.932,1.31,2.807,1.928c0.444,0.313,0.78,0.459,1.231,0.795c0.393,0.291,0.993,0.499,1.43,0.696  c1.125,0.506,2.528,1.059,3.764,1.285c1.451,0.266,2.986,0.324,4.349,0.794l1.623,0.194c-0.45-1.777-0.204-4.143,0.34-5.969  c0.629-2.11,2.779-3.912,4.707-4.822c1.798-0.849,4.762-1.229,6.636-0.506c0.959,0.37,1.951,0.807,2.842,1.303  c0.831,0.463,1.238,1.53,2.155,1.412c1.614-0.209,4.088-1.208,5.066-2.625c-0.04,2.497-1.512,3.967-3.374,5.482  c1.523-0.445,3.335-0.573,4.79-1.215C74.977,36.884,74.527,37.387,73.887,37.989z"
                    fill="#1DA1F2"
                  />
                </svg>
              </a>
            </div>

            <div className="socialmediaicon">
              <a href="" target="_blank">
                <svg
                  className="socialmedia"
                  xmlns="http://www.w3.org/2000/svg"
                  height="512px"
                  style={{ enableBackground: "new 0 0 512 512" }}
                  version="1.1"
                  viewBox="0 0 512 512"
                  width="512px"
                  xmlSpace="preserve"
                >
                  <g id="_x33_95-youtube">
                    <g>
                      <path
                        d="M476.387,144.888c-5.291-19.919-20.878-35.608-40.67-40.933C399.845,94.282,256,94.282,256,94.282    s-143.845,0-179.719,9.674c-19.791,5.325-35.378,21.013-40.668,40.933c-9.612,36.105-9.612,111.438-9.612,111.438    s0,75.334,9.612,111.438c5.29,19.92,20.877,34.955,40.668,40.281C112.155,417.719,256,417.719,256,417.719    s143.845,0,179.717-9.674c19.792-5.326,35.379-20.361,40.67-40.281c9.612-36.104,9.612-111.438,9.612-111.438    S485.999,180.994,476.387,144.888z"
                        style={{ fill: "#FF0000" }}
                      />
                      <polygon
                        points="208.954,324.723 208.954,187.93 329.18,256.328"
                        style={{ fill: "#FFFFFF" }}
                      />
                    </g>
                  </g>
                  <g id="Layer_1" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
