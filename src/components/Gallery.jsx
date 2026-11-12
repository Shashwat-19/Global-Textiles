import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';

const galleryItems = [
  { id: 1, type: 'image', src: '/assets/gallery_upload_1.jpg', title: 'Exclusive Collection', subtitle: 'Hand-picked designs for the elite' },
  { id: 2, type: 'image', src: '/assets/gallery_upload_2.jpg', title: 'Premium Textures', subtitle: 'Feel the difference in every thread', span: 'col-span-2' },
  { id: 3, type: 'image', src: '/assets/gallery_upload_3.jpg', title: 'Artisanal Weaves', subtitle: 'Traditional techniques, modern appeal' },
  { id: 4, type: 'image', src: '/assets/imported-fabrics.png', title: 'Imported Fabrics', subtitle: 'Beadwork, sequins and embroidery for occasion wear' },
  { id: 5, type: 'image', src: '/assets/position-prints.png', title: 'Position Prints', subtitle: 'Florals, zardozi and mill-fresh patterns' },
  { id: 6, type: 'image', src: '/assets/dupattas.png', title: 'Dupattas', subtitle: 'Sheer ombres with position prints and lace borders' },
  { id: 7, type: 'image', src: '/assets/laces.png', title: 'Laces', subtitle: 'Floral and botanical laces for ethnic wear' },
  { id: 8, type: 'image', src: '/assets/fabric.jpeg', title: 'Fine Fabrics', subtitle: 'Dyed and RFD fabrics in every blend' },
  { id: 9, type: 'image', src: '/assets/saree.jpeg', title: 'Lehngas', subtitle: 'Bridal and occasion wear in velvet and georgettes' },
];

// Critically damped by default: no overshoot, settles smoothly.
const spring = { type: 'spring', bounce: 0, duration: 0.5 };

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  // Where the lightbox image grows from / returns to: the tile that was clicked.
  const [origin, setOrigin] = useState({ x: 0, y: 0, scale: 0.8 });
  const reduceMotion = useReducedMotion();

  const selectedItem = galleryItems.find(item => item.id === selectedId);

  const openItem = (item, el) => {
    const r = el.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    setOrigin({
      x: r.left + r.width / 2 - vw / 2,
      y: r.top + r.height / 2 - vh / 2,
      scale: Math.min(0.9, Math.max(0.3, r.width / (vw * 0.9))),
    });
    setSelectedId(item.id);
  };

  const fromSource = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, x: origin.x, y: origin.y, scale: origin.scale, filter: 'blur(16px)' };
  const toRest = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' };

  return (
    <section id="gallery" className="pb-24 md:pb-32 bg-stone-50 text-stone-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-stone-300/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-amber-700 font-semibold uppercase tracking-[0.14em] text-xs md:text-sm mb-3 block">Visual Stories</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.05]">The Art of Textiles</h2>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto text-lg leading-[1.5]">
            A glimpse into our world of color, texture, and design. Click to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 auto-rows-[18.75rem]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.97 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={reduceMotion ? { duration: 0.3 } : { ...spring, delay: index * 0.08 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97, transition: { duration: 0.1 } }}
              className={`relative group cursor-pointer overflow-hidden rounded-[1.5rem] bg-stone-100 shadow-[0_18px_40px_-20px_rgba(42,37,30,0.45)] ring-1 ring-stone-900/10 ${item.span === 'col-span-2' ? 'md:col-span-2' : ''}`}
              onClick={(e) => openItem(item, e.currentTarget)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7 md:p-8">
                <h3 className="text-xl font-display font-bold text-stone-50 tracking-[-0.01em] translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">{item.title}</h3>
                <p className="text-stone-200 text-sm leading-[1.5] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={reduceMotion ? { duration: 0.2 } : { duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            {/* Warm dimmed scrim with a materialising blur */}
            <div className="absolute inset-0 bg-stone-900/85"></div>
            <motion.div
              className="absolute inset-0 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={reduceMotion ? { duration: 0.2 } : { duration: 0.4, ease: 'easeOut' }}
            ></motion.div>

            <button
                className="glass-dark absolute top-5 right-5 z-10 rounded-full p-3 text-white/80 hover:text-white transition-colors duration-300 active:scale-[0.97]"
                onClick={() => setSelectedId(null)}
            >
                <X size={24} />
            </button>

            <motion.img
                key={selectedId}
                initial={fromSource}
                animate={toRest}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: origin.x, y: origin.y, scale: origin.scale, filter: 'blur(8px)' }}
                transition={reduceMotion ? { duration: 0.2 } : spring}
                src={selectedItem?.src}
                alt={selectedItem?.title}
                className="relative max-w-full max-h-[90vh] object-contain rounded-[1.25rem] shadow-2xl shadow-stone-950/60"
                onClick={(e) => e.stopPropagation()}
            />

            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: reduceMotion ? 0 : 0.15 }}
            >
                <h3 className="glass-dark rounded-full px-6 py-2 text-xl md:text-2xl font-display font-bold text-white tracking-[-0.01em]">{selectedItem?.title}</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
