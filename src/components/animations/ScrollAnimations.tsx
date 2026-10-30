'use client';

import { useLayoutEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const revealDefaults = {
  default: { y: 65, duration: 2, ease: 'power2.out' },
  heading: { y: 55, duration: 2.2, ease: 'power3.out' },
  paragraph: { y: 30, duration: 1.8, ease: 'power2.out' },
  eyebrow: { y: 15, duration: 1.5, ease: 'power2.out' },
  link: { y: 20, duration: 1.5, ease: 'power2.out' },
  image: { scale: 1.04, duration: 1.8, ease: 'power2.out' },
} as const;

export default function ScrollAnimations() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      return;
    }

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const elements = gsap.utils.toArray<HTMLElement>('#main-content [data-reveal]');

      elements.forEach((element) => {
        const type = element.dataset.reveal || 'default';
        const settings = revealDefaults[type as keyof typeof revealDefaults] || revealDefaults.default;
        const isImage = type === 'image';
        const start = type === 'heading' ? 'top 90%' : type === 'paragraph' ? 'top 92%' : 'top 90%';
        const duration = isMobile ? Math.min(settings.duration, type === 'heading' ? 2 : 1.8) : settings.duration;
        const movementScale = isMobile ? 0.65 : 1;

        gsap.fromTo(
          element,
          { opacity: 0, y: 'y' in settings ? settings.y * movementScale : 0, scale: 'scale' in settings ? settings.scale : 1 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration,
            ease: settings.ease,
            scrollTrigger: {
              trigger: element,
              start,
              toggleActions: isImage ? 'play none none none' : 'play none none reverse',
              once: isImage,
              invalidateOnRefresh: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('#main-content [data-reveal-group]').forEach((group) => {
        const children = group.querySelectorAll<HTMLElement>('[data-reveal-item]');
        if (!children.length) return;

        gsap.fromTo(
          children,
          { opacity: 0, y: isMobile ? 36 : 55 },
          {
            opacity: 1,
            y: 0,
            duration: isMobile ? 1.6 : 1.8,
            ease: 'power2.out',
            stagger: { each: isMobile ? 0.16 : 0.22, from: 'start' },
            scrollTrigger: {
              trigger: group,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
              invalidateOnRefresh: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>('#main-content [data-parallax]').forEach((element) => {
        gsap.to(element, {
          yPercent: isMobile ? 2 : 4,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8,
            invalidateOnRefresh: true,
          },
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh, { once: true });

    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
