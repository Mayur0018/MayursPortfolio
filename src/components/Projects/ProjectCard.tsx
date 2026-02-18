import { motion } from "framer-motion";
import ProjectImage from "./ProjectImage";

interface ProjectCardProps {
  number: string;
  title: string;
  description: string | string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  liveUrl: string;
}

export default function ProjectCard({
  number,
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition,
  liveUrl,
}: ProjectCardProps) {

  const isLeft = imagePosition === "left";

  const renderDescription = () => {
    if (Array.isArray(description)) {
      return description.map((text, index) => (
        <p
          key={`${number}-desc-${index}`}
          className="text-neutral-400 mb-4 leading-relaxed"
        >
          {text}
        </p>
      ));
    }

    return (
      <p className="text-neutral-400 mb-6 leading-relaxed">
        {description}
      </p>
    );
  };

  return (
    <motion.article
      className="flex items-center gap-16 max-lg:flex-col"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Image */}
      <motion.div
        className={`flex-1 ${
          isLeft ? "order-1" : "order-2 max-lg:order-1"
        }`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <ProjectImage src={imageSrc} alt={imageAlt} />
      </motion.div>

      {/* Content */}
      <div
        className={`flex-1 ${
          isLeft ? "order-2" : "order-1 max-lg:order-2"
        }`}
      >
        <motion.div 
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {number}
        </motion.div>

        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6"
          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {renderDescription()}
        </motion.div>

        <motion.a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ rotate: 45, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          →
        </motion.a>
      </div>
    </motion.article>
  );
}
