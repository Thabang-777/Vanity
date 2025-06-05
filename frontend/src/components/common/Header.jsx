import React from 'react'
import NavBar from './NavBar'
import TopBar from './TopBar'

const Header = () => {
  return (
    <header className='relative border-b'>
      <TopBar />
      <NavBar />  
    </header>
  )
}

export default Header