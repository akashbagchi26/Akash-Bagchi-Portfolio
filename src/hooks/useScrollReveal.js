import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — triggers 'visible' state when element enters viewport.
 * @param {object} options - IntersectionObserver options
 * @returns {{ ref, visible }}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // Only animate once
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px", ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

/**
 * useScrollRevealList — returns a ref + array of visible states for staggered items.
 * @param {number} count - number of items
 * @param {number} staggerMs - delay between each item
 */
export function useScrollRevealList(count, staggerMs = 120) {
  const ref = useRef(null);
  const [visibleItems, setVisibleItems] = useState(Array(count).fill(false));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger reveal each item
          for (let i = 0; i < count; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * staggerMs);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, staggerMs]);

  return { ref, visibleItems };
}
