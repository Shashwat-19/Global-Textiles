import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Gallery from '../components/Gallery';

// Critically damped by default: no overshoot, settles smoothly.
const spring = { type: 'spring', bounce: 0, duration: 0.5 };

const GalleryPage = () => {
  const reduceMotion = useReducedMotion();
  const enter = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } }
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: spring };

  return (
    <div className="pt-24 bg-stone-50">
      {/* NEW CONTENT */}
      <header className="container mx-auto px-6 pt-12 md:pt-20 pb-12 md:pb-16">
        <motion.div initial={enter.initial} animate={enter.animate} transition={enter.transition}>
          <span className="text-amber-700 font-semibold uppercase tracking-[0.14em] text-xs md:text-sm mb-3 block">Gallery</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.02]">Our Gallery</h1>
          <p className="text-stone-600 mt-6 max-w-2xl text-lg leading-[1.5]">
            A closer look at the fabrics, prints and occasion wear we work with.
          </p>
        </motion.div>
      </header>

      <Gallery />

      {/* NEW CONTENT */}
      <section className="container mx-auto px-6 pb-24 md:pb-32">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.98 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0.3 } : spring}
          className="glass rounded-[2rem] p-10 md:p-16 text-center ring-1 ring-stone-900/10"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.1]">Seen something you like?</h2>
          <p className="text-stone-600 mt-4 max-w-xl mx-auto text-lg leading-[1.5]">
            Get in touch and tell us which pieces caught your eye.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 rounded-full bg-stone-900 px-7 py-3.5 font-semibold text-stone-50 transition-colors duration-300 hover:bg-stone-800 active:scale-[0.97]"
          >
            Contact us
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default GalleryPage;
