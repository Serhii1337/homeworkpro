import './App.css'
import { useState } from 'react'
import Input from './Input'
import Conditional from './Conditional'

function App() {
  const [isOn, setIsOn] = useState(false)

  return (
    <div>
      <button onClick={function () { setIsOn(function (status) { return !status }) }}>
        {isOn ? 'Off' : 'On'}
      </button>

      <Conditional show={isOn} />

      <Input />
    </div>
  )
}

export default App
