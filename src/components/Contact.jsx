import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-stone-50 rounded-full z-0 mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-amber-50 rounded-full z-0 mix-blend-multiply filter blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
             <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-2 block">Get in Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900">Let's Create Together</h2>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-lg">
                We're here to answer your questions, provide quotes, and fulfill your textile needs.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Map */}
            <motion.div 
                 initial={{ opacity: 0, x: -30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px] border-4 border-white transform hover:scale-[1.01] transition-transform duration-500"
            >
                <iframe 
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.42041935905!2d72.73989390235316!3d21.15923984381882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1663712211993!5m2!1sen!2sus" 
                    allowFullScreen="" 
                    loading="lazy" 
                    title="Map showing Surat, Gujarat"
                ></iframe>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                className="bg-stone-50 p-12 rounded-3xl shadow-lg border border-stone-100"
            >
                <h3 className="text-3xl font-display font-bold mb-8 text-stone-900">Contact Information</h3>
                
                <div className="space-y-8">
                    <div className="flex items-start space-x-6 group">
                        <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 text-amber-600">
                           <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-stone-900 mb-1">Phone Number</h4>
                            <a href="tel:+919265758481" className="block text-stone-600 hover:text-amber-700 transition font-medium">+91 92657 58481</a>
                            <a href="tel:+919374721184" className="block text-stone-600 hover:text-amber-700 transition font-medium">+91 93747 21184</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                        <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 text-amber-600">
                           <Mail size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-stone-900 mb-1">Email Address</h4>
                            <a href="mailto:Mptextilesurat@gmail.com" className="text-stone-600 hover:text-amber-700 transition font-medium">Mptextilesurat@gmail.com</a>
                        </div>
                    </div>

                    <div className="flex items-start space-x-6 group">
                         <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 text-amber-600">
                           <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-stone-900 mb-1">Our Office</h4>
                            <p className="text-stone-600 font-medium leading-relaxed">C-1402/03 Kohinoor Textile Market<br/>Near Ambaji Market, Ring Road,<br/>Surat 395002</p>
                        </div>
                    </div>
                </div>

                 <div className="mt-12 pt-8 border-t border-stone-200">
                    <h4 className="font-bold text-lg text-stone-900 mb-4">Business Hours</h4>
                    <ul className="text-stone-600 space-y-2">
                        <li className="flex justify-between"><span>Monday - Saturday:</span> <span className="font-medium">9:00 AM - 8:00 PM</span></li>
                        <li className="flex justify-between"><span>Sunday:</span> <span className="font-medium text-amber-600">Closed</span></li>
                    </ul>
                </div>
            </motion.div>
        </div>
      </div>
      
       {/* Bottom CTA */}
       <section className="mt-24 bg-stone-900 py-24 relative overflow-hidden text-center">
            <div className="absolute inset-0 opacity-20 bg-[url('/assets/fabric.jpeg')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="container mx-auto px-6 relative z-10">
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">Start Your Next Project</h2>
                <p className="text-stone-300 mb-10 max-w-2xl mx-auto text-xl">Let's weave success together. Contact us today to discuss your requirements.</p>
                <a href="tel:+919265758481" className="inline-block bg-amber-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-amber-700 transition-all transform hover:scale-105 shadow-2xl hover:shadow-amber-600/50">
                    Contact Us Today
                </a>
            </div>
        </section>
    </section>
  );
};

export default Contact;
