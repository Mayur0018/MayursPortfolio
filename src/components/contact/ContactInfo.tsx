import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.section 
      className="flex overflow-hidden flex-col flex-1 shrink justify-center py-5 basis-0 min-w-60 max-md:max-w-full"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col flex-1 justify-center w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <header className="w-full text-black max-md:max-w-full">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight max-md:max-w-full">
              Let&apos;s talk for <br />
              <span className="font-extrabold">Something special</span>
            </h2>
          </header>
          <p className="mt-5 text-base tracking-wide leading-6 text-zinc-500 max-md:max-w-full">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
        </div>
        <address className="mt-10 w-full text-2xl md:text-3xl font-semibold tracking-tight leading-none text-black whitespace-nowrap max-md:max-w-full not-italic">
          <motion.a 
            href="mailto:mayurnish18@gmail.com" 
            className="text-black max-md:max-w-full hover:underline hover:text-gray-700 transition-colors block mb-4"
            whileHover={{ x: 5 }}
          >
            mayurnish18@gmail.com
          </motion.a>
          <motion.a 
            href="tel:9106481092" 
            className="block text-black max-md:max-w-full hover:underline hover:text-gray-700 transition-colors"
            whileHover={{ x: 5 }}
          >
            9106481092
          </motion.a>
        </address>
      </div>
    </motion.section>
  );
}
