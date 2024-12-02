import { useEffect, useState } from "react";

/**
 * 현재 화면 너비가 인자로 받은 media query string을 만족하는지 여부를 판단하는 커스텀 훅
 * @param {string} query - media query string, ex. "(max-width: 768px)"
 * @returns {boolean | null} 컴포넌트가 마운트되기 전에는 null, 마운트된 후에는 화면 너비가 query 조건에 부합하는지 여부
 * @example
 * ```
 * export default function Example() {
 *  const isDesktop = useMediaQuery("(min-width: 768px)");
 *    // 컴포넌트 마운트되기 전
 *    if (isDesktop === null) {
 *      return null;
 *    }
 *  
 *    if (isDesktop) {
 *      return <Desktop />;
 *    }
 *  
 *    return <Mobile />;
 *  }
 * ```
 */
export default function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean | null>(null);

  function handleChange(e: MediaQueryListEvent) {
    setMatches(e.matches);
  }

  useEffect(() => {
    const mediaQueryList = matchMedia(query);
    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);

  return matches;
}
