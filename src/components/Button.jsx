import React from 'react'

const Button = ({ setShowAll, showAll, text }) => {
  return (
    <div>
    <button onClick={() => setShowAll(!showAll)}>
      {text} {showAll ? 'important' : 'all' }
    </button>
  </div>
  )
}

export default Button
