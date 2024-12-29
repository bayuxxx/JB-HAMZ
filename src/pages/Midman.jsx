import React from 'react';
import { motion } from 'framer-motion';
import MidmanServicePage from '../components/MidmanCard/MidmanCard';
import Footer from '../components/footer';
const Midman = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div>
    <motion.div
      className="container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MidmanServicePage />
    </motion.div>
    <Footer />
    </div>
  );
};

export default Midman;
