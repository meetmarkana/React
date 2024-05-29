import React, { useState } from 'react'
import createcontext from './CreateContext'

const Context = ({children}) => {

    const [color, setColor] = useState('light')

    const HandleColor = ()=> {
        if(color === 'light'){

            setColor('dark')
        }
        else{
            setColor('light')
        }
    }

  return (
    <createcontext.Provider value={{color, HandleColor}}>
        {children}
    </createcontext.Provider>
  )
}

export default Context