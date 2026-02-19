import { motion } from 'framer-motion';
import { Award, Globe, Truck } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Unmatched Quality",
    description: "We rigorously vet every manufacturer and inspect every lot. Our quality control is your peace of mind, ensuring zero defects."
  },
  {
    icon: Globe,
    title: "Vast Supplier Network",
    description: "Gain access to an exclusive network of over 200+ mills. From rare heritage weaves to modern synthetics, if it exists, we source it."
  },
  {
    icon: Truck,
    title: "Swift Logistics",
    description: "Time is money. Our optimized logistics network ensures your orders are processed, packed, and delivered with speed and precision."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-stone-50 relative">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-2 block">Why Choose Us</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900">Partner with Excellence</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-lg">
            Experience the distinct advantages of working with an industry leader committed to your success.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 group"
            >
              <div className="bg-amber-50 text-amber-600 rounded-2xl h-16 w-16 flex items-center justify-center mb-8 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                <feature.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-stone-900 font-display">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
