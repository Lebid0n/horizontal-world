import { Routes, Route } from 'react-router-dom'
import ProjectInfoPage from '../pages/project-info/ui/ProjectInfoPage'
import Layout from '@/shared/layout/Layout'
import Exercises from '@/pages/exercises/ui/Exercises'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ProjectInfoPage />} />
        <Route path="/exercises" element={<Exercises />} />
      </Route>
    </Routes>
  )
}
