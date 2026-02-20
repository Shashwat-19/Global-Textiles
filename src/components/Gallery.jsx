import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

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

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedItem = galleryItems.find(item => item.id === selectedId);

  return (
    <section id="gallery" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-700/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-semibold uppercase tracking-wider text-sm mb-2 block">Visual Stories</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">The Art of Textiles</h2>
          <p className="text-stone-400 mt-4 max-w-2xl mx-auto text-lg">
            A glimpse into our world of color, texture, and design. Click to explore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl ${item.span === 'col-span-2' ? 'md:col-span-2' : ''}`}
              onClick={() => setSelectedId(item.id)}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <h3 className="text-xl font-display font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedId(null)}
          >
            <button 
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelectedId(null)}
            >
                <X size={32} />
            </button>
            
            <motion.img 
                key={selectedId}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedItem?.src} 
                alt={selectedItem?.title}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} 
            />
            
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
                <h3 className="text-2xl font-display font-bold text-white">{selectedItem?.title}</h3>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
