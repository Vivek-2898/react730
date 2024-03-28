import React from 'react'
import ReactDOM from 'react-dom/client'
import { createContext } from 'react' // Import createContext separately
import App from './App.jsx'
import './index.css'
import './Todo.css'
import TodoApp from './TodoApp.jsx'
import Todo1 from './Todo1.jsx'
import ContextApiDemo from './ContextApiDemo.jsx'
import CountdownTimer from './CountDownTimer.jsx'
import UnControlledUseRef from './UnControlledUseRef.jsx'
import ControlledForm from './ControlledForm.jsx'

export const mainContext = createContext()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoApp/> */}
     {/* <Todo1/> */}
     {/* <ContextApiDemo/> */}
     {/* <CountdownTimer/> */}
     {/* <UnControlledUseRef/> */}
     <ControlledForm/>
  </React.StrictMode>
)
