// react
import { useMediaQuery } from 'react-responsive'
// elements
import HeaderSearchBar from './HeaderSearchBar'
// icons
import { IoMenu } from 'react-icons/io5'
import { TiHome } from 'react-icons/ti'
import { HiTranslate } from 'react-icons/hi'
import { PiUserCircleDuotone } from 'react-icons/pi'

export default function Header() {
  const isDesctop = useMediaQuery({ minWidth: 1024 })

  return (
    <header className="w-full h-[15vh] flex bg-bg-tertiary items-center p-5 gap-5">
      {isDesctop && (
        <div className="w-[30vw]">
          <h1 className="text-3xl font-bold select-none">Horizontal World</h1>
        </div>
      )}
      <div className="w-full flex justify-center">
        <HeaderSearchBar />
      </div>
      {isDesctop ? (
        <div className="w-[30%] flex justify-center items-center gap-4 bg-bg-tertiary">
          <button className="w-15 h-15 flex justify-center items-center rounded-full bg-accent-200 cursor-pointer">
            <TiHome size={35} />
          </button>
          <button className="w-15 h-15 flex justify-center items-center rounded-full bg-accent-200 cursor-pointer">
            <HiTranslate size={35} />
          </button>
          <button className="w-15 h-15 flex justify-center items-center rounded-full bg-accent-200 cursor-pointer">
            <PiUserCircleDuotone size={50} />
          </button>
        </div>
      ) : (
        <div className="w-30 h-full flex justify-center items-center bg-bg-tertiary">
          <button className="w-15 aspect-square flex justify-center items-center rounded-full bg-accent-200">
            <IoMenu size={35} />
          </button>
        </div>
      )}
    </header>
  )
}
