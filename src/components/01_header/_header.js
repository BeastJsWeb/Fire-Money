import React from "react";
import './_header'

const navBtns = ['Почему мы?', 'О сервисе', 'Вопросы-ответы']

function Header() {
  return (
    <header>
      <div>
        <input id="toggle" type="checkbox"/>
       
        <label className="toggle-container" htmlFor="toggle">
          <span className="button button-toggle"></span>
        </label>

        <nav className="header__menu">
          <button id="header__logo" >
            Fire<span>Money</span>
          </button>
          <div>
            {navBtns.map(btn => (
              <button className="header__navBtn" key={btn} >{btn}</button>
            ))}
          </div>
          <button id="btn__logIn">ВХОД В <span>&#160; ЛИЧНЫЙ &#160;</span>КАБИНЕТ</button>
        </nav>

      </div>
    </header>
  )
}
export default Header;