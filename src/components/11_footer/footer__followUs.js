import React from 'react'
import './footer__followUs.scss'

export default function FollowUs(
  {icon, text, data}
  ) {
  return (
    <section id='Foooter__followUs' >
      <div>
        <img src={icon} width={45} height={45} alt='footer__icon' />
        <div>{text}</div>
      </div>

      <section id='footer__media'>
        <button>ОТПИСАТЬСЯ</button>
        <div>
          {data.map((Item, i) => (
            <div key={i} >
              <Item width={22} height={16} alt='footer__svg' />
            </div>
          ))}
        </div>
      </section>
    </section>
  )
}
