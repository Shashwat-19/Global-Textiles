import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Products from '../components/Products';

// Critically damped by default: no overshoot, settles smoothly.
const spring = { type: 'spring', bounce: 0, duration: 0.5 };

const steps = [
  { title: 'Choose', text: 'Browse the collection and pick the fabrics, prints or laces that suit your needs.' },
  { title: 'Enquire', text: 'Share your requirements with us and we will get back to you with the details.' },
  { title: 'Dispatch', text: 'Once confirmed, we prepare and dispatch your order.' },
];

const ProductsPage = () => {
  const reduceMotion = useReducedMotion();
  const reveal = {
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: reduceMotion ? { duration: 0.3 } : spring,
  };

  return (
    <div className="pt-24 bg-stone-50">
      {/* NEW CONTENT: page header band */}
      <header className="container mx-auto px-6 pt-16 pb-12 text-center">
        <motion.div {...reveal}>
          <span className="text-amber-600 font-semibold uppercase tracking-[0.14em] text-xs md:text-sm mb-3 block">Product Range</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.02]">Our Products</h1>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto text-lg leading-[1.5]">
            Fabrics, prints, laces and ethnic wear, all in one place.
          </p>
        </motion.div>
      </header>

      <Products />

      {/* NEW CONTENT: how to order */}
      <section className="container mx-auto px-6 py-24">
        <motion.h2 {...reveal} className="font-display text-3xl md:text-4xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.1] text-center mb-16">
          How to order
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              {...reveal}
              transition={reduceMotion ? { duration: 0.3 } : { ...spring, delay: index * 0.08 }}
              className="rounded-[1.75rem] bg-stone-100 border border-stone-200/70 p-8 md:p-10 shadow-[0_12px_32px_-18px_rgba(42,37,30,0.25)]"
            >
              <span className="font-display text-amber-600 font-bold text-sm tracking-[0.14em] block mb-6">0{index + 1}</span>
              <h3 className="font-display text-2xl font-bold text-stone-900 tracking-[-0.01em] mb-3">{step.title}</h3>
              <p className="text-stone-600 leading-[1.5]">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEW CONTENT: closing CTA */}
      <section className="container mx-auto px-6 pb-32">
        <motion.div
          {...reveal}
          className="rounded-[2rem] bg-stone-200/60 backdrop-blur-xl border border-stone-300/50 px-8 py-16 md:py-20 text-center shadow-[0_24px_64px_-28px_rgba(42,37,30,0.35)]"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.1]">Ready to place an order?</h2>
          <p className="text-stone-600 mt-5 max-w-xl mx-auto text-lg leading-[1.5]">
            Get in touch and tell us what you are looking for.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-10 px-8 py-3.5 bg-stone-900 text-stone-50 rounded-full font-medium shadow-[0_12px_28px_-12px_rgba(42,37,30,0.6)] hover:bg-stone-800 transition-colors duration-300 ease-out active:scale-[0.97]"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ProductsPage;
