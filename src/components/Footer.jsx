import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-100 rounded-t-[2.5rem] pt-20 pb-12 md:pt-24 md:pb-14">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-display font-bold text-white mb-6 block tracking-[-0.02em] active:scale-[0.97] transition-transform duration-100 ease-out w-fit">M.P Textile</Link>
            <p className="text-stone-400 leading-relaxed text-sm">
              Your trusted partner for premium fabrics and garments. Delivering quality since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base text-white mb-6 tracking-[-0.01em]">Quick Links</h4>
            <ul className="space-y-4 text-stone-300">
              <li><Link to="/about" className="inline-block hover:text-amber-400 transition-colors duration-200 active:scale-[0.97]">About Us</Link></li>
              <li><Link to="/products" className="inline-block hover:text-amber-400 transition-colors duration-200 active:scale-[0.97]">Our Products</Link></li>
              <li><Link to="/gallery" className="inline-block hover:text-amber-400 transition-colors duration-200 active:scale-[0.97]">Gallery</Link></li>
              {/* NEW CONTENT */}
              <li><Link to="/contact" className="inline-block hover:text-amber-400 transition-colors duration-200 active:scale-[0.97]">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base text-white mb-6 tracking-[-0.01em]">Legal</h4>
            <ul className="space-y-4 text-stone-300">
              <li><a href="#" className="inline-block hover:text-amber-400 transition-colors duration-200 active:scale-[0.97]">Privacy Policy</a></li>
              <li><a href="#" className="inline-block hover:text-amber-400 transition-colors duration-200 active:scale-[0.97]">Terms of Service</a></li>
              <li><a href="#" className="inline-block hover:text-amber-400 transition-colors duration-200 active:scale-[0.97]">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base text-white mb-6 tracking-[-0.01em]">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="group w-11 h-11 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md flex items-center justify-center hover:bg-amber-600 hover:ring-amber-500 transition-colors duration-200 active:scale-[0.97]" aria-label="Facebook">
                <Facebook size={20} className="text-stone-300 group-hover:text-white" />
              </a>
              <a href="#" className="group w-11 h-11 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md flex items-center justify-center hover:bg-amber-600 hover:ring-amber-500 transition-colors duration-200 active:scale-[0.97]" aria-label="Twitter">
                <Twitter size={20} className="text-stone-300 group-hover:text-white" />
              </a>
              <a href="#" className="group w-11 h-11 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md flex items-center justify-center hover:bg-amber-600 hover:ring-amber-500 transition-colors duration-200 active:scale-[0.97]" aria-label="Instagram">
                <Instagram size={20} className="text-stone-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative pt-8 text-center">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
          <p className="text-stone-400 text-sm tracking-[0.01em]">© {new Date().getFullYear()} Global Textiles. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
