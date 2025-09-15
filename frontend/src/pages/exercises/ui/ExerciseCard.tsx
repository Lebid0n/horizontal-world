import { useLocation, useNavigate } from 'react-router-dom'
import type { ExerciseCardType, Exercise } from '../model/types'
import clsx from 'clsx'
import { useRef } from 'react'
import useClickOutside from '@/shared/lib/hooks/useClickOutside'

interface Props {
  exercise: Exercise
  type: ExerciseCardType
}

export default function ExerciseCard({ exercise, type }: Props) {
  const navigate = useNavigate()
  const location = useLocation()
  const ref = useRef<HTMLElement>(null)

  const handleClick = () => {
    if (type === 'modal' || type === 'page') return
    navigate(`/exercises/${exercise.slug}`, { state: { location, exercise: exercise } })
  }

  useClickOutside(
    [ref],
    () => {
      navigate(-1)
    },
    type !== 'modal'
  )

  return (
    <article
      className={clsx(
        'flex flex-col relative min-w-[20rem] items-center grow  rounded-2xl p-3 duration-200',
        {
          'max-w-[50rem] bg-bg-card': type === 'modal',
          'hover:bg-bg-hover cursor-pointer': type === 'card',
          'border-2 border-accent': type === 'modal' || type === 'card',
        }
      )}
      onClick={handleClick}
      ref={ref}
    >
      <h2 className="absolute top-0 left-2 text-lg font-bold">{exercise.difficulty}</h2>
      <h2 className="text-xl font-bold">{exercise.name}</h2>
      <img
        src={exercise.imageUrl}
        alt={exercise.name}
        className="max-w-[40rem] h-full rounded-2xl my-2 object-cover"
      />
      <p className="text-lg">{exercise.description}</p>
    </article>
  )
}
