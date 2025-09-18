import { useTranslation } from '@/shared/lib/hooks/i18n'
import fallbackExercises from '../lib/fallback-exercises'
import ExerciseCard from './ExerciseCard'

export default function ExercisesPage() {
  const { t } = useTranslation()

  const exercises = fallbackExercises.map((exercise, idx) => {
    const translatedExercise = {
      ...exercise,
      name: t(exercise.name),
      description: t(exercise.description),
      difficulty: t(exercise.difficulty),
    }

    return <ExerciseCard key={idx} exercise={translatedExercise} type={'card'} />
  })

  return (
    <div className="flex flex-col w-full lg:w-4/5 mt-2">
      <div className="flex flex-wrap gap-2">{exercises}</div>
    </div>
  )
}
