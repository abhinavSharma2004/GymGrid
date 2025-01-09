import React, {useState} from 'react'

export default function ExcerciseCard(props) {
  
    const {excercise, i} = props
    const [setsCompleted, SetsetsCompleted] = useState(0)

    function handleSetIncrement(){
        SetsetsCompleted((setsCompleted + 1) % 6)
    }
    
    return (

    <div className='p-4 rounded-md flex flex-col gap-4
    bg-red-950  sm:flex-wrap gap-x-4'>
        <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
        <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl
        font-semibold text-red-400'>
            0{i+1}
        </h4>
        <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg
        sm:text-xl md:text-sxl flex-1 sm:text-center'>{excercise.name.replaceAll("_"," ")}
        </h2>
        <p className='text-sm text-red-400 capitalize'>{excercise.type}</p>
    </div>
    
    <div className='flex flex-col'>
        <h3 className='text-red-400 text-sm'>Muscle Groups</h3>
        <p className='capitalize'> {excercise.muscles.join(' & ')} </p>
    </div>

    <div className='flex flex-col bg-red-950 rounded gap-2'>
        {excercise.description.split('___').map((val) => {
            return (
                <div className='text-sm'>
                    {val}
                </div>
            )
        })}
    </div>

    <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
        {['reps', 'rest', 'tempo'].map(info => {
        
        })}
        <button onClick={handleSetIncrement} className='flex flex-col p-2 bg-red-900 rounded duration-200 border-2 border-solid border-red-900 hover:border-red-600 w-full duration-200'>
            <h3 className='text-red-200 text-sm capitalize'>Sets completed</h3>
            <p className='font-medium'>{setsCompleted} / 5</p>
        </button>
    </div>

    
    </div>
    
  )
}
