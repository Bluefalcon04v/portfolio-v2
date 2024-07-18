import React from 'react'
import { Cube } from './Global/Cube'

const NavBar = () => {
    return (
        <div className='h-28 flex items-center red-glass-morphism border-b border-b-red-900'>
            <nav className='flex justify-between w-full items-center ' >
                <h1 className='font-headfont text-[#e0e0e0] font-semibold text-[1.2vw] uppercase'>Portfolio</h1>
                {/* <div className='bg-[rgba(252,23,54)] h-24 w-24 flex items-center justify-center font-headfont font-extrabold text-[1vw] uppercase '>
                    Menu
                </div> */}
                <Cube/>
            </nav>
        </div>
    )
}

export default NavBar