import React from 'react';
import { Routes,Route, Outlet } from 'react-router-dom';
import './App.css'
import Header from './Header';
import NotFound from './Pages/NotFound.jsx';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route
					path='/'
					element={<Home />}></Route>
				<Route
					path='/home'
					element={<Home />}></Route>
				<Route
					path='/contact'
          element={<Contact />}></Route>
        <Route
          path='*'
        element={<NotFound />}></Route>
      </Routes>
      <div>
        xyz
      </div>
		</div>
	)
}

export default App