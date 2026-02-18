"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import FormInput  from "./FormInput";
import  SocialButton  from "./SocialButton";
import ContactInfo  from "./ContactInfo";

export  function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nWebsite: ${formData.website}\n\nMessage:\n${message}`);
    const mailto = `mailto:mayurnish18@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setStatus("success");
  };

  const updateField = (field: keyof typeof formData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.main
      id="contact"
      className="flex overflow-hidden flex-col justify-center px-20 py-16 bg-white max-md:px-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="flex overflow-hidden flex-wrap justify-between px-8 max-w-full w-[1280px] max-md:px-5">
        <section className="flex overflow-hidden flex-col flex-1 shrink justify-center py-5 basis-0 min-w-60 max-md:max-w-full">
          <motion.form
            className="flex flex-col items-start w-full max-md:max-w-full"
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <motion.div className="w-full" variants={itemVariants}>
              <FormInput
                placeholder="Your name"
                value={formData.name}
                onChange={updateField('name')}
              />
            </motion.div>

            <motion.div className="w-full" variants={itemVariants}>
              <FormInput
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={updateField('email')}
              />
            </motion.div>

            <motion.div className="w-full" variants={itemVariants}>
              <FormInput
                placeholder="Your website (If exists)"
                type="url"
                value={formData.website}
                onChange={updateField('website')}
              />
            </motion.div>

            <motion.div className="w-full" variants={itemVariants}>
              <FormInput
                placeholder="How can I help?*"
                value={formData.message}
                onChange={updateField('message')}
                multiline
              />
            </motion.div>

            <motion.div className="flex flex-wrap gap-6 items-start mt-5 max-md:max-w-full" variants={itemVariants}>
              <motion.button
                type="submit"
                className="flex gap-2 justify-center items-center px-5 py-4 text-xl font-semibold tracking-wide leading-tight text-white bg-black rounded min-h-14 hover:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="self-stretch my-auto text-white">
                  Get In Touch
                </span>
              </motion.button>
              {status === "error" && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 text-sm">Please fill name, email and message.</motion.span>
              )}
              {status === "success" && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-sm">Opening your email app…</motion.span>
              )}

              <div className="flex gap-4">
                <SocialButton
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/c1f0c1721b296aa23bc8afd47513a14f7073868a?placeholderIfAbsent=true&apiKey=cc41b09cf7254ba2b7ac9ef9873ba48a"
                  variant="filled"
                />

                <SocialButton
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/b6057593893fa0b4b63b26c697fadac633521335?placeholderIfAbsent=true&apiKey=cc41b09cf7254ba2b7ac9ef9873ba48a"
                />

                <SocialButton
                  icon="https://api.builder.io/api/v1/image/assets/TEMP/398987ffdc76b87d2dd22b4a1d440a8b9ca63167?placeholderIfAbsent=true&apiKey=cc41b09cf7254ba2b7ac9ef9873ba48a"
                />
              </div>
            </motion.div>
          </motion.form>
        </section>

        <ContactInfo />
      </div>
    </motion.main>
  );
}

export default ContactForm;
