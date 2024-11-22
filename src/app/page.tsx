'use client';
import { motion } from 'framer-motion';

export default function Home() {
  // Fade in animation variant
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Stagger children animation variant
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with slide down animation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50"
      >
        {/* ... existing nav content ... */}
      </motion.header>

      {/* Hero Section with fade in animation */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="container mx-auto px-6 pt-32 pb-20"
      >
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-6"
          >
            Hi, I'm <span className="text-blue-500">Martin Tielemans</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl mb-8"
          >
            A passionate full-stack developer crafting beautiful and functional web experiences.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            View My Work
          </motion.button>
        </div>
      </motion.section>

      {/* Projects Section with scroll animation */}
      <section id="projects" className="bg-foreground/5 py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Project Card with hover animation */}
            <motion.div
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-background rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project Name</h3>
                <p className="text-foreground/70 mb-4">
                  Brief description of the project and technologies used.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-500 hover:underline">Demo</a>
                  <a href="#" className="text-blue-500 hover:underline">GitHub</a>
                </div>
              </div>
            </motion.div>

            {/* Add more project cards as needed */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
