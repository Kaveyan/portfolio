import { useEffect, useRef } from 'react';

export function useParallax() {
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const heroBg = heroBgRef.current;
    const heroContent = heroContentRef.current;
    const glyph = heroBg?.querySelector<HTMLElement>('.glyph');
    const hasHover = window.matchMedia('(hover:hover)').matches;
    const heroSection = document.querySelector<HTMLElement>('.hero');

    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const render = () => {
      if (heroBg) heroBg.style.transform = `translateY(${scrollY * 0.25}px)`;
      if (heroContent)
        heroContent.style.transform = `translateY(${scrollY * -0.08}px) translate(${mouseX * -10}px, ${mouseY * -8}px)`;
      if (glyph) glyph.style.transform = `translate(${mouseX * 24}px, ${mouseY * 18}px)`;
    };

    let ticking = false;
    const onScroll = () => {
      scrollY = window.scrollY;
      document.querySelectorAll<HTMLElement>('.entry').forEach((entry) => {
        const r = entry.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = 1 - Math.min(Math.max(r.top / vh, 0), 1);
        entry.style.transform = `translateX(${(1 - progress) * -14}px)`;
      });
      render();
      ticking = false;
    };

    const scrollHandler = () => {
      if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    onScroll();

    if (hasHover && heroSection && heroContent) {
      const onMouseMove = (e: MouseEvent) => {
        const { innerWidth: w, innerHeight: h } = window;
        mouseX = e.clientX / w - 0.5;
        mouseY = e.clientY / h - 0.5;
        render();
      };
      const onMouseLeave = () => { mouseX = 0; mouseY = 0; render(); };
      heroSection.addEventListener('mousemove', onMouseMove);
      heroSection.addEventListener('mouseleave', onMouseLeave);
      return () => {
        window.removeEventListener('scroll', scrollHandler);
        heroSection.removeEventListener('mousemove', onMouseMove);
        heroSection.removeEventListener('mouseleave', onMouseLeave);
      };
    }
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return { heroBgRef, heroContentRef };
}
