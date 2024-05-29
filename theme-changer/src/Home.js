import React, { useContext } from 'react'
import createcontext from './CreateContext'

const Home = () => {

    const {color, HandleColor} = useContext(createcontext)

  return (
    <div className='main' style={{backgroundColor : color === 'light' ? 'black' : 'white', color: color === 'light' ? 'white': 'black'}}>
        <button style={{backgroundColor : color === 'light' ? 'white' : 'black', color: color === 'light' ? 'black': 'white'}} onClick={()=>HandleColor()}>
        {
            color === 'light' ? 
        <i class="fa-solid fa-sun" title='Light Mode'></i> :
        <i class="fa-solid fa-moon" title='Dark Mode'></i>
    }
        </button>
        <h1>You are in {color === 'light' ? 'dark' : 'light'} mode</h1>
    </div>
  )
}

export default Home