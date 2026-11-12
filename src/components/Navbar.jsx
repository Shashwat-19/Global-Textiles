import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const spring = reduceMotion ? { duration: 0.2 } : { type: 'spring', bounce: 0, duration: 0.5 };

  return (
    <div className="fixed inset-x-0 top-3 md:top-4 z-50 flex justify-center px-3 pointer-events-none">
      <motion.header
        initial={false}
        animate={
          scrolled
            ? {
                scale: 1,
                opacity: 1,
                backgroundColor: 'rgba(250, 246, 238, 0.78)',
                backdropFilter: 'blur(20px) saturate(180%)',
                borderColor: 'rgba(233, 223, 204, 0.8)',
                boxShadow: '0 12px 32px -14px rgba(41, 37, 36, 0.35)',
              }
            : {
                scale: reduceMotion ? 1 : 0.97,
                opacity: 1,
                backgroundColor: 'rgba(250, 246, 238, 0)',
                backdropFilter: 'blur(0px) saturate(100%)',
                borderColor: 'rgba(250, 246, 238, 0)',
                boxShadow: '0 12px 32px -14px rgba(41, 37, 36, 0)',
              }
        }
        transition={spring}
        style={{ transformOrigin: 'top center' }}
        className="pointer-events-auto relative w-full max-w-6xl rounded-3xl border"
      >
        <div className="px-5 md:px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img
              src="/assets/logo.png"
              alt="M.P Textile Agency"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) => `${isActive ? 'text-amber-700' : 'text-stone-600'} hover:text-amber-700 font-medium transition-colors text-sm uppercase tracking-wide relative group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-amber-700 transition-[background-color,box-shadow,transform] duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.97] active:duration-100"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu: trigger and menu share one anchor so the menu opens from the button */}
          <div className="md:hidden relative">
            <button
              className="text-stone-800 focus:outline-none p-2 rounded-full active:scale-[0.97] transition-transform duration-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="mobile-menu"
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.9 }}
                  transition={spring}
                  style={{ transformOrigin: 'top right' }}
                  className="absolute right-0 top-full mt-3 w-56 rounded-3xl bg-stone-50/90 backdrop-blur-xl border border-stone-200/80 shadow-xl p-2"
                >
                  <div className="flex flex-col">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 py-3 rounded-2xl text-stone-600 hover:text-amber-700 hover:bg-stone-900/5 font-medium text-base active:scale-[0.97] transition-transform duration-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.header>
    </div>
  );
};

export default Navbar;
