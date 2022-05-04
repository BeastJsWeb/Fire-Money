import React from 'react'
import GlobalBthLogo from '../../00_app/GlobalbtnLogo'
import GlobalNavBtns from '../../00_app/globalNavBtns'

export default function Nav({data, btns, ancor}) {
  return (
    <section id='footer__nav'>
      <GlobalNavBtns data={btns} id='nav__btns' />

      <div id='nav__logoAndContacts'>
        <GlobalBthLogo ancor={ancor} />
        <div>
          {data.slice(6, 8)
          .map(({contact, icon}) => (
            <button key={contact}>
              <img src={icon} width={20} height={20} alt='footer__icon' />
              {contact}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
