import { motion } from "framer-motion";

interface ResumeButtonProps {
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function ResumeButton({ className = "", onClick, href = "/resume.pdf" }: ResumeButtonProps) {
  const commonClasses = `flex gap-2 items-center px-6 py-3 text-white bg-black rounded-lg cursor-pointer max-sm:hidden shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`;
  
  const content = (
    <>
      <span className="text-base font-medium">Resume</span>
      <motion.i 
        className="ti ti-download text-xl" 
        whileHover={{ y: 2 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
      />
    </>
  );

  const motionProps = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    whileHover: { scale: 1.05, backgroundColor: "#333" },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.5 }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download
        className={commonClasses}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button
      onClick={onClick}
      className={commonClasses}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
