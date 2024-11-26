import React from 'react'
import { Cube } from './Global/Cube'

const NavBar = () => {
    return (
        <div className='h-28 flex items-center red-glass-morphism border-b border-b-red-900'>
            <nav className='flex justify-between w-full items-center ' >
            {/* text-[#e0e0e0] */}
                <h1 className='font-main font-semibold text-[1.2vw]'>Portfolio</h1>
                <h1 className='font-head font-semibold text-[1.2vw]'>Portfolio</h1>
                <h1 className='font-sub font-semibold text-[1.2vw]'>Portfolio</h1>

                <Cube/>

            </nav>
        </div>
    )
}

export default NavBar