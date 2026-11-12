import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Hero from '../components/Hero';

// NEW CONTENT: teaser data reuses existing product titles and images from the Products and Gallery components
const featured = [
  { title: 'Fine Fabrics', image: '/assets/fabric.jpeg' },
  { title: 'Exquisite Lehngas', image: '/assets/saree.jpeg' },
  { title: 'Designer Kurtis', image: '/assets/suit.jpeg' },
  { title: 'Premium Printing', image: '/assets/shirting.jpeg' },
];

const galleryTeaser = [
  { title: 'Position Prints', image: '/assets/position-prints.png' },
  { title: 'Laces', image: '/assets/laces.png' },
  { title: 'Dupattas', image: '/assets/dupattas.png' },
];

// Critically damped by default: no overshoot, settles smoothly.
const spring = { type: 'spring', bounce: 0, duration: 0.5 };

const Home = () => {
  const reduceMotion = useReducedMotion();

  // Reveal: opacity-only fade when reduced motion is requested
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
    whileInView: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: reduceMotion ? { duration: 0.3 } : { ...spring, delay },
  });

  return (
    <>
      <Hero />

      {/* NEW CONTENT: intro strip */}
      <section className="bg-stone-50 py-20 md:py-28">
        <motion.div {...reveal()} className="container mx-auto px-6 max-w-4xl text-center">
          <p className="font-display text-3xl md:text-5xl font-semibold text-stone-900 leading-[1.1] tracking-[-0.02em]">
            Surat craftsmanship, bridging the gap to the world since 2010.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 px-6 py-3 bg-stone-100 border border-stone-200 text-stone-800 font-medium rounded-full shadow-[0_10px_24px_-14px_rgba(42,37,30,0.35)] hover:bg-stone-200 active:scale-[0.97] [transition:transform_100ms_ease-out,background-color_300ms_ease]"
          >
            About Global Textiles
          </Link>
        </motion.div>
      </section>

      {/* NEW CONTENT: featured collection row */}
      <section className="bg-stone-100 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div {...reveal()} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-amber-600 font-semibold uppercase tracking-[0.14em] text-xs md:text-sm mb-3 block">Featured Collection</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.05]">A glimpse of the range</h2>
            </div>
            <Link
              to="/products"
              className="self-start md:self-auto px-6 py-3 bg-stone-900 text-stone-50 font-medium rounded-full hover:bg-stone-800 active:scale-[0.97] [transition:transform_100ms_ease-out,background-color_300ms_ease]"
            >
              View all products
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featured.map((item, index) => (
              <motion.div key={item.title} {...reveal(reduceMotion ? 0 : index * 0.08)}>
                <Link
                  to="/products"
                  className="group relative block rounded-[1.5rem] overflow-hidden h-72 md:h-96 shadow-[0_12px_32px_-14px_rgba(42,37,30,0.35)] active:scale-[0.97] transition-transform duration-100 ease-out"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,37,30,0.85)] via-[rgba(42,37,30,0.2)] to-transparent" />
                  <h3 className="absolute bottom-0 left-0 right-0 p-5 md:p-6 font-display text-lg md:text-xl font-semibold text-stone-50 tracking-[-0.01em] leading-[1.15]">
                    {item.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW CONTENT: gallery teaser */}
      <section className="bg-stone-50 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div {...reveal()} className="text-center mb-14">
            <span className="text-amber-600 font-semibold uppercase tracking-[0.14em] text-xs md:text-sm mb-3 block">Gallery</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.05]">Details up close</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {galleryTeaser.map((item, index) => (
              <motion.div key={item.title} {...reveal(reduceMotion ? 0 : index * 0.08)}>
                <Link
                  to="/gallery"
                  className="group relative block rounded-[1.5rem] overflow-hidden h-64 md:h-80 bg-stone-200 shadow-[0_12px_32px_-14px_rgba(42,37,30,0.3)] active:scale-[0.97] transition-transform duration-100 ease-out"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 px-4 py-1.5 rounded-full bg-stone-50/80 backdrop-blur-md text-stone-900 text-sm font-medium">
                    {item.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...reveal()} className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block px-6 py-3 bg-stone-100 border border-stone-200 text-stone-800 font-medium rounded-full hover:bg-stone-200 active:scale-[0.97] [transition:transform_100ms_ease-out,background-color_300ms_ease]"
            >
              Open the gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* NEW CONTENT: closing call-to-action band */}
      <section className="bg-stone-100 py-24 md:py-28">
        <motion.div {...reveal()} className="container mx-auto px-6">
          <div className="rounded-[2rem] bg-stone-200/70 border border-stone-300/60 backdrop-blur-xl px-8 py-16 md:py-20 text-center shadow-[0_24px_56px_-28px_rgba(42,37,30,0.4)]">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-stone-900 tracking-[-0.03em] leading-[1.02]">
              Let’s talk about your next order
            </h2>
            <p className="text-stone-700 mt-6 max-w-xl mx-auto text-lg leading-[1.5]">
              Tell us what you are looking for and reach out to our team.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-10 px-8 py-4 bg-amber-600 text-stone-50 font-semibold rounded-full shadow-[0_12px_28px_-12px_rgba(42,37,30,0.5)] hover:bg-amber-700 active:scale-[0.97] [transition:transform_100ms_ease-out,background-color_300ms_ease]"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
