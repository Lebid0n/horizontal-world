import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home/ui/HomePage'
import ProjectInfoPage from '../pages/project-info/ui/ProjectInfoPage'
import AuthPage from '../pages/auth/ui/AuthPage'
import UserProfilePage from '../pages/user-profile/ui/UserProfilePage'
import Layout from '@/shared/layout/Layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/info" element={<ProjectInfoPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
