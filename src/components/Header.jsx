import React from 'react'

function Header() {
  return (
    <div className='w-screen'>
      <ul className='w-3/4 m-auto flex gap-4 justify-around py-4'>
        <li className='hover:underline cursor-pointer'>graduation project</li>
        <li className='hover:underline cursor-pointer'>essays</li>
        <li className='hover:underline cursor-pointer'>other</li>
      </ul>
    </div>
  )
}

export default Header