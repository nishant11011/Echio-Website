import React, { useEffect, useState } from 'react';
export default function PrimaryButton(props) {
   
      const isNameAgencyLogin=props.buttonName==="Agency Login  ";
      const [viewBox, setViewBox] = useState('2 1.5 20 10');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setViewBox('2 1.5 20 10');
      } else {
        setViewBox('-3.5 -1 20 10');
      }
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
      return (
      <button className={isNameAgencyLogin ? "primaryButton agencyLogin" : "primaryButton"}>
        <a className="hoverPrimaryButtonText" href="#" target="_blank">
          {props.buttonName}
        </a>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="0.15rem"
          height="0.08rem"
          fill="currentColor"
          class="fa-solid fa-arrow-up-right"
          viewBox={viewBox}
          className="buttonSVG"
        >
          <path
            fill-rule="evenodd"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
          />
        </svg>
      </button>
    );
    
  }
  