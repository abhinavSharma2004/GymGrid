import React from 'react'

export default function Button(props) {
    
    const {text,func} = props

  return (
    <button onClick={func} className='px-8 mx-auto py-4 rounded-md border-[2px]
         bg-red-950 border-red-400 border-solid duration-200 redShadow
         hover:bg-red-600'>
            <p> {text} </p>
        </button>
  )
}
