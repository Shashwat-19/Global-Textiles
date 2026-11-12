import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Smoothed progress keeps parallax calm; reduced motion gets no travel, only the fade
  const smoothProgress = useSpring(scrollYProgress, { type: 'spring', bounce: 0, duration: 0.5 });
  const y = useTransform(smoothProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const spring = reduceMotion
    ? { duration: 0.3 }
    : { type: 'spring', bounce: 0, duration: 0.5, delay: 0.2 };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-50">
      {/* Parallax Background: warm ink-toned scrim instead of flat black */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-[rgba(42,37,30,0.55)]" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center text-stone-50">
        <motion.div
           initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
           animate={{ opacity: 1, y: 0 }}
           transition={spring}
        >
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm md:text-base mb-6 block">
            Est. 2010 • Surat, Gujarat
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-[1.02] tracking-[-0.03em]">
            The Fabric of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">
              Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 text-stone-100/90 font-normal leading-[1.5] tracking-normal">
            Bridging the gap between Surat’s finest craftsmanship and the world.
            We deliver premium quality fabrics with unmatched reliability and style.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-amber-600 text-stone-50 font-semibold rounded-full hover:bg-amber-700 shadow-[0_12px_28px_-12px_rgba(42,37,30,0.5)] hover:shadow-[0_18px_36px_-14px_rgba(180,83,9,0.45)] hover:-translate-y-0.5 active:scale-[0.97] [transition:transform_100ms_ease-out,background-color_300ms_ease,box-shadow_300ms_ease]"
            >
              Explore Collection
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-stone-50/10 border border-stone-50/30 text-stone-50 font-semibold rounded-full backdrop-blur-md hover:bg-stone-50/20 active:scale-[0.97] [transition:transform_100ms_ease-out,background-color_300ms_ease]"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator: one gentle settle after load, no loop */}
      <div className="absolute bottom-10 inset-x-0 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={reduceMotion ? { opacity: 0.7 } : { opacity: 0.7, y: [0, 6, 0] }}
        transition={
          reduceMotion
            ? { opacity: { duration: 0.6, delay: 1.2 } }
            : {
                opacity: { duration: 0.6, delay: 1.2 },
                y: { duration: 1.6, delay: 1.2, ease: 'easeInOut' },
              }
        }
      >
        <svg className="w-6 h-6 text-stone-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
      </div>
    </section>
  );
};

export default Hero;
