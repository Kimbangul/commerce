import { useCallback, useEffect, useRef, useState } from 'react';

export type TUseIntersect<T> = (
  onIntersect?: TObserveEvent,
  option?: IntersectionObserverInit
) => [React.RefObject<T>, boolean];

export type TObserveEvent = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

export interface IUseObserverProps {
  onIntersect?: TObserveEvent;
  option?: IntersectionObserverInit;
  once?: false;
}

const useObserver = <T extends Element>(props: IUseObserverProps) => {
  const target = useRef<T>(null);
  const [isView, setIsView] = useState(false);

  // FUNCTION 대상이 화면에서 관찰되는지 체크
  const checkIntersect: IntersectionObserverCallback = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        if (props.onIntersect) {
          props.onIntersect(entry, observer);
        }
        setIsView(true);
      } else {
        setIsView(false);
      }
    },
    [props.onIntersect]
  );

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

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target.current) {
      if (props.once)
        observer = new IntersectionObserver(
          onIntersectOnce<T>(checkIntersect, once, target),
          { ...props.option }
        );
      else
        observer = new IntersectionObserver(checkIntersect, {
          ...props.option,
        });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [
    target,
    props.option,
    props.option?.root,
    props.option?.threshold,
    props.option?.rootMargin,
    checkIntersect,
    props.once,
  ]);
};

export default useObserver;
