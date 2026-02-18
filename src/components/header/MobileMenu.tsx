"use client";
import { useState, useEffect } from "react";
import  { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  className?: string;
}

export default function MobileMenu({ className = "" }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const original = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = original;
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  const menuVariants = {
    closed: { x: "100%", transition: { damping: 30 } },
    open: { x: 0, transition: { damping: 30, staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <div className={`relative hidden max-sm:block ${className}`}>
      <motion.button
        onClick={toggleMenu}
        className="p-3 bg-black text-white rounded-full shadow-lg hover:bg-neutral-800 transition-colors z-[60] relative"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        whileTap={{ scale: 0.9 }}
      >
        <i className={`ti ${isOpen ? "ti-x" : "ti-menu-2"} text-xl`} />
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[40]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              className="fixed right-0 top-0 h-screen w-[85%] max-w-[320px] bg-white z-[50] shadow-[-10px_0_30px_rgba(0,0,0,0.1)] flex flex-col pt-24"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col p-6 space-y-2">
                {[
                  { label: "Home", href: "#home" },
                  { label: "About Me", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#project" },
                  { label: "Contact Me", href: "#contact" },
                ].map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="block px-6 py-4 rounded-xl text-xl font-bold text-black hover:bg-neutral-50 transition-colors border-b border-neutral-100"
                    onClick={() => setIsOpen(false)}
                    variants={itemVariants}
                    whileHover={{ x: 10, color: "#555" }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto p-12 text-center text-neutral-400 text-sm">
                © 2026 Mayur Portfolio
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
