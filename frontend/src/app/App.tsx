import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from '@/shared/layout/Layout'
import ExercisesPage from '@/pages/exercises/ui/ExercisesPage'
import UserProfilePage from '@/pages/user-profile/ui/UserProfilePage'
import ExerciseModal from '@/pages/exercises/ui/ExerciseModal'
import ExercisePage from '@/pages/exercises/ui/ExercisePage'
import LandingPage from '@/pages/landing-page/ui/LandingPage'

export default function App() {
  const location = useLocation()
  const previousLocation = location.state?.location
  const exercise = location.state?.exercise

  return (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/exercises" element={<ExercisesPage />} />
          <Route path="/profile/:id" element={<UserProfilePage />} />
          {!previousLocation && <Route path="/exercises/:slug" element={<ExercisePage />} />}
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
