import { motion } from "framer-motion";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = "" }: NavigationProps) {
  const navItems = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#project" },
    { label: "Contact Me", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav 
      className={`flex gap-12 items-center max-sm:hidden ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((item) => (
        <motion.a
          key={item.label}
          href={item.href}
          className="relative text-base font-medium text-black cursor-pointer group"
          variants={itemVariants}
          whileHover={{ y: -2 }}
        >
          {item.label}
          <motion.span
            className="absolute left-0 -bottom-1 h-[2px] w-full bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
            style={{ originX: 0 }}
          />
        </motion.a>
      ))}
    </motion.nav>
  );
}
