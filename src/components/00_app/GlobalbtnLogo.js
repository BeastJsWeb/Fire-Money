import React from 'react'
import './global.scss'

export default function GlobalBthLogo({ancor}) {
  return (
    <a href={ancor} className="global__logo" >
      Fire<span>Money</span>
    </a>
  )
}