import Header from '@/widgets/header/ui/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center w-full">
        <Outlet />
      </main>
      <footer className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full border-t border-t-accent">
          <h1 className="text-3xl font-bold">Horizontal World footer</h1>
        </div>
      </footer>
    </>
  )
}
