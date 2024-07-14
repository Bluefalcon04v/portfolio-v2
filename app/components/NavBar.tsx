import React from 'react'

const NavBar = () => {
    return (
        <div className='h-32 flex items-center bg-red-800/60 backdrop-blur-[12rem] backdrop-sepia-0'>
            <div className='w-11/12 mx-auto bg-transparent flex justify-between items-center' >
                <h1 className='font-headfont text-[#e0e0e0] font-semibold text-xl bg-transparent'>Portfolio</h1>
                <div className='bg-[#FC1736] h-24 w-24 flex items-center justify-center font-headfont font-extrabold text-lg uppercase tracking-[-0.1em] hover:origin-top-right hover:rotate-6 '>
                    Menu
                </div>
            </div>
        </div>
    )
}

export default NavBar