import { useCallback, useEffect, useRef, useState } from 'react';

export type TUseIntersect<T> = (
  onIntersect?: TObserveEvent,
  option?: IntersectionObserverInit
) => [React.RefObject<T>, boolean];

export type TObserveEvent = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

const useObserver = <T extends Element>(
  onIntersect?: TObserveEvent,
  option?: IntersectionObserverInit,
  once = false
): [React.RefObject<T>, boolean] => {
  const target = useRef<T>(null);
  const [isView, setIsView] = useState(false);

  // FUNCTION 대상이 화면에서 관찰되는지 체크
  const checkIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        if (onIntersect) {
          onIntersect(entry, observer);
        }
        setIsView(true);
      } else {
        setIsView(false);
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current) {
      if (once)
        observer = new IntersectionObserver(
          onIntersectOnce<T>(checkIntersect, once, target),
          { ...option }
        );
      else
        observer = new IntersectionObserver(checkIntersect, {
          ...option,
        });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [
    target,
    option,
    option?.root,
    option?.threshold,
    option?.rootMargin,
    checkIntersect,
    once,
  ]);

  return [target, isView];
};

const onIntersectOnce = <T extends Element = Element>(
  callback: IntersectionObserverCallback,
  triggerOnce: boolean,
  target: React.RefObject<T>
) => {
  return (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    callback(entries, observer);

    if (
      target.current &&
      triggerOnce &&
      !!entries?.some((entry) => entry.isIntersecting)
    ) {
      observer.unobserve(target.current);
    }
  };
};

export default useObserver;
