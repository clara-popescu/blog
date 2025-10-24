import React from 'react'
import posts from '../data/posts.json'
import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

function Blogs({post}) {
  const [isVisible, setIsVisible] = useState(true)
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(post.content)
      .then(res => res.text())
      .then(text => setContent(text))
      .catch(err => console.error('Error loading markdown:', err))
  }, [post.content])

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
      
          {isVisible && (
            <div className="prose max-w-none mt-3">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
          
        </div>
      </div>
    </div>
  )
}

export default Blogs