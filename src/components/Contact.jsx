import { motion, useReducedMotion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const reduce = useReducedMotion();
  const spring = reduce ? { duration: 0.3 } : { type: 'spring', bounce: 0, duration: 0.5 };

  return (
    <section id="contact" className="py-24 md:py-32 bg-stone-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-stone-200 rounded-full z-0 mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-100 rounded-full z-0 mix-blend-multiply filter blur-3xl opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
             <span className="text-amber-700 font-semibold uppercase tracking-[0.12em] text-sm mb-3 block">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.1]">Let's Create Together</h2>
            <p className="text-stone-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
                We're here to answer your questions, provide quotes, and fulfill your textile needs.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Map */}
            <motion.div
                 initial={{ opacity: 0, x: reduce ? 0 : -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={spring}
                className="rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-20px_rgba(42,37,30,0.25)] h-full min-h-[500px] ring-1 ring-white/80 transition-transform duration-500 md:hover:scale-[1.01]"
            >
                <iframe
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://maps.google.com/maps?q=C-1402%2F03+Kohinoor+Textile+Market%2C+Near+Ambaji+Market%2C+Ring+Road%2C+Surat+395002&output=embed&zoom=17"
                    allowFullScreen=""
                    loading="lazy"
                    title="M.P Textile Agency - C-1402/03 Kohinoor Textile Market, Surat"
                ></iframe>
            </motion.div>

            {/* Contact Info */}
            <motion.div
                 initial={{ opacity: 0, x: reduce ? 0 : 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={spring}
                className="bg-stone-100/70 backdrop-blur-xl backdrop-saturate-150 p-10 md:p-12 rounded-[2rem] shadow-[0_24px_60px_-24px_rgba(42,37,30,0.18)] ring-1 ring-white/80"
            >
                <h3 className="text-3xl font-display font-bold mb-10 text-stone-900 tracking-[-0.02em] leading-tight">Contact Information</h3>

                <div className="space-y-8">
                    <div className="flex items-start gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-stone-50 shadow-[0_4px_12px_-4px_rgba(42,37,30,0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 text-amber-600">
                           <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-stone-900 mb-1 tracking-[-0.01em]">Phone Number</h4>
                            <a href="tel:+919265758481" className="block text-stone-600 hover:text-amber-700 transition-colors font-medium">+91 92657 58481</a>
                            <a href="tel:+919374721184" className="block text-stone-600 hover:text-amber-700 transition-colors font-medium">+91 93747 21184</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-stone-50 shadow-[0_4px_12px_-4px_rgba(42,37,30,0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 text-amber-600">
                           <Mail size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-stone-900 mb-1 tracking-[-0.01em]">Email Address</h4>
                            <a href="mailto:Mptextilesurat@gmail.com" className="text-stone-600 hover:text-amber-700 transition-colors font-medium break-all">Mptextilesurat@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-6 group">
                         <div className="w-12 h-12 rounded-2xl bg-stone-50 shadow-[0_4px_12px_-4px_rgba(42,37,30,0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 text-amber-600">
                           <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-stone-900 mb-1 tracking-[-0.01em]">Our Office</h4>
                            <p className="text-stone-600 font-medium leading-relaxed">C-1402/03 Kohinoor Textile Market<br/>Near Ambaji Market, Ring Road,<br/>Surat 395002</p>
                        </div>
                    </div>
                </div>

                 <div className="relative mt-12 pt-10">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
                    <h4 className="font-bold text-lg text-stone-900 mb-4 tracking-[-0.01em]">Business Hours</h4>
                    <ul className="text-stone-600 space-y-3">
                        <li className="flex justify-between"><span>Monday - Saturday:</span> <span className="font-medium">9:00 AM - 8:00 PM</span></li>
                        <li className="flex justify-between"><span>Sunday:</span> <span className="font-medium text-amber-700">Closed</span></li>
                    </ul>
                </div>
            </motion.div>
        </div>
      </div>

       {/* Bottom CTA */}
       <section className="mt-24 md:mt-32 bg-stone-900 py-24 md:py-32 relative overflow-hidden text-center">
            <div className="absolute inset-0 opacity-20 bg-[url('/assets/fabric.jpeg')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-[-0.02em] leading-[1.05]">Start Your Next Project</h2>
                <p className="text-stone-300 mb-12 max-w-2xl mx-auto text-xl leading-relaxed">Let's weave success together. Contact us today to discuss your requirements.</p>
                <a href="tel:+919265758481" className="inline-block bg-amber-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-500 transition-[background-color,box-shadow,transform] duration-150 ease-out active:scale-[0.97] shadow-[0_20px_40px_-12px_rgba(42,37,30,0.5)] hover:shadow-amber-600/40">
                    Contact Us Today
                </a>
            </div>
        </section>
    </section>
  );
};

export default Contact;
