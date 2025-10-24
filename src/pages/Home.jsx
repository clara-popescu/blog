// rfce to create the template

import React from 'react'
import posts from '../data/posts.json'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
        <Header/>
        {posts.map(post => (
          <Blogs key={post.id} post={post} />
        ))}
        <Footer/>
    </>
  )
}

export default Home