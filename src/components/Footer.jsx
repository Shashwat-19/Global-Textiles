import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-stone-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="text-2xl font-display font-bold text-white mb-6 block">M.P Textile</a>
            <p className="text-stone-400 leading-relaxed text-sm">
              Your trusted partner for premium fabrics and garments. Delivering quality since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#about" className="hover:text-amber-500 transition">About Us</a></li>
              <li><a href="#products" className="hover:text-amber-500 transition">Our Products</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#" className="hover:text-amber-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Sitemap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors group" aria-label="Facebook">
                <Facebook size={20} className="text-stone-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors group" aria-label="Twitter">
                <Twitter size={20} className="text-stone-400 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors group" aria-label="Instagram">
                <Instagram size={20} className="text-stone-400 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-stone-500 text-sm">© {new Date().getFullYear()} Global Textiles. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
