import { AdjustmentsHorizontalIcon, Squares2X2Icon, XCircleIcon } from '@heroicons/react/24/solid'
import React from 'react'
function Filter() {
  return (
    <div className='flex justify-between items-center mb-10'>
      <span className='flex font-semibold text-[#1D1D1D] space-x-5 cursor-pointer'>
        <AdjustmentsHorizontalIcon className='h-7 w-7 font-bold' />
        <h2>Výsledky hledání</h2>
      </span>
      <span className='flex space-x-2'>
        <XCircleIcon className='h-5 text-[#ff3e4e]/100 cursor-pointer' />
        <h2 className='text-sm text-[#ff3e4e]/100'>Smazat filtry</h2>
      </span>
    </div>
  )
}

export default Filter