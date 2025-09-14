import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx'
import { useMediaQuery } from 'react-responsive'

export default function HeaderSearchBar() {
  const isMobile = useMediaQuery({ maxWidth: 639 })
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

  return isMobile ? (
    <div className="w-full h-[15vh] flex justify-start items-center bg-bg-tertiary">
      {/* Кнопка поиска */}
      <button className="w-15 aspect-square flex justify-center items-center rounded-full bg-accent-200">
        <IoSearch size={35} />
      </button>
    </div>
  ) : (
    <div className="w-full h-[15vh] flex justify-center items-center bg-bg-tertiary">
      {/* Кнопка поиска */}
      <button
        onClick={handleSearch}
        disabled={!searchBarText.trim()}
        className="w-[15%] max-w-20 h-15 flex justify-center items-center rounded-l-4xl 
                   bg-accent-200 transition-[0.5s] hover:bg-accent-300 disabled:cursor-not-allowed cursor-pointer"
      >
        <IoSearch size={35} />
      </button>

      {/* Поле ввода */}
      <input
        type="text"
        value={searchBarText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder={isMobile ? '?' : 'Новые горизонты?'}
        className="w-[70%] h-15 max-w-[70%] pl-4 bg-accent-200 
                   text-text-primary placeholder-text-secondary 
                   transition-[0.5s] hover:bg-accent-300 focus:bg-accent-400 outline-0"
      />

      {/* Кнопка очистки */}
      {searchBarText === '' ? (
        <button
          onClick={clearSearch}
          disabled={!searchBarText}
          className="w-[15%] max-w-20 h-15 flex justify-center items-center rounded-r-4xl 
                     bg-accent-200 transition-[0.5s] hover:bg-accent-300 disabled:cursor-not-allowed cursor-pointer"
        />
      ) : (
        <button
          onClick={clearSearch}
          disabled={!searchBarText}
          className="w-[15%] max-w-20 h-15 flex justify-center items-center rounded-r-4xl 
                     bg-accent-200 transition-[0.5s] hover:bg-accent-300 disabled:cursor-not-allowed"
        >
          <RxCross1 size={35} />
        </button>
      )}
    </div>
  )
}
