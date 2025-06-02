import SearchMovies from '@/components/SearchMovies'
import React from 'react'

function Home() {
  return (
    <div className='mt-4 flex flex-col max-w-7xl mx-auto'>
      <h1 className='font-bold text-3xl text-center'>Search Movies</h1>
      <SearchMovies/>
    </div>
  )
}

export default Home
