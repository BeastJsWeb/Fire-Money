import React from 'react'

export default function PayAndData({data}) {
  return (
    <div id='footer__payAndData'>
      <section id='footer__pay'>
        <div>Какие карты принимаем</div>
        <div>
          {data.map((pay, i) => (
            <img src={pay} key={i} width={75} height={40} alt='footer__img' />
          ))}
        </div>
      </section>

      <button id='footer__personalData'>
        Мы явлемся обработчиками &#160;
        <span>персональных данных</span>
      </button>
    </div>
  )
}
