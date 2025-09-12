import { Routes, Route } from 'react-router-dom'
import ProjectInfoPage from '../pages/project-info/ui/ProjectInfoPage'
import Layout from '@/shared/layout/Layout'
import ExercisesPage from '@/pages/exercises/ui/ExercisesPage'
import UserProfilePage from '@/pages/user-profile/ui/UserProfilePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProjectInfoPage />} />
        <Route path="/exercises" element={<ExercisesPage />} />
        <Route path="/profile/:id" element={<UserProfilePage />} />
      </Route>
    </Routes>
  )
}
