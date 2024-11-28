import React from 'react'

const NavBar = () => {
    return (
        <div className='h-16 fixed z-40 w-full flex items-center border-b border-black bg-background'>
            <nav className='flex justify-between items-center w-[95%] mx-auto' >
                <h1 className='font-main text-xs'>Amit Sah</h1>
                <h1 className='font-head font-medium text-sm'>The Portfolio</h1>
                <h1 className='font-sub font-semibold text-[1.2vw]'>Portfolio</h1>

            </nav>
        </div>
    )
}

export default NavBar