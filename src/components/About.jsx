import { motion, useReducedMotion } from 'framer-motion';

const About = () => {
  const reduce = useReducedMotion();
  const spring = { type: 'spring', bounce: 0, duration: 0.5 };

  return (
    <section id="about" className="py-32 md:py-40 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: reduce ? 0 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={reduce ? { duration: 0.3 } : spring}
            className="relative flex items-center justify-center min-h-[30rem] rounded-[2rem] overflow-hidden shadow-[0_40px_80px_-30px_rgba(42,37,30,0.35)] ring-1 ring-stone-900/5"
          >
            {/* Fabric collage background */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-3">
              <div className="col-span-2 row-span-2 bg-cover bg-center" style={{ backgroundImage: "url('/assets/fabric.jpeg')" }} />
              <div className="bg-cover bg-center" style={{ backgroundImage: "url('/assets/saree.jpeg')" }} />
              <div className="bg-cover bg-center" style={{ backgroundImage: "url('/assets/imported-fabrics.png')" }} />
              <div className="bg-cover bg-center" style={{ backgroundImage: "url('/assets/position-prints.png')" }} />
              <div className="bg-cover bg-center" style={{ backgroundImage: "url('/assets/dupattas.png')" }} />
              <div className="col-span-2 bg-cover bg-center" style={{ backgroundImage: "url('/assets/laces.png')" }} />
              <div className="bg-cover bg-center" style={{ backgroundImage: "url('/assets/suit.jpeg')" }} />
              <div className="bg-cover bg-center" style={{ backgroundImage: "url('/assets/shirting.jpeg')" }} />
            </div>
            <div className="absolute inset-0 bg-stone-900/75 backdrop-blur-[2px]" />
            <img
              src="/assets/hero-bg.png"
              alt="M.P Textile Agency"
              className="relative z-10 w-full max-w-md px-8 object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reduce ? 0 : 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={reduce ? { duration: 0.3 } : spring}
          >
            <span className="text-amber-600 font-semibold uppercase tracking-[0.12em] text-sm mb-4 block">Our Story</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-stone-900 mb-8 leading-[1.08] tracking-[-0.02em]">
              Weaving a Legacy <br/>of <span className="text-amber-700 italic">Quality</span>
            </h2>
             <p className="text-stone-600 mb-6 leading-[1.5] text-lg md:text-xl tracking-normal">
              With a rich heritage in the textile industry, <strong className="text-stone-800 font-semibold">M.P Textile Agency</strong> stands as a pillar of reliability and innovation. We don't just supply fabric; we curate experiences. By bridging the gap between Surat's premier manufacturers and discerning global clients, we ensure that every yard of fabric tells a story of excellence.
            </p>
            <p className="text-stone-600 mb-10 leading-[1.5] text-lg md:text-xl tracking-normal">
              Our commitment goes beyond commerce. We are dedicated to sustainable practices, ethical sourcing, and fostering long-term partnerships that empower our clients to create their best work.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="rounded-3xl bg-amber-50/70 backdrop-blur-md px-7 py-6 min-w-[11rem] ring-1 ring-stone-900/5">
                <p className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-none tracking-[-0.02em]">15+</p>
                <p className="mt-3 text-sm text-stone-500 uppercase tracking-[0.08em]">Years Experience</p>
              </div>
              <div className="rounded-3xl bg-stone-100/70 backdrop-blur-md px-7 py-6 min-w-[11rem] ring-1 ring-stone-900/5">
                <p className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-none tracking-[-0.02em]">500+</p>
                <p className="mt-3 text-sm text-stone-500 uppercase tracking-[0.08em]">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
