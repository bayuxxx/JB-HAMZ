import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import items from "../../data/dataAcc";
import "./AccList.css";

const AccList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "FreeFire", "Mobile Legend", "PUBG"];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.12)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const showModal = (item) => {
    Swal.fire({
      title: item.title,
      html: `
        <div style="text-align: left;">
        <div class="custom-divider"></div> <!-- Divider div -->
          <img src="${item.image}" alt="${item.title}" style="width: 100%; margin-bottom: 10px; border-radius: 8px;"/>
          <div class="custom-divider"></div> <!-- Divider div -->
          <p><strong>Harga:</strong> ${item.price}</p>
          <div class="custom-divider"></div> <!-- Divider div -->
          <p>${item.description}</p>
          <div class="custom-divider"></div> <!-- Divider div -->
        </div>
      `,
      showCloseButton: true,
      showCancelButton: true,
      cancelButtonText: "Tutup",
      confirmButtonText: "Beli Sekarang",
      customClass: {
        popup: "swal-custom-popup",
        confirmButton: "swal-confirm-button-right",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Berhasil!",
          "Barang telah ditambahkan ke keranjang.",
          "success"
        );
      }
    });
  };

  return (
    <div className="acc-list-container">
      <h1 className="page-title">Stock Akun</h1>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div className="card-grid" initial="hidden" animate="visible">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="card"
              onClick={() => showModal(item)}
            >
              <div className="card-image-container">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="card-image"
                />
              </div>

              <div className="card-content">
                <div className="card-header">
                  <div className="card-title">{item.title}</div>
                  <div className="card-price">{item.price}</div>
                </div>
                <p className="card-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default AccList;
