import { useEffect, useRef, useState } from "react";

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) {
      const reveals = el.querySelectorAll(".scroll-reveal, .stagger-children");
      reveals.forEach((r) => observer.observe(r));
      return () => reveals.forEach((r) => observer.unobserve(r));
    }
  }, []);

  return ref;
};

export default useScrollReveal;
