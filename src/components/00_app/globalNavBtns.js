import React from 'react'
import './global.scss'

export default function GlobalNavBtns(
  {data, className}
  ) {
  return (
    <div>
      {data.map(btn => (
        <button className={className} key={btn} >
          {btn}
        </button>
      ))}
    </div>
  )
}