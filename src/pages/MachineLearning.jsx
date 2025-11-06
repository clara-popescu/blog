import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import posts from '../data/machine-learning/posts.json'

function MachineLearning() {
  return (
    <>
      <Header/>
      <p className='text-gray-500 text-center text-sm w-screen'>All posts were written at the end of the week, based on notes I took throughout the week as I worked on various aspects of the project.</p>
        {posts.map(post => (
          <Blogs key={post.id} post={post} />
        ))}
        <Footer/>
    </>
  )
}

export default MachineLearning