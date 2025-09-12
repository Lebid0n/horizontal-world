import { Routes, Route, useLocation } from 'react-router-dom'
import ProjectInfoPage from '../pages/project-info/ui/ProjectInfoPage'
import Layout from '@/shared/layout/Layout'
import ExercisesPage from '@/pages/exercises/ui/ExercisesPage'
import UserProfilePage from '@/pages/user-profile/ui/UserProfilePage'
import ExerciseModal from '@/pages/exercises/ui/ExerciseModal'

export default function App() {
  const location = useLocation()
  const previousLocation = location.state?.location
  const exercise = location.state?.exercise

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProjectInfoPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/profile/:id" element={<UserProfilePage />} />
        </Route>
      </Routes>
      {previousLocation && (
        <Routes>
          <Route path="/exercises/:slug" element={<ExerciseModal exercise={exercise} />} />
        </Routes>
      )}
    </>
  )
}
