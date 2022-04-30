import React from 'react'

export default function CreditList(
  {title, data}
  ) {
  return (
    <section id='footer__creditList' >
      <div>{title.toUpperCase()}</div>
      <div>{data}</div>
    </section>
  )
}
