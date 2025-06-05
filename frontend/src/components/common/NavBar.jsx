import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingBag, FiSearch, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { HiOutlineMenu } from 'react-icons/hi'

import Cart from '../cart/Cart'

const NavBar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [burgermenuIsOpen, setBurgermenuIsOpen] = useState(false);
  const [searchToggled, setSearchToggled] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")


  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search term is: ", searchTerm);
    setSearchTerm("")
    setSearchToggled(!searchToggled);
  }
  return (
    <div>
      <div className='grid md:grid-cols-3 grid-cols-2 text-xl p-4'>
        <div className=''>
          <Link to='/'>
            Logo
          </Link>
        </div>

        <nav className='hidden md:flex justify-center space-x-4 w-full'>
          <Link to='#' className=''>Men</Link>
          <Link to='#' className=''>Women</Link>
          <Link to='#' className=''>Men</Link>
          <Link to='#' className=''>Women</Link>
        </nav>

        <div className='flex justify-end space-x-3'>
          <Link className='h-6 w-6'>
            <FiUser className='h-6 w-6' />
          </Link>
          <div className=''>
            {
              cartIsOpen ? (
                <>
                  <button onClick={() => {setCartIsOpen(!cartIsOpen)}}>
                    <Link className='h-6 w-6'>
                      <FiShoppingBag className='h-6 w-6' />
                    </Link>
                  </button>
                  <Cart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />              
                </>

              ) : 
              (
                <button onClick={() => {setCartIsOpen(!cartIsOpen)}}>
                  <Link className='h-6 w-6'>
                    <FiShoppingBag className='h-6 w-6' />
                  </Link>
                </button>
              )
            }
          </div>

          <div>
            {
              searchToggled ? 
              (            
                <div className='flex bg-black justify-center items-center absolute left-0 top-0 h-full w-full'>
                  <div className='w-1/2 relative'>
                    <input 
                      className='w-full border border-white pl-5 py-1 rounded-full' 
                      value={searchTerm} 
                      onChange={(e) => {
                        setSearchTerm(e.target.value)
                      }}
                      placeholder='Search' 
                    />
                    <button onClick={handleSearch} className='absolute right-0 h-full transform -translate-x-5' type='submit' onSubmit={handleSearch}>
                      <FiSearch className=''/>
                    </button>
                  </div>
                  <button onClick={() => {
                    setSearchToggled(false)
                  }} className='pl-3'>
                    <FiX className='h-6 w-6' />                
                  </button>
                </div>
              ) : (
              <Link className='h-6 w-6'>
                <button onClick={() => {
                  setSearchToggled(!searchToggled)
                }}>
                  <FiSearch className='h-6 w-6' />
                </button>
              </Link>
              )
            }

          </div>
          <div>
            {
              burgermenuIsOpen ? (
                <>
                  <button onClick={() => {
                    setBurgermenuIsOpen(!burgermenuIsOpen)
                  }} className='md:hidden'>
                    <Link >
                      <FiMenu className='h-6 w-6' />
                    </Link>
                  </button>
                  <div>
                    <div className='fixed left-0 top-0 bg-black h-full w-1/3 p-2'>
                    <button onClick={() => setBurgermenuIsOpen(!burgermenuIsOpen)}>
                      <FiX className='h-6 w-6'/>
                    </button>
                    </div>
                  </div>
                </>

              ) : (
                <button onClick={() => {
                  setBurgermenuIsOpen(!burgermenuIsOpen)
                }} className='md:hidden'>
                  <Link >
                    <FiMenu className='h-6 w-6' />
                  </Link>
                </button>
              )
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar