import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import items from "../../data/dataAcc";
import "./AccList.css";
import dana from './DANA.png';
import bca from './BCA.png';
import mandiri from './Mandiri.png';



const AccList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "FreeFire", "Mobile Legend", "PUBG"];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

      const cardVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.05, // Kurangi delay untuk lebih ringan
            duration: 0.3, // Kurangi durasi animasi
            type: "spring",
            stiffness: 50, // Kurangi stiffness
          },
        }),
        hover: {
          scale: 1.02, // Kurangi efek skala pada hover
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Kurangi intensitas shadow
          transition: {
            duration: 0.2, // Kurangi durasi hover
          },
        },
      };
      

  const showModal = (item) => {
    Swal.fire({
      title: item.title,
      html: `
        <div style="text-align: left;">
          <div class="custom-divider"></div>
          <img src="${item.image}" alt="${item.title}" style="width: 100%; margin-bottom: 10px; border-radius: 8px;"/>
          <div class="custom-divider"></div>
          <p><strong>Harga:</strong> ${item.price}</p>
          <div class="custom-divider"></div>
          <p>${item.description}</p>
          <div class="custom-divider"></div>
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
        Swal.fire({
          title: "Pilih Metode Pembayaran",
          html: `
            <div class="payment-card-container">
              <div class="payment-card" data-payment="DANA">
                <img src="${dana}" alt="DANA" />
              </div>
              <div class="payment-card" data-payment="BCA">
                <img src="${bca}" alt="BCA" />
              </div>
              <div class="payment-card" data-payment="Mandiri">
                <img src="${mandiri}" alt="Mandiri" />
              </div>
            </div>
          `,
          showCancelButton: true,
          cancelButtonText: "Batal",
          showConfirmButton: false,
          didOpen: () => {
            document.querySelectorAll(".payment-card").forEach((card) => {
              card.addEventListener("click", () => {
                const selectedPayment = card.getAttribute("data-payment");
                const whatsappNumber = "628986648730"; // Nomor WhatsApp tujuan
                const message = `Halo, saya tertarik membeli akun berikut:\n\nNama: ${item.title}\nHarga: ${item.price}\nDeskripsi: ${item.description}\n\nMetode Pembayaran: ${selectedPayment}`;
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
                Swal.close(); // Tutup dialog
                window.open(whatsappUrl, "_blank"); // Membuka WhatsApp di tab baru
              });
            });
          },
        });
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
