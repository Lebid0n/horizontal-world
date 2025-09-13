import fallbackExercises from '../lib/fallback-exercises'
import ExerciseCard from './ExerciseCard'

export default function ExercisesPage() {
  const exercises = fallbackExercises.map((exercise, idx) => {
    return <ExerciseCard key={idx} exercise={exercise} type={'card'} />
  })

  return (
    <div className="flex flex-col w-full lg:w-4/5 mt-2">
      <div className="flex flex-wrap gap-2">{exercises}</div>
    </div>
  )
}
