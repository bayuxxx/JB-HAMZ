import React from 'react';
import { motion } from 'framer-motion';
import MidmanServicePage from '../components/MidmanCard/MidmanCard';

const Midman = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MidmanServicePage />
    </motion.div>
  );
};

export default Midman;
