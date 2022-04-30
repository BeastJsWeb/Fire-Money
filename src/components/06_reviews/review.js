import React from 'react'

export default function Review(
  {photo, name, city, review, icon, vote}
  ) {
  return (
    <article className='reviews__review'>
      <img src={photo} width={100} height={100} alt={name} />

      <div>{name}</div>

      <div>
        <img src={icon} width={12} height={16} alt='location' />
        <span>{city}</span>
      </div>

      <div>{review}</div>

      <img src={vote} width={80} height={12} alt='stars' />
    </article>
  )
}
