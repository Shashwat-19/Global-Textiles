import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';

const steps = [
  { title: 'Source', description: 'We identify the right mills and manufacturers for the fabric you need.' },
  { title: 'Inspect', description: 'Every lot is checked before it is packed and released.' },
  { title: 'Ship', description: 'We coordinate packing, paperwork and delivery to your door.' },
];

const AboutPage = () => {
  const reduce = useReducedMotion();
  const spring = { type: 'spring', bounce: 0, duration: 0.5 };
  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: reduce ? { duration: 0.3 } : { ...spring, delay },
  });

  return (
    <div className="pt-24">
      {/* NEW CONTENT: page header band */}
      <section className="bg-stone-50 pt-20 pb-12 md:pt-28 md:pb-16">
        <motion.div {...fade()} className="container mx-auto px-6 text-center">
          <span className="text-amber-600 font-semibold uppercase tracking-[0.12em] text-sm mb-4 block">Who We Are</span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-stone-900 leading-[1.05] tracking-[-0.02em]">About Us</h1>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-[1.5]">
            A textile agency built on sourcing, quality and long-term partnerships.
          </p>
        </motion.div>
      </section>

      <About />
      <WhyChooseUs />

      {/* NEW CONTENT: how we work */}
      <section className="py-32 md:py-40 bg-stone-50">
        <div className="container mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-20">
            <span className="text-amber-600 font-semibold uppercase tracking-[0.12em] text-sm mb-4 block">How We Work</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-stone-900 leading-[1.08] tracking-[-0.02em]">From Mill to Doorstep</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                {...fade(index * 0.08)}
                className="bg-stone-100/70 backdrop-blur-xl p-10 rounded-[2rem] ring-1 ring-stone-200/80 shadow-[0_20px_50px_-25px_rgba(42,37,30,0.2)]"
              >
                <span className="font-display text-5xl font-bold text-amber-600 leading-none tracking-[-0.02em]">0{index + 1}</span>
                <h3 className="text-2xl font-semibold mt-10 mb-4 text-stone-900 font-display leading-[1.15] tracking-[-0.02em]">{step.title}</h3>
                <p className="text-stone-600 leading-[1.5]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW CONTENT: closing CTA */}
      <section className="pb-32 md:pb-40 bg-stone-50">
        <motion.div
          {...fade()}
          className="container mx-auto px-6"
        >
          <div className="bg-stone-100/80 backdrop-blur-xl rounded-[2rem] ring-1 ring-stone-200/80 shadow-[0_30px_60px_-30px_rgba(42,37,30,0.3)] px-8 py-16 md:px-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-[1.08] tracking-[-0.02em]">Ready to talk about your next order?</h2>
            <p className="text-stone-600 mt-6 max-w-xl mx-auto text-lg leading-[1.5]">
              Tell us what you are looking for and our team will get back to you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center mt-10 rounded-full bg-stone-900 text-stone-50 px-8 py-4 font-semibold transition-transform duration-100 active:scale-[0.97] hover:bg-amber-700"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
