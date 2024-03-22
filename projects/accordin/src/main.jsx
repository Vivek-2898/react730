import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Todo.css'
import TodoApp from './TodoApp.jsx'
import Todo1 from './Todo1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoApp/> */}
    <Todo1/>
  </React.StrictMode>,
)
