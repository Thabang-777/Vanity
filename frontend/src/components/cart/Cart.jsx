import React from 'react'
import { FiX } from 'react-icons/fi'
const Cart = ({cartIsOpen, setCartIsOpen}) => {
  return (
    <div className='fixed right-0 top-0 bg-black h-full w-1/4 '>
      <button onClick={() => setCartIsOpen(!cartIsOpen)}>
        <FiX className='h-6 w-6'/>
      </button>
    </div>
  )
}

export default Cart