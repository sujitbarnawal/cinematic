import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate()
  return (
    <nav className='bg-gray-800 sticky top-0 left-0 right-0'>
        <div className='max-w-8xl mx-auto flex justify-between px-6 py-4'>
            <h1 onClick={()=>navigate('/')} className='cursor-pointer text-2xl md:text-3xl font-bold text-white'>Cinematic</h1>
            <h1 onClick={()=>navigate('/favourite-movies')} className='cursor-pointer text-2xl md:text-3xl font-bold text-white'>Favourite</h1>
        </div>
    </nav>
  )
}

export default Navbar
