import { useEffect, useRef } from "react";

export function useCountAnimation(end, start = 0, duration = 2000) {
  const element = useRef();

  const fastStepTime = Math.abs(Math.floor(duration / 2 / (end - 10 - start))); // 처음 1초는 빠르게
  const slowStepTime = Math.abs(Math.floor(1000 / 10)); // 나머지 1초는 느리게

  useEffect(() => {
    const { current } = element;
    let currentNumber = start;
    const fastCounter = setInterval(() => {
      currentNumber += 1;
      current.innerHTML = currentNumber;
      if (currentNumber === end - 10) {
        clearInterval(fastCounter);
        const slowCounter = setInterval(() => {
          currentNumber += 1;
          current.innerHTML = currentNumber;
          if (currentNumber === end) {
            clearInterval(slowCounter);
          }
        }, slowStepTime);
      }
    }, fastStepTime);
  }, []);

  return { ref: element };
}
