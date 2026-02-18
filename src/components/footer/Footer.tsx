import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div 
      className="bg-black pt-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <footer className="bg-[#131314] w-full max-w-[1350px] mx-auto text-white pt-12 md:pt-16 px-6 sm:px-12 md:px-24 rounded-tl-[40px] rounded-tr-[40px] overflow-hidden">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-12">
          
          {/* Left Section */}
          <motion.div className="lg:col-span-3 space-y-8" variants={itemVariants}>
            <a href="/" className="block">
              <motion.svg
                width="157"
                height="40"
                viewBox="0 0 157 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                whileHover={{ scale: 1.05 }}
              >
                <path
                  d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </a>

            <p className="text-base leading-relaxed text-neutral-400 max-w-sm">
              PrebuiltUI helps you build faster by transforming your design vision
              into fully functional, production-ready UI components.
            </p>

            {/* Social Icons */}
            <div className="flex gap-6">
              {["X", "Github", "Linkedin", "Youtube", "Instagram"].map(
                (icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-white hover:text-white text-sm relative group"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {icon}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                  </motion.a>
                )
              )}
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-12 items-start">
            
            {/* Products */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg mb-6 tracking-wide">Products</h3>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Components</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Icons</a></li>
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={itemVariants}>
              <h3 className="font-bold text-lg mb-6 tracking-wide">Resources</h3>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">PrebuiltUI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blogs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Store</a></li>
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div className="col-span-2 md:col-span-1" variants={itemVariants}>
              <h3 className="font-bold text-lg mb-6 tracking-wide">Company</h3>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vision</a></li>
                <li className="flex items-center gap-2">
                  <a href="#" className="hover:text-white transition-colors">Careers</a>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/50 text-green-500">
                    HIRING
                  </span>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="max-w-7xl mx-auto mt-20 pb-8 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={itemVariants}
        >
          <p className="text-neutral-500 text-sm">© 2026 Mayurs Portfolio</p>
          <p className="text-sm text-neutral-500">All right reserved.</p>
        </motion.div>

        {/* Background Glow Text */}
        <div className="relative pb-10">
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-4xl h-3/4 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
          <motion.h3 
            className="text-center font-black leading-none text-transparent text-[clamp(4rem,18vw,12rem)] [-webkit-text-stroke:1px_rgba(255,255,255,0.1)] mt-10 select-none uppercase"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Mayur Nishad
          </motion.h3>
        </div>

      </footer>
    </motion.div>
  );
};

export default Footer;
