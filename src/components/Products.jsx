import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    title: "Fine Fabrics",
    image: "/assets/fabric.jpeg",
    description: "Top tier dyed and RFD fabrics including Polyester, Nylon, Viscose, PV, NV and Pure fabrics."
  },
  {
    id: 2,
    title: "Exquisite Lehngas",
    image: "/assets/saree.jpeg",
    description: "Intricate weaves and bridal collections. Lehngas in velvet, silk blends, and rich georgettes."
  },
  {
    id: 3,
    title: "Designer Kurtis",
    image: "/assets/suit.jpeg",
    description: "Contemporary styles meeting traditional comfort. Available in stitched and semi-stitched variants."
  },
  {
    id: 4,
    title: "Premium Printing",
    image: "/assets/shirting.jpeg",
    description: "Crisp cottons and durable blends for the modern gentleman. Digital and mill prints available."
  },
  {
    id: 5,
    title: "Imported Fabrics",
    image: "/assets/imported-fabrics.png",
    description: "Premium imported bases with intricate beadwork, sequins, and embroidery. Ideal for bridal and occasion wear."
  },
  {
    id: 6,
    title: "Position Prints",
    image: "/assets/position-prints.png",
    description: "Strategically placed motifs and all-over embroidered designs. Florals, zardozi, and mill-fresh patterns."
  },
  {
    id: 7,
    title: "Dupattas",
    image: "/assets/dupattas.png",
    description: "Sheer ombres and delicate bases with position prints, sequins, and lace borders. Perfect pairing for lehngas."
  },
  {
    id: 8,
    title: "Laces",
    image: "/assets/laces.png",
    description: "Floral and botanical laces in varied shades. Embroidered nets and borders for dupattas and ethnic wear."
  }
];

// Critically damped by default: no overshoot, settles smoothly.
const spring = { type: 'spring', bounce: 0, duration: 0.5 };

const Products = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="products" className="py-32 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-amber-600 font-semibold uppercase tracking-[0.14em] text-xs md:text-sm mb-3 block">Our Collection</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 tracking-[-0.02em] leading-[1.1]">Curated for Excellence</h2>
          <p className="text-stone-600 mt-6 max-w-2xl mx-auto text-lg leading-[1.5]">
            From raw materials to finished masterpieces, discover our diverse range of textile solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 24 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={reduceMotion ? { duration: 0.3 } : { ...spring, delay: index * 0.08 }}
              whileHover={reduceMotion ? undefined : { y: -6, transition: spring }}
              whileTap={reduceMotion ? undefined : { scale: 0.97, transition: { duration: 0.1 } }}
              className="group relative rounded-[1.75rem] overflow-hidden cursor-pointer h-[28rem] shadow-[0_12px_32px_-14px_rgba(42,37,30,0.35)] hover:shadow-[0_32px_64px_-24px_rgba(42,37,30,0.55)] transition-shadow duration-500 ease-out"
            >
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <h3 className="font-display text-2xl font-bold text-white mb-2 tracking-[-0.01em] leading-[1.15]">{product.title}</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-stone-100/90 text-sm leading-[1.5] mb-5">{product.description}</p>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-2.5 bg-white/15 backdrop-blur-xl border border-white/25 rounded-full text-white text-sm font-medium shadow-inner hover:bg-white hover:text-stone-900 transition-[color,background-color,transform] duration-300 ease-out active:scale-[0.97]"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
