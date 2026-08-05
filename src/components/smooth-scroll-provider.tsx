import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { createContext, useContext, useEffect, useRef, type ReactNode } from "react";
import { scrollState } from "@/lib/scroll-store";

gsap.registerPlugin(ScrollTrigger);

type ScrollToTarget = string | number | HTMLElement;
type ScrollToOptions = { offset?: number };

const LenisContext = createContext<{
  scrollTo: (target: ScrollToTarget, options?: ScrollToOptions) => void;
  setSpeed: (multiplier: number) => void;
} | null>(null);

export function useSmoothScroll() {
  return useContext(LenisContext);
}

export function SmoothScrollProvider({
  children,
  initialWheelMultiplier = 1,
}: {
  children: ReactNode;
  initialWheelMultiplier?: number;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      wheelMultiplier: initialWheelMultiplier,
      touchMultiplier: initialWheelMultiplier,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", (e: { progress: number; velocity: number }) => {
      scrollState.progress = e.progress;
      scrollState.velocity = e.velocity;
      ScrollTrigger.update();
    });

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target: ScrollToTarget, options?: ScrollToOptions) => {
    lenisRef.current?.scrollTo(target, { offset: options?.offset ?? -72 });
  };

  const setSpeed = (multiplier: number) => {
    const lenis = lenisRef.current;
    if (!lenis) return;
    lenis.options.wheelMultiplier = multiplier;
    lenis.options.touchMultiplier = multiplier;
  };

  return <LenisContext.Provider value={{ scrollTo, setSpeed }}>{children}</LenisContext.Provider>;
}
