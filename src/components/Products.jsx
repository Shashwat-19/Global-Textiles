import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: "Fine Fabrics",
    image: "/assets/fabric.jpeg",
    description: "Top-tier dyed fabrics including Polyester and Viscose. Perfect for industrial use and premium fashion."
  },
  {
    id: 2,
    title: "Exquisite Sarees",
    image: "/assets/saree.jpeg",
    description: "Intricate weaves and bridal collections. Featuring velvet, silk blends, and rich georgettes."
  },
  {
    id: 3,
    title: "Designer Kurtis",
    image: "/assets/suit.jpeg",
    description: "Contemporary styles meeting traditional comfort. Available in stitched and semi-stitched variants."
  },
  {
    id: 4,
    title: "Premium Shirting",
    image: "/assets/shirting.jpeg",
    description: "Crisp cottons and durable blends for the modern gentleman. Digital and mill prints available."
  }
];

const Products = () => {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm mb-2 block">Our Collection</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900">Curated for Excellence</h2>
          <p className="text-stone-600 mt-4 max-w-2xl mx-auto text-lg">
            From raw materials to finished masterpieces, discover our diverse range of textile solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-[450px]"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-2xl font-bold text-white mb-2">{product.title}</h3>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                  <p className="text-stone-200 text-sm leading-relaxed mb-4">{product.description}</p>
                  <a 
                    href="#contact" 
                    className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-white text-sm hover:bg-white hover:text-stone-900 transition-colors duration-300"
                  >
                    Inquire Now
                  </a>
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
