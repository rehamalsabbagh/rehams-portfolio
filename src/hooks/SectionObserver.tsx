import { useState, useEffect, useRef } from "react";

export const useSectionObserver = (threshold = 0.3) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We set it to true when it enters, and false when it leaves
        setIsVisible(entry.isIntersecting);
      },
      { threshold },
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold]);

  return { sectionRef, isVisible };
};
