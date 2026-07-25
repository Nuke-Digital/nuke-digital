import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  score: string;
  underscore: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Du brauchst eine Webseite?",
    role: "Jetzt Anfragen!",
    quote: "Du suchst eine Webseite, so modern und cool wie diese?\nKontaktier uns!",
    score: "ab 999€",
    underscore: "Preis unverbindlich"
  },
  {
    name: "Achtung",
    role: "Info",
    quote: "Diese Webseite befindet sich noch im Aufbau",
    score: "",
    underscore: ""
  },
];

interface CardProps {
  t: Testimonial;
}

function Card({ t }: CardProps) {
  return (
    <div
      className="relative w-[260px] sm:w-[340px] md:w-[400px] shrink-0 p-5 sm:p-6 md:p-8 overflow-hidden bg-background-secondary border-border border rounded-xl"
    >
      {/* subtle inner glow / vignette to match reference */}
      <div className="pointer-events-none absolute inset-0 rounded-[28px]" />

      <div className="relative flex items-center gap-3 sm:gap-4">
        <div>
          <p className="text-white font-semibold text-base sm:text-lg leading-tight">
            {t.name}
          </p>
          <p className="text-white/70 text-xs sm:text-sm">{t.role}</p>
        </div>
      </div>

      <p className="relative text-white/90 text-sm sm:text-[15px] leading-relaxed mt-4 sm:mt-6 min-h-[64px] sm:min-h-[72px]">
        {t.quote}
      </p>

      <div className="relative flex items-end justify-between mt-6 sm:mt-10">

        <div className="text-right">
          <p className="text-white text-2xl sm:text-4xl font-bold leading-none tracking-tight">
            {t.score}
          </p>
          <p className="text-white/60 text-[10px] sm:text-xs mt-1">{t.underscore}</p>
        </div>
      </div>
    </div>
  );
}

// Pixels per second the track scrolls — keeps speed visually consistent
// across screen sizes instead of a fixed duration.
const SPEED_PX_PER_SEC = 50;

export default function CardCarousell() {
  const setRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const controls = useAnimationControls();

  // Measure the width of ONE full set of cards (including gaps) so the
  // loop can jump back by exactly that many pixels — this is what makes
  // the wrap invisible, regardless of card size or breakpoint.
  useEffect(() => {
    if (!setRef.current) return;

    const measure = () => {
      if (setRef.current) {
        setSetWidth(setRef.current.getBoundingClientRect().width);
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(setRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!setWidth) return;

    controls.set({ x: 0 });
    controls.start({
      x: -setWidth,
      transition: {
        duration: setWidth / SPEED_PX_PER_SEC,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  }, [setWidth, controls]);

  return (
    <div className="w-full pt-16 overflow-hidden self-end mask-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div className="relative">
        {/* fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" />

        <motion.div className="flex gap-6 w-max" animate={controls}>
          {/* First set — measured for loop width */}
          <div ref={setRef} className="flex gap-6">
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <Card key={`a-${i}`} t={t} />
            ))}
          </div>
          {/* Duplicate set for seamless wrap */}
          <div className="flex gap-6" aria-hidden="true">
            {testimonials.map((t, i) => (
              <Card key={`b-${i}`} t={t} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}