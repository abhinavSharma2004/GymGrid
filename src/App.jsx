import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import {generateWorkout} from './utils/functions'

function App() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('')
  const [muscles, setMuscles] = useState([])
  const [goals, setGoals] = useState('')

  function updateWork(){
    if (muscles.length < 1){
      return
    }
    let newWork = generateWorkout( {poison,muscles,goals} )
    console.log(newWork)
    setWorkout(newWork)
    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
     from-black to-red-950 text-white text-sm sm:text-base'>
      <Hero />
      
      <Generator
      poison = {poison}
      setPoison = {setPoison}
      muscles = {muscles}
      setMuscles = {setMuscles}
      goals = {goals}
      setGoals = {setGoals}
      updateWork = {updateWork}
      />

      {workout && (<Workout workout = {workout} />)}
    </main>
  )
}

export default App
