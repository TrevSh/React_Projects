import { useState } from 'react'
import UserGreeting from './UserGreeting.jsx'
import './App.css'

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="Kobain"/>
    </>
  )
}

export default App
