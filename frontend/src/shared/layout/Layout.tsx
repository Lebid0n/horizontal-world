import Header from '@/widgets/header/ui/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      {/* with the outlet we can render the content of the current subroute
       * so technically the only thing that rerenders is the content in the outlet
       * and the header with the footer stay the same
       */}
      <main className="flex flex-col items-center w-full">
        <Outlet />
      </main>
      {/* footer is here obviously (insert your own) */}
      <footer className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full border-t border-t-accent">
          <h1 className="text-3xl font-bold">Horizontal World footer</h1>
        </div>
      </footer>
    </>
  )
}
