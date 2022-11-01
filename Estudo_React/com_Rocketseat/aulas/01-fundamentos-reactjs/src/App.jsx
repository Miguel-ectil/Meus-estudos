import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'

export function App() {
  return (
    <div>
      <Header />

        <Post 
          author="Miguel Ectil" 
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam perferendis vel optio delectus velit eum totam, est recusandae. Illo ducimus culpa eveniet aliquam minima, molestiae quos accusantium sapiente? Ipsa, laborum." 
        /> 
        <Post 
          author="Maikol Ectil" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam perferendis vel optio delectus velit eum totam, est recusandae. Illo ducimus culpa eveniet aliquam minima, molestiae quos accusantium sapiente? Ipsa, laborum." 
        /> 
    </div>
    
  )
}


