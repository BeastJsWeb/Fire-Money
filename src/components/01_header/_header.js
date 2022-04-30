import React from "react";
import GlobalBthLogo from "../00_app/GlobalbtnLogo";
import GlobalNavBtns from "../00_app/globalNavBtns";
import './_header'

const navBtns = ['Почему мы?', 'О сервисе', 'Вопросы-ответы']

export default function Header() {
  return (
    <header>
      <div>
        <input id="toggle" type="checkbox"/>
       
        <label className="toggle-container" htmlFor="toggle">
          <span className="button button-toggle"></span>
        </label>

        <nav className="header__menu">
          <GlobalBthLogo />
          <GlobalNavBtns data={navBtns} className='header__navBtn' />
          <button id="btn__logIn">
            ВХОД В <span>&#160; ЛИЧНЫЙ &#160;</span>КАБИНЕТ
          </button>
        </nav>
      </div>
    </header>
  )
}