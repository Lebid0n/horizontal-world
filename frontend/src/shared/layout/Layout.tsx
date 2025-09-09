import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      {/* header is here obviously (insert your own) */}
      <header className="flex flex-col items-center">
        <div className="flex flex-col w-full lg:w-4/5 border border-accent p-3">
          <h1 className="text-3xl font-bold">Horizontal World</h1>
        </div>
      </header>
      {/* with the outlet we can render the content of the current subroute
       * so technically the only thing that rerenders is the content in the outlet
       * and the header with the footer stay the same
       */}
      <Outlet />
      {/* footer is here obviously (insert your own) */}
      <footer className="flex flex-col items-center w-full h-screen">
        <div className="flex flex-col w-full lg:w-4/5 border-t border-t-accent">
          <h1 className="text-3xl font-bold">Horizontal World footer</h1>
        </div>
      </footer>
    </>
  )
}
