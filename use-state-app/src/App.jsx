import { useState } from 'react'
import MyComponent from './MyComponent.jsx'
import MyArrayComponent from './MyArrayComponent.jsx'
import MyObjectArrayComponent from './MyObjectArrayComponent.jsx'
import Counter from './Counter.jsx'

//useState creates a stateful variable or a variable with a changeable state
//When these variable change, the DOM refreshes to reflect the change!
function App() {
  return (
    <>
      <MyComponent/>
      <MyArrayComponent/>
      <MyObjectArrayComponent/>
      <Counter/>
    </>
  )
}

export default App
