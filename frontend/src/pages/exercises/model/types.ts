export interface Exercise {
  id: number
  name: string
  slug: string
  description: string
  difficulty: string
  videoUrl: string
  imageUrl: string
}

export type ExerciseCardType = 'card' | 'modal' | 'page'
