import type { Exercise } from '../model/types'

const fallbackExercises: Exercise[] = [
  {
    id: 1,
    name: 'exercises.pushUp.name',
    slug: 'push-up',
    description: 'exercises.pushUp.description',
    difficulty: 'exercises.difficulty.beginner',
    imageUrl: 'https://www.muscletech.in/wp-content/uploads/2025/01/push-up-exercises.webp',
    videoUrl: 'https://www.youtube.com/watch?v=8-0-o0a1-8g',
  },
  {
    id: 2,
    name: 'exercises.bodyweightSquat.name',
    slug: 'bodyweight-squat',
    description: 'exercises.bodyweightSquat.description',
    difficulty: 'exercises.difficulty.beginner',
    imageUrl: '/images/fallback/squat.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=3-0-o0a1-8g',
  },
  {
    id: 3,
    name: 'exercises.invertedRow.name',
    slug: 'inverted-row',
    description: 'exercises.invertedRow.description',
    difficulty: 'exercises.difficulty.beginner',
    imageUrl: '/images/fallback/inverted-row.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=4-0-o0a1-8g',
  },
]

export default fallbackExercises
