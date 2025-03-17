import { throttle } from "@/utils/events";
import { RefObject, useEffect, useState } from "react";

function useCalculateCenterVisibility(ref: RefObject<HTMLElement> | null) {
  const [centerVisibility, setCenterVisibility] = useState(0); // 0~1 사이 값, 화면 중앙 근처에 얼마나 가까운지

  useEffect(() => {
    const calculateCenterVisibility = () => {
      if (!ref?.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 화면의 중앙점
      const screenCenter = windowHeight / 2;

      const topToCenter = rect.top - screenCenter;
      const bottomToCenter = rect.bottom - screenCenter;

      // 화면 높이의 15%를 transition 구간으로 설정
      // (화면 세로 50% 영역 = 화면 중앙 ± 화면 높이의 15%)
      const transitionRange = windowHeight * 0.15;

      if (topToCenter < transitionRange) {
        setCenterVisibility(1 - topToCenter / transitionRange);
      }
      if (bottomToCenter < transitionRange) {
        setCenterVisibility(bottomToCenter / transitionRange);
      }
    };

    // 초기 계산
    calculateCenterVisibility();

    const throttledCalculateCenterVisibility = throttle(
      calculateCenterVisibility,
      100
    );

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          window.addEventListener(
            "scroll",
            throttledCalculateCenterVisibility,
            {
              passive: true,
            }
          );
        } else {
          window.removeEventListener(
            "scroll",
            throttledCalculateCenterVisibility
          );
        }
      }
    });

    const refEl = ref?.current;
    if (!refEl) return;
    observer.observe(refEl);

    return () => {
      if (!refEl) return;
      observer.unobserve(refEl);
    };
  }, []);

  return {
    centerVisibility,
  };
}

export { useCalculateCenterVisibility };
