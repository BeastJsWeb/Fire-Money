import React from 'react'
import GlobalBthLogo from '../../00_app/GlobalbtnLogo'

export default function Nav({data}) {
  return (
    <section id='footer__nav'>
      <div id='nav__btns'>
        {data.slice(3, 6)
        .map(({btn}) => (
          <button key={btn} >{btn}</button>
        ))}
      </div>

      <div id='nav__logoAndContacts'>
        <GlobalBthLogo />
        <div>
          {data.slice(6, 8)
          .map(({contact, icon}) => (
            <button key={contact}>
              <img src={icon} alt='footer__icon' />
              {contact}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
