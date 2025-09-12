import { createPortal } from 'react-dom'
import type { Exercise } from '../model/types'
import ExerciseCard from './ExerciseCard'

interface Props {
  exercise: Exercise
}

export default function ExerciseModal({ exercise }: Props) {
  return createPortal(
    <section className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center">
      <ExerciseCard exercise={exercise} modal={true} />
    </section>,
    document.body
  )
}
