function throttle<T extends (...args: unknown[]) => void>(
  cb: T,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>) {
    if (timer !== null) return;
    timer = setTimeout(() => {
      cb(args);
      timer = null;
    }, delay);
  };
}

export { throttle };
