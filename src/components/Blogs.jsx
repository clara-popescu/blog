import React from 'react'
import posts from '../data/posts.json'
import { useState } from 'react'

function Blogs({post}) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className='w-screen'>
      <div key={post.id} className='mb-7 flex w-3/5 m-auto'>
        <div className='w-1/6'>
          <p className='text-gray-400'>{post.date}</p>
        </div>

        <div className='w-5/6'>
          <h2>{post.title}</h2>
          <p className='pb-3'>{post.subtitle}</p>

          <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? '▼' : '►'}
          </button>
      
          {isVisible && <p>{post.content}</p>}
          
        </div>

      </div>
    </div>
  )
}

export default Blogs