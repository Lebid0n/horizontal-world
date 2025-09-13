import { IoMenu } from 'react-icons/io5'
import HeaderSearchBar from './HeaderSearchBar'
import { useMediaQuery } from 'react-responsive'

export default function Header() {
  const isDesktop = useMediaQuery({ minWidth: 1024 })

  return (
    <header className="w-full h-[15vh] flex bg-bg-tertiary items-center p-5">
      {isDesktop && (
        <div className="w-[30vw]">
          <h1 className="text-3xl font-bold select-none">Horizontal World</h1>
        </div>
      )}
      <div className="w-full flex justify-center">
        <HeaderSearchBar />
      </div>
      {isDesktop ? (
        <div className="w-[30%] flex justify-center items-center gap-4 bg-bg-tertiary">
          <div className="w-12 h-12 bg-accent-300 rounded-full"></div>
          <div className="w-12 h-12 bg-accent-300 rounded-full"></div>
          <div className="w-12 h-12 bg-accent-300 rounded-full"></div>
        </div>
      ) : (
        <div className="w-[30%] h-full flex justify-center items-center bg-bg-tertiary">
          <div className="h-[60%] aspect-square bg-accent-300 rounded-full flex items-center justify-center">
            <IoMenu size={30} />
          </div>
        </div>
      )}
    </header>
  )
}
