"use client";
import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface TooltipState {
  visible: boolean;
  x: number;
  y: number;
  text: string;
}

interface TestimonialItem {
  name: string;
  title: string;
  message: string;
  image: string;
}

const Testimonial: React.FC = () => {
  const [tooltip, setTooltip] = useState<TooltipState>({
    visible: false,
    x: 0,
    y: 0,
    text: "",
  });

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const testimonials: TestimonialItem[] = [
    {
      name: "John Doe",
      title: "Frontend Developer",
      message:
        "Integrating this component into our project was seamless and saved us countless hours of development and testing. Highly recommended!",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      name: "Jane Smith",
      title: "Full Stack Engineer",
      message:
        "This solution not only simplified our workflow but also improved our UI consistency across the board. Excellent tool for modern teams.",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      name: "Bonnie Green",
      title: "UX Designer",
      message:
        "I was impressed with how intuitive and flexible the design was. It allowed us to rapidly prototype and launch features with confidence.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
  ];

  const handleMouseMove = (
    e: MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const bounds = cardRefs.current[index]?.getBoundingClientRect();
    if (!bounds) return;

    setTooltip({
      visible: true,
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
      text: testimonials[index].name,
    });
  };

  const handleMouseLeave = () => {
    setTooltip((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section 
      id="testimonials"
      className="bg-white py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
        variants={itemVariants}
      >
       My Testimonials
      </motion.h2>

      <motion.p 
        className="text-center text-gray-500 max-w-2xl mx-auto px-4 text-base md:text-lg"
        variants={itemVariants}
      >
        We have collected some testimonials from our users. They are real people
        who have used our product.
      </motion.p>

      <motion.div 
        className="flex flex-wrap items-center justify-center gap-8 py-16 px-4"
        variants={containerVariants}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            ref={(el) => { cardRefs.current[index] = el; }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            className="relative border-2 border-gray-100 rounded-2xl overflow-hidden max-w-sm hover:border-black transition-colors duration-300 bg-white shadow-sm hover:shadow-xl p-8"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            {tooltip.visible && tooltip.text === testimonial.name && (
              <span
                className="absolute px-2.5 py-1 text-sm rounded bg-black text-white pointer-events-none transition-all duration-300 z-10"
                style={{
                  top: tooltip.y + 15,
                  left: tooltip.x + 15,
                }}
              >
                {tooltip.text}
              </span>
            )}

            <div className="flex flex-col items-center justify-center text-center h-full">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Very easy to integrate
                </h3>
                <p className="text-gray-600 leading-relaxed italic">
                  &quot;{testimonial.message}&quot;
                </p>
              </div>

              <div className="flex items-center justify-center mt-auto">
                <div className="relative">
                  <img
                    className="rounded-full w-12 h-12 object-cover border-2 border-gray-100"
                    src={testimonial.image}
                    alt={`${testimonial.name} profile`}
                    loading="lazy"
                  />
                </div>
                <div className="space-y-0.5 font-medium text-left ml-4">
                  <p className="text-gray-900 font-bold">{testimonial.name}</p>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Testimonial;
