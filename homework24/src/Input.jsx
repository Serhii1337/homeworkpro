import { useState } from 'react'

export default function Input() {
  const [value, setValue] = useState('')

  return (
    <div>
      <input
        value={value}
        onChange={function (input) { setValue(input.target.value) }}
        placeholder="Type something..."
      />
      <p>Your text: {value}</p>
    </div>
  )
}
