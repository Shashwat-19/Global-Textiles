import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center min-h-[500px] rounded-2xl overflow-hidden shadow-2xl"
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
            <div className="absolute inset-0 bg-stone-900/75" />
            <img 
              src="/assets/hero-bg.png" 
              alt="M.P Textile Agency" 
              className="relative z-10 w-full max-w-md px-8 object-contain"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-2 block">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Weaving a Legacy <br/>of <span className="text-amber-700 italic">Quality</span>
            </h2>
             <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              With a rich heritage in the textile industry, <strong className="text-stone-800">M.P Textile Agency</strong> stands as a pillar of reliability and innovation. We don't just supply fabric; we curate experiences. By bridging the gap between Surat's premier manufacturers and discerning global clients, we ensure that every yard of fabric tells a story of excellence.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed text-lg">
              Our commitment goes beyond commerce. We are dedicated to sustainable practices, ethical sourcing, and fostering long-term partnerships that empower our clients to create their best work.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="border-l-4 border-amber-600 pl-4">
                <p className="text-3xl font-display font-bold text-stone-900">15+</p>
                <p className="text-sm text-stone-500 uppercase tracking-wide">Years Experience</p>
              </div>
              <div className="border-l-4 border-stone-300 pl-4">
                <p className="text-3xl font-display font-bold text-stone-900">500+</p>
                <p className="text-sm text-stone-500 uppercase tracking-wide">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
