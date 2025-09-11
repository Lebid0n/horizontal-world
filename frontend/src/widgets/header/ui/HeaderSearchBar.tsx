import { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
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
    if (e.key === 'Enter') {
      if (searchBarText.trim()) {
        console.log('Searching for:', searchBarText)
      }
    }
  }

  return (
    <div className="w-[40vw] h-[15vh] flex justify-center items-center bg-bg-tertiary">
      <button
        onClick={handleSearch}
        disabled={!searchBarText.trim()}
        className="w-[10%] h-[45%] flex justify-center items-center rounded-l-4xl bg-accent-200 transition-[0.5s] hover:bg-accent-300 disabled:cursor-not-allowed"
      >
        <CiSearch className="w-[1.5vw] h-[1.5vw]" />
      </button>

      <input
        type="text"
        value={searchBarText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Новые горизонты?"
        className="w-[70%] h-[45%] p-4 bg-accent-200 text-text-primary placeholder-text-secondary transition-[0.5s] hover:bg-accent-300 focus:bg-accent-400 outline-0"
      />

      <div className="w-[10%] h-[45%] flex justify-center items-center bg-accent-200 rounded-r-4xl transition-[0.5s] hover:bg-accent-300">
        {searchBarText == '' ? (
          <button
            onClick={clearSearch}
            disabled={!searchBarText}
            className="flex justify-center items-center disabled:cursor-not-allowed"
          ></button>
        ) : (
          <button
            onClick={clearSearch}
            disabled={!searchBarText}
            className="flex justify-center items-center disabled:cursor-not-allowed"
          >
            <RxCross1 className="w-[1.5vw] h-[1.5vw]" />
          </button>
        )}
      </div>
    </div>
  )
}
