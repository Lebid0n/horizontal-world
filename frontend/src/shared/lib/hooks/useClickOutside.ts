import { useEffect } from 'react'

export default function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  disabled: boolean = false
) {
  useEffect(() => {
    if (disabled) return

    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback()
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [ref, callback, disabled])
}
