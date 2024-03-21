import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './Counter.jsx'
import './index.css'
import BgChanger from './bg-changer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/>
    <Counter/> */}
    <BgChanger/>
  </React.StrictMode>,
)