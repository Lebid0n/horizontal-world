import type { Exercise } from '../model/types'

interface Props {
  exercise: Exercise
}

export default function ExerciseCard({ exercise }: Props) {
  return (
    <div className="flex flex-col min-w-[20rem] items-center grow border-2 border-accent rounded-2xl p-3">
      <h2 className="text-xl font-bold">{exercise.name}</h2>
      <img src={exercise.imageUrl} alt={exercise.name} />
      <p className="text-lg">{exercise.description}</p>
    </div>
  )
}
