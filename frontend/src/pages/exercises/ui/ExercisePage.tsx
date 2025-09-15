import { useNavigate, useParams } from 'react-router-dom'
import fallbackExercises from '../lib/fallback-exercises'
import ExerciseCard from './ExerciseCard'
import { useEffect } from 'react'

export default function ExercisePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  // here we fetch the exercise from the server, for now we just hardcode it
  const exercise = fallbackExercises.find((exercise) => exercise.slug === slug)

  useEffect(() => {
    if (!exercise) {
      navigate('/exercises')
    }
  }, [exercise, navigate])

  if (!exercise) return null

  return (
    <div className="flex flex-col w-full lg:w-4/5 mt-2">
      <ExerciseCard exercise={exercise} type={'page'} />
    </div>
  )
}
