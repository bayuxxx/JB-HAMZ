import React from "react";
import AccList from "../components/AccList/AccList";
import { motion } from "framer-motion"; // Import framer-motion
import Footer from "../components/footer";
const JBAkun = () => {
  return (
    <div>
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Tambahkan animasi untuk AccList */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <AccList />
      </motion.div>
    </motion.div>
    <Footer />

    </div>
  );
};

export default JBAkun;
