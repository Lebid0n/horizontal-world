import { useEffect } from 'react'

export default function useClickOutside(
  refs: React.RefObject<HTMLElement | null>[],
  callback: () => void,
  disabled: boolean = false
) {
  useEffect(() => {
    if (disabled) return

    const handleClick = (e: MouseEvent) => {
      const isInside = refs.some((ref) => ref.current?.contains(e.target as Node))

      if (!isInside) callback()
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [refs, callback, disabled])
}
