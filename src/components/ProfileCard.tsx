'use client';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

type Props = {
    pokemon: any;
}
function ProfileCard({pokemon}: Props) {
const [activeLink, setActiveLink] = useState('Profile');
const [progress, setProgress] = useState(0);
const router = useRouter();
useEffect(() => {
const interval = setInterval(() => {
setProgress((prevProgress: number) => (prevProgress >= 100 ? 0 : prevProgress + 10));
 }, 1000);
  
    return () => clearInterval(interval);
    }, []);
     
    const handleLinkClick = (link: string) => {
      setActiveLink(link);
    };
    return (
        <div className=''>
          <div className=''>
           <div onClick={() => router.push('/')} className='mt-10 md:mt-20 mb-5 flex items-center space-x-5 cursor-pointer'><ChevronLeftIcon className='h-5 w-5'/>
            <h1 className='text-sm font-bold'>Zpět na přehled</h1>
            </div>
                <nav className='items-center mx-auto md:w-[100px] md:space-x-2 h-15'>
                  <ul className='flex justify-between md:space-x-2 text-[#ff3e4e]/80 font-semibold'>
                  <li className={`h-10 flex items-center space-x-2 rounded-t-lg bg-white cursor-pointer hover:text-[#ff3e4e] p-2 px-10`}>
                  <a
                  href="#"
                  onClick={() => handleLinkClick('Profile')}
                  className={activeLink === 'Profile' ? '$active bg-white text-[#ff3e4e] border-b-2 border-[#ff3e4e] pb-2' : ''}>
                  <h1 className={`flex`}><p className='font-bold'>☺️</p>
                  <p>Profil</p></h1>
                  </a>
                  </li>
                  <li className='h-10 flex items-center space-x-2 rounded-t-lg bg-white cursor-pointer hover:text-[#ff3e4e] p-2 px-10'>
                  <a
                  href="#"
                 onClick={() => handleLinkClick('Statistic')}
                 className={activeLink === 'Statistic' ? '$active bg-white text-[#ff3e4e] border-b-2 border-[#ff3e4e] pb-2' : ''}>
                <h1>
                <p>Statistiky</p>
                </h1>
                </a>
                </li>
                </ul>
               </nav>
               <div className='bg-white rounded-b-lg md:rounded-lg p-5 py-4 md:flex md:space-x-10 space-y-3 items-center'>
               <div className='border-2 border-[#e8e8e8] p-5 md:p-10 rounded-lg text-center space-y-10'>
               <span className='font-semibold uppercase text-3xl text-[#ff3e4e]'>
                {pokemon?.pokemon_v2_pokemon?.map((details:any)=><p key={details?.id} className='p-2'>{details?.name}</p>)}
                </span>
                {
                 pokemon?.pokemon_v2_pokemon?.map((image:any)=><Image key={image.id} src={`https://img.pokemondb.net/artwork/${image.name}.jpg`} alt={image.name}  height="300" width="300" className='object-contain h-[200px] p-5'/>)
                }
                </div> {
                 activeLink === 'Profile' ? (
                 <div className=''>
                 <ul className='space-y-4 text-black '>
                 <li className='flex space-x-5 justify-between'><p className='bg-[#ff3e4e1a] rounded-lg font-bold p-2'>Type</p>
                 {pokemon?.pokemon_v2_type?.map((type:any)=><p key={type?.name!} className='p-2 font-semibold'>{type?.name}</p>)}</li>
                 <li className='flex space-x-5 justify-between'><p className='bg-[#ff3e4e1a] rounded-lg  font-bold p-2'>Height</p>
                 {pokemon?.pokemon_v2_pokemon?.map((dimension:any)=><p key={dimension?.id!} className='p-2 font-semibold'>{dimension?.height}{" "}m</p>)}</li>
                 <li className='flex space-x-5 justify-between'><p className='bg-[#ff3e4e1a] rounded-lg font-bold p-2'>Width</p>
                 {pokemon?.pokemon_v2_pokemon?.map((dimension:any)=><p key={dimension?.id!} className='p-2 font-semibold'>{dimension?.weight}{" "}Kg</p>)}</li>
                 <li className='flex space-x-5 justify-between'><p className='bg-[#ff3e4e1a] rounded-lg font-bold p-2'>Skills</p>
                 {
                   pokemon?.pokemon_v2_move?.map((move: any)=><p key={move.id} className='p-2 font-semibold'>{move.name}</p> )
                 }</li>
                </ul>
                </div>
              
                ) : ( 
    
                <div className=''>
                <ul className='space-y-2 md:space-y-5'>
                <li className='flex space-x-10 justify-between font-bold'><p>Hp</p>{pokemon?.pokemon_v2_naturebattlestylepreference?.map((hp: any) =>
                 <progress key={hp.id} className='ProgressBar' value={hp?.high_hp_preference} max="100" />)}</li>
                  <li className='flex space-x-10 justify-between font-bold'><p>Attack</p>
                  {
                    pokemon?.pokemon_v2_move?.map((atk:any)=><progress key={atk.id} className='ProgressBar' value={atk.accuracy} max="100" /> )
                  }
                 </li>
                <li className='flex space-x-10 justify-between font-bold'><p>Defence</p>
                {
                 (pokemon?.pokemon_v2_pokemonspecies?.map((stat: any) =>
                 <progress key={stat.id} className='ProgressBar' value={stat.capture_rate} max="100" />
                 ))
                }</li>
              
                <li className='flex space-x-10 justify-between font-bold'><p>Speed</p>
                 {
                 (pokemon?.pokemon_v2_pokemonspecies?.map((stat: any) =>
                 <progress key={stat.id} className='ProgressBar' value={stat.base_happiness} max="100" />
                 ))
                }</li>
                <li className='flex space-x-10 justify-between font-bold'><p>Gift</p>
                { pokemon?.pokemon_v2_pokemonstat?.map((bs: any) => 
                    <progress key={bs.id} className='ProgressBar' value={bs.base_stat} max="100" />)
                }</li>
                <li className='flex space-x-10 justify-between font-bold'><p>Power</p>
                { pokemon?.pokemon_v2_berry?.map((power:any) => 
                  <progress key={power.id} className='ProgressBar' value={power.natural_gift_power} max="100" />
                )}
                </li>
              </ul> 
              </div> 
                )
              }
            </div>
          </div>
        </div>
      )
}

export default ProfileCard
