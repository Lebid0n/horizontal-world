import { useState } from 'react'
import type { ChangeEvent, KeyboardEvent, MouseEvent } from 'react'
import { CiSearch } from 'react-icons/ci'
import { RxCross1 } from 'react-icons/rx'
import { useMediaQuery } from 'react-responsive'

export default function HeaderSearchBar() {
  const isDesktop = useMediaQuery({minWidth: 1024})
  const [searchBarText, setSearchBarText] = useState('')

  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (searchBarText.trim()) {
      console.log('Searching for:', searchBarText)
    }
  }

  const clearSearch = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSearchBarText('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarText(e.target.value)
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (searchBarText.trim()) {
        console.log('Searching for:', searchBarText)
      }
    }
  }

  return (
    <div className="w-full h-[15vh] flex justify-center items-center bg-bg-tertiary">
      <button
        onClick={handleSearch}
        disabled={!searchBarText.trim()}
        className="w-[10%] h-[45%] flex justify-center items-center rounded-l-4xl bg-accent-200 transition-[0.5s] hover:bg-accent-300 disabled:cursor-not-allowed"
      >
        <CiSearch className="w-[50%] h-[50%]" />
      </button>

      <input
        type="text"
        value={searchBarText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        placeholder={isDesktop ? "Новые горизонты?" : "?"}
        className="w-[80%] h-[45%] max-w-[70%] pl-4 bg-accent-200 text-text-primary placeholder-text-secondary transition-[0.5s] hover:bg-accent-300 focus:bg-accent-400 outline-0"
      />
      {searchBarText == '' ? (
        <button
          onClick={clearSearch}
          disabled={!searchBarText}
          className="w-[10%] h-[45%] flex justify-center items-center rounded-r-4xl bg-accent-200 transition-[0.5s] hover:bg-accent-300 disabled:cursor-not-allowed"
        ></button>
      ) : (
        <button
          onClick={clearSearch}
          disabled={!searchBarText}
          className="w-[10%] h-[45%] flex justify-center items-center rounded-r-4xl bg-accent-200 transition-[0.5s] hover:bg-accent-300 disabled:cursor-not-allowed"
        >
          <RxCross1 className="w-[50%] h-[50%]" />
        </button>
      )}
    </div>
  )
}
