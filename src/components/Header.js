import React from 'react'

const Header = () => {
  return (
    <div className=' flex justify-between items-center border border-b-0 border-black'>
        <div className=' font-bold  w-[30%] text-center py-5 border-r border-black'>
            <p className=''>logo</p>
        </div>
        <div className='flex justify-end grow  py-5'>
            <button className='px-6'>Link</button>
        </div>
    </div>
  )
}

export default Header