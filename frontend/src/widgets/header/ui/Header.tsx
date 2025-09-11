import HeaderSearchBar from "./HeaderSearchBar"

export default function Header() {
  return(
    <header className="w-[100vw] h-[15vh] flex bg-bg-secondary">
      <div className="w-[20vw] h-full flex justify-center items-center p-4 bg-bg-tertiary">
        <h1 className="text-3xl font-bold select-none">Horizonts World</h1>
      </div>
      <HeaderSearchBar />
      <div className="w-[40vw] h-full flex justify-end items-center p-4 gap-4 bg-bg-tertiary">
        <div className="w-[5vw] h-[5vw] bg-accent-300 rounded-full"></div>
        <div className="w-[5vw] h-[5vw] bg-accent-300 rounded-full"></div>
        <div className="w-[5vw] h-[5vw] bg-accent-300 rounded-full"></div>
      </div>
    </header>
  )
}