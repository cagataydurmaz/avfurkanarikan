"use client";

import { useEffect } from "react";

// Ana sayfadaki [data-reveal] / [data-reveal-line] öğelerini görünür olduklarında bir kez canlandırır.
// İçerik HTML'de baştan görünür; yalnızca JS çalışır ve "hareketi azalt" kapalıysa gizlenip belirir.
export default function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    const SELECTOR = "[data-reveal],[data-reveal-line]";

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const track = (el: Element) => {
      if (el.classList.contains("is-visible") || el.classList.contains("is-shown")) return;
      io.observe(el);
    };

    // Yüklenirken zaten ekranda olanlar animasyonsuz kalsın (yanıp sönme olmasın).
    document.querySelectorAll(SELECTOR).forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-shown");
      else track(el);
    });
    root.classList.add("reveal-ready");

    // Sonradan eklenen öğeler (ör. "Tümünü gör" kartları)
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.matches(SELECTOR)) track(n);
          n.querySelectorAll(SELECTOR).forEach(track);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
