import React, {useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button'

function Header(props){
  const {index,title,descpription} = props
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold
        text-red-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>
          {title}
        </h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>
        {descpription}
      </p>
    </div>
  )
}


export default function Generator(props) {
  const {poison, setPoison, muscles, setMuscles, goals, setGoals, updateWork} = props
  const [showModal, setShowModal] = useState(false)
  
  function toggleModal(){
    setShowModal(!showModal)
  }
  
  function updateMuscles(muscleGroup){
    if (muscles.includes(muscleGroup)){
      setMuscles(muscles.filter(val => val !== muscleGroup))
      return
    }
    if (muscles.length > 2){
      return
    }
    if (poison !== 'individual'){
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }

    setMuscles([...muscles, muscleGroup])
    // if(muscles.length === 2){
    //   setShowModal(false)
    // }
  }

  return (
    <SectionWrapper id = {'generate'}

    header = {"Generate your workout"}
    title = {['It\s', 'Huge', 'o\'clock']}>
      
      <Header index={'01'} title={'Pick your poison'} 
      descpription={"Select the workout you wish to endure."}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 p-4'>
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button onClick={() => {
              setMuscles([])
              setPoison(type)
            }} className = {'px-4 border-2 border-red-400 py-4 rounded-lg duration-200  hover:bg-red-700 ' 
              + (type === poison ? 'bg-red-700' : ' bg-red-950')} 
            key={typeIndex}>
              <p className='capitalize'>{type.replaceAll('_'," ")}</p>
            </button>
          )
        })}
      </div>

      <Header index={'02'} title={'Lock on targets'} 
      descpription={"Select the muscles judged for annihilation."}/>
      <div className='p-4'>
      <div className='bg-red-950 p-3 border-2 border-solid border-red-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal} className='relative flex items-center justify-center '>
          <p>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(', ')}</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        <div>
          {showModal && (
            <div className='flex flex-col px-3 p-3'>
              {(poison === 'individual' ? WORKOUTS
                [poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup,
                  muscleGroupIndex) => {
                    return (
                      <button onClick={()=>{
                        updateMuscles(muscleGroup)
                      }} className={'hover:text-red-300 duration-200 ' + (muscles.includes(muscleGroup) ? 'text-red-300' : '')} 
                      key={muscleGroupIndex}>
                        <p className='capitalize'>{muscleGroup.replaceAll('_'," ")} </p>
                      </button>
                    )
                  })}
            </div>
          )}
        </div>
      </div>
      </div>

      <Header index={'03'} title={'Become Juggernaut'} 
      descpription={"Select ultimate objective."}/>
      <div className='grid grid-cols-3 gap-4 p-4'>
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button onClick={() => {
              setGoals(scheme)
            }} className = {'px-4 border-2 border-red-400 py-4 rounded-lg duration-200  hover:bg-red-700 ' 
              + (scheme === goals ? 'bg-red-700' : ' bg-red-950')} 
            key={schemeIndex}>
              <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
            </button>
          )
        })}
      </div>

      <Button func={updateWork} text='Formulate'></Button> 

    </SectionWrapper>
  )
}
