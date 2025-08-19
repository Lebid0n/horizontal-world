// react
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//css
import './index.css'
// router
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// pages
import HomePage from '../pages/home/ui/HomePage'
import ProjectInfoPage from '../pages/project-info/ui/ProjectInfoPage'
import AuthPage from '../pages/auth/ui/AuthPage'
import UserProfilePage from '../pages/user-profile/ui/UserProfilePage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<ProjectInfoPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
