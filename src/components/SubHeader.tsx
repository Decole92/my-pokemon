import { Squares2X2Icon } from '@heroicons/react/24/solid'
import React from 'react'

function Subheader() {
  return (
    <div className='flex font-semibold text-[#1D1D1D] space-x-5 items-center mb-10'>
    <Squares2X2Icon className='h-7 w-7' />
    <h2>Přehled Pokémonů</h2>
    </div>
  )
}

export default Subheader