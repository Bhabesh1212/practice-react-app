import { useState } from 'react'

function ColorButton() {
  const [color, setColor] = useState('blue')

  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => setColor(color === 'blue' ? 'red' : 'blue')}
    >
      Click Me
    </button>
  )
}

export default ColorButton