import React, {useState} from 'react';
import PrimaryButton from "../ButtonComponents/PrimaryButton";

export default function NavBar() {
  const [toggle,setToggle] = useState(false);
  const handleToggle=()=>{
setToggle(!toggle);
  }

  return (
    <nav id="header" className={toggle?'navbar expanded':'navbar'}>
      <div class="innerHeader">
        <div id="logo">
          <img
            src="../images/Logo-frontpage.png"
            alt="logo"
            id="header-image"
          />
        </div>
        <div class='toggle-icon' onClick={handleToggle}> 

<a 
  href="#" class="" id="">
  <svg
    class="nav-toggle"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill="#ffffff"
      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
    />
  </svg>
</a>
</div>
        <div class="links" id="toggle-links">
          <div id="nav-links">
            <ul id="header-properties">
              <li class="link-list">
                <a class="hover-link-home" href="#">
                  Home
                </a>
              </li>
              <li class="link-list">
                <a class="hover-link" href="#brand">
                  Brand
                </a>
              </li>
              <li class="link-list">
                <a class="hover-link" href="#influencers">
                  Influencers
                </a>
              </li>
              <li class="link-list">
                <a class="hover-link" href="#ourServices">
                  Our Services
                </a>
              </li>
              <li class="link-list">
                <a class="hover-link" href="#studioContainer">
                  Studio
                </a>
              </li>
              <li class="link-list">
                <a class="hover-link" href="#statistics">
                  Agency
                </a>
              </li>
              {/*           
          <li class="link-list">
            <a class="hover-link" href="#">
              Team
            </a>
          </li> */}
              <li class="link-list">
                <a class="hover-link" href="#footer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div class="container-button firstpage-button">
            <PrimaryButton buttonName="Login Now  " />
          </div>
        </div>


      
            </div>
     
  
    </nav>
  );
}
