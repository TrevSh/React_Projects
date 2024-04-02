import React from 'react'
import ReactDOM from 'react-dom/client'
import LIGHT, {MasterSwitch} from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MasterSwitch />
  </React.StrictMode>,
)
