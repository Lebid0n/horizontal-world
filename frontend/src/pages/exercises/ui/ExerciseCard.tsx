import { useLocation, useNavigate } from 'react-router-dom'
import type { Exercise } from '../model/types'

interface Props {
  exercise: Exercise
  modal: boolean
}

export default function ExerciseCard({ exercise, modal }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = () => {
    if (modal) return
    navigate(`/exercises/${exercise.slug}`, { state: { location, exercise: exercise } })
  }

  return (
    <article
      className="flex flex-col min-w-[20rem] items-center grow border-2 border-accent rounded-2xl p-3 hover:bg-primary-50 duration-200 cursor-pointer"
      onClick={handleClick}
    >
      <h2 className="text-xl font-bold">{exercise.name}</h2>
      <img src={exercise.imageUrl} alt={exercise.name} />
      <p className="text-lg">{exercise.description}</p>
    </article>
  )
}
