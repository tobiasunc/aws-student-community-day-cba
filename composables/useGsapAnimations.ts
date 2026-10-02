import { nextTick, onBeforeUnmount, onMounted, type Ref } from "vue";

/**
 * Keeps all GSAP work client-side and scopes it to the current layout.
 * The context and matchMedia instances are reverted when the layout unmounts.
 */
export function useGsapAnimations(root: Ref<HTMLElement | null>) {
  let context: { revert: () => void } | undefined;

  onMounted(async () => {
    const [{ gsap }, { ScrollTrigger }] = await Promise.all([
      import("gsap"),
      import("gsap/ScrollTrigger"),
    ]);

    if (!root.value) return;

    await nextTick();

    gsap.registerPlugin(ScrollTrigger);
    context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add(
        {
          desktop: "(min-width: 961px)",
          reducedMotion: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          const mediaCleanups: Array<() => void> = [];
          const reduceMotion = Boolean(conditions?.reducedMotion);
          const revealItems = gsap.utils.toArray<HTMLElement>(
            "[data-gsap-reveal]:not([data-gsap-box])",
          );
          const boxItems = gsap.utils.toArray<HTMLElement>("[data-gsap-box]");

          if (reduceMotion) {
            gsap.set([...revealItems, ...boxItems], { clearProps: "all", autoAlpha: 1 });
            return;
          }

          const heroItems = gsap.utils.toArray<HTMLElement>("[data-gsap-hero]");
          gsap.set(heroItems, { autoAlpha: 0, y: 24 });
          gsap.to(heroItems, {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.08,
            overwrite: true,
            onComplete: () => gsap.set(heroItems, { clearProps: "opacity,visibility" }),
          });

          const heroLines = gsap.utils.toArray<HTMLElement>("[data-gsap-hero-line]");
          if (heroLines.length) {
            gsap.set(heroLines, { autoAlpha: 0, yPercent: 105, rotateX: -70 });
            gsap.to(heroLines, {
              autoAlpha: 1,
              yPercent: 0,
              rotateX: 0,
              transformOrigin: "50% 100%",
              duration: 1,
              ease: "expo.out",
              stagger: 0.12,
              delay: 0.08,
              overwrite: true,
            });
          }

          const animatedImages = gsap.utils.toArray<HTMLElement>(
            "[data-gsap-image]:not([data-gsap-box])",
          );
          animatedImages.forEach((image) => {
            gsap.set(image, { autoAlpha: 0, scale: 0.94, y: 24 });
            gsap.to(image, {
              autoAlpha: 1,
              scale: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: {
                trigger: image,
                start: "top 88%",
                once: true,
              },
              onComplete: () => gsap.set(image, { clearProps: "opacity,visibility,transform" }),
            });

            const onEnter = () =>
              gsap.to(image, {
                scale: 1.035,
                y: -4,
                duration: 0.35,
                ease: "power2.out",
                overwrite: true,
              });
            const onLeave = () =>
              gsap.to(image, {
                scale: 1,
                y: 0,
                duration: 0.45,
                ease: "power2.out",
                overwrite: true,
              });

            image.addEventListener("mouseenter", onEnter);
            image.addEventListener("mouseleave", onLeave);
            mediaCleanups.push(() => {
              image.removeEventListener("mouseenter", onEnter);
              image.removeEventListener("mouseleave", onLeave);
            });
          });

          revealItems.forEach((element, index) => {
            gsap.set(element, {
              autoAlpha: 0,
              y: 70,
              scale: 0.94,
              rotateX: index % 2 ? 4 : -4,
              filter: "blur(5px)",
              transformOrigin: "50% 100%",
            });
            gsap.to(element, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
              filter: "blur(0px)",
              duration: 1.15,
              ease: "expo.out",
              overwrite: true,
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                end: "top 58%",
                toggleActions: "play none none none",
                once: true,
              },
            });
          });

          boxItems.forEach((box, index) => {
            gsap.set(box, {
              autoAlpha: 0,
              y: 90,
              x: index % 2 ? 32 : -32,
              scale: 0.88,
              rotate: index % 2 ? 3 : -3,
              filter: "blur(8px)",
              transformOrigin: "50% 100%",
            });
            gsap.to(box, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              x: 0,
              rotate: 0,
              filter: "blur(0px)",
              duration: 1.15,
              ease: "back.out(1.2)",
              overwrite: true,
              scrollTrigger: {
                trigger: box,
                start: "top 90%",
                toggleActions: "play none none none",
                once: true,
              },
              delay: (index % 5) * 0.08,
            });
          });

          const trackCards = gsap.utils.toArray<HTMLElement>("[data-gsap-track]");
          trackCards.forEach((card) => {
            const onEnter = () =>
              gsap.to(card, { y: -5, scale: 1.015, duration: 0.22, overwrite: true });
            const onLeave = () =>
              gsap.to(card, { y: 0, scale: 1, duration: 0.28, overwrite: true });
            card.addEventListener("mouseenter", onEnter);
            card.addEventListener("mouseleave", onLeave);
            mediaCleanups.push(() => {
              card.removeEventListener("mouseenter", onEnter);
              card.removeEventListener("mouseleave", onLeave);
            });
          });

          const statElements = gsap.utils.toArray<HTMLElement>("[data-gsap-stat]");
          statElements.forEach((element) => {
            const value = element.dataset.value ?? "";
            const match = value.match(/^(\d+)(\+?)$/);
            if (!match) return;

            const counter = { value: 0 };
            gsap.to(counter, {
              value: Number(match[1]),
              duration: 1.2,
              ease: "power2.out",
              snap: { value: 1 },
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true,
              },
              onUpdate: () => {
                element.textContent = `${Math.round(counter.value)}${match[2]}`;
              },
            });
          });

          if (conditions?.desktop) {
            const heroImage = document.querySelector<HTMLElement>("[data-gsap-parallax]");
            if (heroImage) {
              gsap.to(heroImage, {
                yPercent: 8,
                ease: "none",
                scrollTrigger: {
                  trigger: heroImage,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              });
            }
          }

          return () => {
            mediaCleanups.forEach((cleanup) => cleanup());
          };
        },
      );

    }, root.value);
    ScrollTrigger.refresh();
  });

  onBeforeUnmount(() => {
    context?.revert();
  });
}
