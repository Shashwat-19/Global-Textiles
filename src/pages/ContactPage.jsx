import { motion, useReducedMotion } from 'framer-motion';
import { Inbox, MessageCircle, FileText } from 'lucide-react';
import Contact from '../components/Contact';

// NEW CONTENT: generic steps, no invented claims
const steps = [
  { icon: Inbox, title: 'We receive your enquiry', text: 'Share your requirements with us by phone, email or a visit to our office.' },
  { icon: MessageCircle, title: 'We respond', text: 'Our team gets back to you to understand what you need.' },
  { icon: FileText, title: 'We quote', text: 'You receive a clear quote for the fabrics and garments you need.' },
];

const ContactPage = () => {
  const reduce = useReducedMotion();
  const spring = reduce ? { duration: 0.3 } : { type: 'spring', bounce: 0, duration: 0.5 };

  return (
    <div className="pt-24 bg-stone-50">
      {/* NEW CONTENT: page header band */}
      <header className="container mx-auto px-6 pt-12 md:pt-20 text-center">
        <span className="text-amber-700 font-semibold uppercase tracking-[0.12em] text-sm mb-3 block">Contact</span>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.02]">Contact Us</h1>
        <p className="text-stone-600 mt-6 max-w-xl mx-auto text-lg leading-relaxed">Reach our team for enquiries, quotes and fabric requirements.</p>
      </header>

      <Contact />

      {/* NEW CONTENT: what happens next strip */}
      <section className="container mx-auto px-6 pb-24 md:pb-32">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 tracking-[-0.02em] leading-tight mb-10 text-center">What happens next</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: reduce ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring, delay: reduce ? 0 : i * 0.08 }}
              className="bg-stone-100/70 backdrop-blur-xl backdrop-saturate-150 p-8 rounded-[2rem] shadow-[0_24px_60px_-24px_rgba(42,37,30,0.18)] ring-1 ring-white/80"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 shadow-[0_4px_12px_-4px_rgba(42,37,30,0.2)] flex items-center justify-center text-amber-600">
                  <Icon size={20} />
                </div>
                <span className="font-display text-sm font-semibold text-stone-400 tracking-[0.04em]">0{i + 1}</span>
              </div>
              <h3 className="font-bold text-lg text-stone-900 mb-2 tracking-[-0.01em]">{title}</h3>
              <p className="text-stone-600 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
