import { useParams } from 'react-router-dom'
import fallbackExercises from '../lib/fallback-exercises'
import ExerciseCard from './ExerciseCard'

export default function ExercisePage() {
  const { slug } = useParams()
  // here we fetch the exercise from the server, for now we just hardcode it
  const exercise = fallbackExercises.find((exercise) => exercise.slug === slug)

  if (!exercise) {
    return <div>Exercise not found</div>
  }

  console.log('it rendered!')

  return (
    <div className="flex flex-col w-full lg:w-4/5 mt-2">
      <ExerciseCard exercise={exercise} modal={false} />
    </div>
  )
}
