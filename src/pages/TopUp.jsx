import React from 'react';
import TopupCard from '../components/TopUpCard/TopUpCard';
import { motion } from 'framer-motion'; // Import framer-motion

const TopUp = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Animasi untuk Judul */}
      <motion.h1
        className="text-center m-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
      >
        TopUp by Hamz
      </motion.h1>

      {/* Animasi untuk Komponen Card */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.3 } },
        }}
      >
        <TopupCard />
      </motion.div>
    </motion.div>
  );
};

export default TopUp;
