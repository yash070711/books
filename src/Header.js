import React from "react";
import "./Header.css";



function Header() {  
 

  return (
    <div className="header">
      
        <img
          className="header__logo"
          src="https://www.vegamoontech.com/wp-content/uploads/2022/11/astrology-website-zodiac-chakra.png"/>
           
      <div className="header__option1">
            <span className="header__optionLineOne"><b>Home</b></span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Gallery</b></span>
          </div>
         
          <div className="header__option">
            <span className="header__optionLineOne"><b>About</b></span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Pooja</b></span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Rashifal</b></span>
          </div>
          <div className="header__option">
            <span className="header__optionLineOne"><b>Contact</b></span>
          </div>
         
          
      
          
      
    </div>
  );
}

export default Header;