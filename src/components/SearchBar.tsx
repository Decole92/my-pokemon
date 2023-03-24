'use client'
import { useState } from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/solid'

type Props ={
  onSearch: any;
}

function SearchBar({ onSearch }: Props) {
const [searchTerm, setSearchTerm] = useState('');


function handleChange(e:any) {
  setSearchTerm(e.target.value);
  onSearch(e.target.value);
}
function clearSearch(){
  setSearchTerm('');
  window.location.href = "/"
  }
   return (
  <div className='items-center justify-center mt-5 mb-5 lg:mt-10 md:mt-10 lg:mb-10 md:mb-10'>
      <form className='bg-white flex items-center justify-center py-2 space-x-5 px-5 rounded-lg max-w-md mx-auto'>
      <MagnifyingGlassIcon className='h-6 w-6 text-[#A5A5A5] ' />
      <input className='flex-1 p-2 focus:outline-none bg-inherit text-[#A5A5A5] lowercase' value={searchTerm} onChange={(e)=>handleChange(e)} placeholder="Zadejte jméno Pokémona..." />
      <XMarkIcon onClick={()=>clearSearch()} className='h-6 w-6 text-[#E8E8E8] cursor-pointer' />
      </form>
</div>
  )
}

export default SearchBar;
