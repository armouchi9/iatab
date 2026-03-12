"use client";
import { useEffect } from "react";

export default function IaTabClient() {
  useEffect(() => {
    /* ══════════════════════════════════════════════
       SMOOTH SCROLL — JS only, no CSS conflict
    ══════════════════════════════════════════════ */
    function scrollTo(id: string) {
      const el = document.querySelector(id);
      if (!el) return;
      window.scrollTo({ top: (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' });
    }
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const h = a.getAttribute('href');
        if (h === '#') return;
        e.preventDefault();
        scrollTo(h!);
        closeMob();
      });
    });

    /* ══════════════════════════════════════════════
       NAV SCROLL EFFECT
    ══════════════════════════════════════════════ */
    const nav = document.getElementById('nav');
    const scrollHandler = () => {
      nav?.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });

    /* ══════════════════════════════════════════════
       MOBILE NAV
    ══════════════════════════════════════════════ */
    const burger   = document.getElementById('burger');
    const mobNav   = document.getElementById('mob-nav');
    const mobClose = document.getElementById('mob-close');

    function openMob() {
      mobNav?.classList.add('open');
      burger?.classList.add('open');
      burger?.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function closeMob() {
      mobNav?.classList.remove('open');
      burger?.classList.remove('open');
      burger?.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    const burgerClick = () => mobNav?.classList.contains('open') ? closeMob() : openMob();
    const closeClick  = () => closeMob();
    const mobNavClick = (e: Event) => { if (e.target === mobNav) closeMob(); };
    const keyDown     = (e: KeyboardEvent) => { if (e.key === 'Escape') closeMob(); };

    burger?.addEventListener('click', burgerClick);
    mobClose?.addEventListener('click', closeClick);
    mobNav?.addEventListener('click', mobNavClick);
    document.addEventListener('keydown', keyDown);

    /* ══════════════════════════════════════════════
       SCROLL REVEAL
    ══════════════════════════════════════════════ */
    const observed = new WeakSet();
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -56px 0px' });

    function observe(el: Element) {
      if (observed.has(el)) return;
      observed.add(el);
      io.observe(el);
    }
    document.querySelectorAll('.reveal').forEach(observe);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
      burger?.removeEventListener('click', burgerClick);
      mobClose?.removeEventListener('click', closeClick);
      mobNav?.removeEventListener('click', mobNavClick);
      document.removeEventListener('keydown', keyDown);
      io.disconnect();
    };
  }, []);

  return null;
}
