import { motion, useReducedMotion } from 'framer-motion';
import { Award, Globe, Truck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Unmatched Quality",
    description: "We rigorously vet every manufacturer. Our quality control is your peace of mind, ensuring zero defects."
  },
  {
    icon: Globe,
    title: "Vast Supplier Network",
    description: "Gain access to an exclusive network of over 200+ mills. From rare heritage weaves to modern synthetics, ",
    descriptionEnd: "if it exists, we source it."
  },
  {
    icon: Truck,
    title: "Swift Logistics",
    description: "From Surat to your doorstep—we coordinate warehousing, customs, and last-mile delivery so your consignments reach you ",
    descriptionEnd: "on time, every time."
  }
];

const WhyChooseUs = () => {
  const reduce = useReducedMotion();
  const spring = { type: 'spring', bounce: 0, duration: 0.5 };

  return (
    <section id="why-us" className="py-32 md:py-40 bg-stone-100 relative overflow-hidden">
       {/* Background Pattern */}
       <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor" className="text-stone-900">
             <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                 <circle cx="2" cy="2" r="2"></circle>
             </pattern>
             <rect width="100" height="100" fill="url(#dot-pattern)"></rect>
          </svg>
       </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduce ? { duration: 0.3 } : spring}
          className="text-center mb-24"
        >
          <span className="text-amber-600 font-semibold uppercase tracking-[0.12em] text-sm mb-4 block">Why Choose Us</span>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-stone-900 leading-[1.08] tracking-[-0.02em]">Partner with Excellence</h2>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-[1.5] tracking-normal">
            Experience the distinct advantages of working with an industry leader committed to your success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, y: reduce ? 0 : 24 }}
               whileInView={{ opacity: 1, y: 0 }}
               whileHover={reduce ? undefined : { y: -4 }}
               viewport={{ once: true }}
               transition={reduce ? { duration: 0.3 } : { ...spring, delay: index * 0.08 }}
               className="bg-stone-50/80 backdrop-blur-xl p-10 rounded-[2rem] shadow-[0_20px_50px_-25px_rgba(42,37,30,0.25)] hover:shadow-[0_35px_70px_-25px_rgba(42,37,30,0.35)] transition-shadow duration-500 ring-1 ring-stone-200/80 group"
            >
              <div className="bg-amber-50 text-amber-600 rounded-2xl h-16 w-16 flex items-center justify-center mb-10 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-stone-900 font-display leading-[1.15] tracking-[-0.02em]">{feature.title}</h3>
              <p className="text-stone-600 leading-[1.5] tracking-normal">
                {feature.description}
                {feature.descriptionEnd ? (
                  <span className="font-semibold underline">{feature.descriptionEnd}</span>
                ) : null}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
