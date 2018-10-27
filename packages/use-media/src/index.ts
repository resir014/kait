import { useState, useEffect } from 'react'

// Yeah, I know, I took this straight off of Ryan's slide.
export default function useMedia(query: string): boolean {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  useEffect(
    () => {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }

      const listener = () => setMatches(media.matches)
      media.addListener(listener)

      return () => media.removeListener(listener)
    },
    [query]
  )

  return matches
}
