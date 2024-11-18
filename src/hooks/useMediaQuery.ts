import { useEffect, useState } from "react";

export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  function handleChange(e: MediaQueryListEvent) {
    setMatches(e.matches)
  }

  useEffect(() => {
    const mediaQueryList = matchMedia(query)
    setMatches(mediaQueryList.matches)
    mediaQueryList.addEventListener('change', handleChange)
    
    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [query]);

  return matches
}
