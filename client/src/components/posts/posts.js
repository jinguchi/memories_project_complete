import React from 'react'
import Post from './post/post'

const posts = () => {
  return (
    // <> is a React fragment
    <>
        <div>posts</div>
        < Post />
        < Post />
    </>
  )
}

export default posts