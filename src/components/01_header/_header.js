import React from "react";
import GlobalBthLogo from "../00_app/GlobalbtnLogo";
import GlobalNavBtns from "../00_app/globalNavBtns";
import './_header'
import { navBtns } from "../00_app/data/headerAndFooter";

export default function Header() {
  return (
    <header id="header">
      <div className="header__menu">
        <GlobalBthLogo ancor='#footer' />
        
        <nav>
          <input id="nav--onClick" type="checkbox" />

          <label htmlFor="nav--onClick" >
            <div id="nav__icon">
              <div className='icon__lines'></div>
            </div>
          </label>

          <GlobalNavBtns data={navBtns} className='nav__btns' />
        </nav>
      
        <button id="btn__logIn">
          ВХОД В&#160;<span>ЛИЧНЫЙ&#160;</span>КАБИНЕТ
        </button>
      </div>
    </header>
  )
}