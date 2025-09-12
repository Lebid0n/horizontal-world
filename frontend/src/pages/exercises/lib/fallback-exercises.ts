import type { Exercise } from '../model/types'

const fallbackExercises: Exercise[] = [
  {
    id: 1,
    name: 'Push-up',
    slug: 'push-up',
    description: 'A classic bodyweight exercise for chest and arms.',
    difficulty: 'Beginner',
    imageUrl: '/images/fallback/push-up.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=8-0-o0a1-8g',
  },
  {
    id: 2,
    name: 'Bodyweight Squat',
    slug: 'bodyweight-squat',
    description: 'A fundamental lower body exercise.',
    difficulty: 'Beginner',
    imageUrl: '/images/fallback/squat.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=3-0-o0a1-8g',
  },
  {
    id: 3,
    name: 'Inverted Row',
    slug: 'inverted-row',
    description: 'Excellent for back and bicep strength.',
    difficulty: 'Beginner',
    imageUrl: '/images/fallback/inverted-row.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=4-0-o0a1-8g',
  },
]

export default fallbackExercises
