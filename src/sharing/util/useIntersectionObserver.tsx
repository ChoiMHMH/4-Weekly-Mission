<<<<<<< HEAD
import { useRef, useState } from "react";
import { useEnhancedEffect } from "./useEnhancedEffect";
=======
import { useLayoutEffect, useRef, useState } from "react";
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee

export const useIntersectionObserver = <T extends HTMLElement>(
  once: boolean = false,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

<<<<<<< HEAD
  useEnhancedEffect(() => {
=======
  useLayoutEffect(() => {
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (once && entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref?.current) {
      observer.observe(ref.current!);
    }

    return () => {
      observer.disconnect();
    };
  }, [options, once]);
<<<<<<< HEAD

=======
>>>>>>> 50171e98d424c44bb3c59d272d8e6e0538e98aee
  return { ref, isIntersecting };
};
