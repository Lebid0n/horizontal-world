import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'

export default function HeaderSearchBar() {
  const [searchBarText, setSearchBarText] = useState('')

  const handleSearch = () => {
    if (searchBarText.trim()) {
      console.log('Searching for:', searchBarText)
    }
  }

  const clearSearch = () => {
    setSearchBarText('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarText(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchBarText.trim()) {
      console.log('Searching for:', searchBarText)
    }
  }

  return (
    <>
      {/* Мобильная версия (до sm) */}
      <div className="flex sm:hidden w-full h-[15vh] justify-start items-center bg-bg-tertiary">
        <button className="w-15 aspect-square flex justify-center items-center rounded-full bg-accent-200">
          <IoSearch size={35} />
        </button>
      </div>

      <div className="hidden sm:flex w-full h-[15vh] justify-center items-center bg-bg-tertiary">
        {/* Кнопка поиска */}
        <button
          onClick={handleSearch}
          disabled={!searchBarText.trim()}
          className="w-[15%] max-w-20 h-15 2xl:h-20 flex justify-center items-center rounded-l-4xl 
                     bg-accent-200 transition-colors duration-300 
                     hover:bg-accent-300 disabled:cursor-not-allowed"
        >
          <IoSearch className='w-10 h-10 2xl:w-13 2xl:h-13' />
        </button>

        {/* Поле ввода */}
        <input
          type="text"
          value={searchBarText}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Новые горизонты?"
          className="w-[70%] h-15 2xl:h-20 pl-4 bg-accent-200 
                     text-text-primary placeholder-text-secondary 
                     transition-colors duration-300 hover:bg-accent-300 focus:bg-accent-400 outline-0
                     2xl:text-2xl"
        />

        {/* Кнопка очистки */}
        {searchBarText === '' ? (
          <button
            disabled
            className="w-[15%] max-w-20 h-15 2xl:h-20 flex justify-center items-center rounded-r-4xl 
                       bg-accent-200 cursor-not-allowed"
          />
        ) : (
          <button
            onClick={clearSearch}
            className="w-[15%] max-w-20 h-15 2xl:h-20 flex justify-center items-center rounded-r-4xl 
                       bg-accent-200 transition-colors duration-300 hover:bg-accent-400"
          >
            <RxCross1 className='w-10 h-10 2xl:w-13 2xl:h-13'  />
          </button>
        )}
      </div>
    </>
  )
}
