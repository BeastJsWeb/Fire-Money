<div id='nav__btns'>
  {data.slice(3, 6)
  .map(({btn}) => (
    <button key={btn} >{btn}</button>
  ))}
</div>