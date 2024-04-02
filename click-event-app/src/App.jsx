import { useState } from 'react'
import Button from './Button.jsx'
import ProfilePicture from './ProfilePicture.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ProfilePicture/>
    </>
  )
}

export default App
