// react
import HeaderSearchBar from './HeaderSearchBar'
// icons
import { IoMenu } from 'react-icons/io5'
import { TiHome } from 'react-icons/ti'
import { HiTranslate } from 'react-icons/hi'
import { PiUserCircleDuotone } from 'react-icons/pi'

export default function Header() {
  return (
    <header className="w-full h-[15vh] flex bg-bg-tertiary items-center p-5 gap-5">
      {/* Логотип — только десктоп */}
      <div className="hidden lg:block w-[30vw]">
        <h1 className="text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl font-bold select-none">
          Horizontal World
        </h1>
      </div>

      {/* Поиск — всегда */}
      <div className="w-full flex justify-center">
        <HeaderSearchBar />
      </div>

      {/* Десктопное меню */}
      <div className="hidden lg:flex w-[30%] justify-center items-center gap-4 bg-bg-tertiary">
        <button className="w-15 2xl:w-20 aspect-square flex justify-center items-center rounded-full bg-accent-200 transition-[0.5s] hover:bg-accent-300 cursor-pointer">
          <TiHome className="w-10 h-10 2xl:w-13 2xl:h-13" />
        </button>
        <button className="w-15 2xl:w-20 aspect-square flex justify-center items-center rounded-full bg-accent-200 transition-[0.5s] hover:bg-accent-300 cursor-pointer">
          <HiTranslate className="w-10 h-10 2xl:w-13 2xl:h-13" />
        </button>
        <button className="w-15 2xl:w-20 aspect-square flex justify-center items-center rounded-full bg-accent-200 transition-[0.5s] hover:bg-accent-300 cursor-pointer">
          <PiUserCircleDuotone className="w-15 h-15 2xl:w-20 2xl:h-20" />
        </button>
      </div>

      {/* Мобильное меню */}
      <div className="flex lg:hidden w-30 h-full justify-center items-center bg-bg-tertiary">
        <button className="w-15 aspect-square flex justify-center items-center rounded-full bg-accent-200">
          <IoMenu className="w-10 h-10 2xl:w-13 2xl:h-13" />
        </button>
      </div>
    </header>
  )
}
