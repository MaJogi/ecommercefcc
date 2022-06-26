import React, { Component } from 'react'
import CustomersList from './CustomersList'
import NavBar from './Navbar'
import ShoppingCart from './ShoppingCart'
import Login from './Login'
import Dashboard from './Dashboard'
// import { Route } from 'react-router'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatchPage from './NoMatchPage'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className='container-fluid'>
          <Routes>
            <Route path='/' exact element={<Login />} />
            <Route path='/dashboard' exact element={<Dashboard />} />
            <Route path='/customers' exact element={<CustomersList />} />
            <Route path='/cart' exact element={<ShoppingCart x='10' />} />
            <Route path='*' element={<NoMatchPage />} />
          </Routes>
        </div>

        {/* <ShoppingCart x='10' /> */}
        {/* <Login /> */}
      </BrowserRouter>
    )
  }
}

export default App
