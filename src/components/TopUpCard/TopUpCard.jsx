import React, { useState } from 'react';
import { FaGem } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import framer-motion

const TopupCard = () => {
  const [userId, setUserId] = useState('');
  const [diamondAmount, setDiamondAmount] = useState('');
  const [price, setPrice] = useState('');
  const [game, setGame] = useState('');

  const diamondOptions = [
    { amount: 100, price: 'Rp 20.000' },
    { amount: 300, price: 'Rp 50.000' },
    { amount: 500, price: 'Rp 80.000' },
    { amount: 1000, price: 'Rp 150.000' },
    { amount: 2000, price: 'Rp 300.000' },
    { amount: 3000, price: 'Rp 450.000' },
    { amount: 5000, price: 'Rp 700.000' },
    { amount: 10000, price: 'Rp 1.200.000' },
  ];

  const handleDiamondSelect = (amount, price) => {
    setDiamondAmount(amount);
    setPrice(price);
  };

  const handleSubmit = () => {
    if (userId && diamondAmount && price && game) {
      const message = `Halo, saya ingin top-up ${game} dengan ID ${userId}. Jumlah Diamond: ${diamondAmount}, Harga: ${price}.`;
      const waLink = `https://wa.me/628986648730?text=${encodeURIComponent(message)}`;
      window.open(waLink, '_blank');
    } else {
      alert('Harap lengkapi semua data!');
    }
  };

  return (
    <div style={styles.topupCard}>
      <h2>{game || 'Pilih Game'}</h2>

      {/* Dropdown untuk memilih game */}
      <select value={game} onChange={(e) => setGame(e.target.value)} style={styles.select}>
        <option value="">Pilih Game</option>
        <option value="Free Fire">Free Fire</option>
        <option value="Mobile Legends">Mobile Legends</option>
        <option value="PUBG">PUBG</option>
      </select>

      <label htmlFor="userId">ID Pengguna:</label>
      <input
        type="text"
        id="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Masukkan ID Pengguna"
        required
        style={styles.input}
      />

      <div style={styles.diamondOptions}>
        <h3>Pilih Jumlah Diamond:</h3>
        <motion.div
          style={styles.cardContainer}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delayChildren: 0.2, staggerChildren: 0.1 },
            },
          }}
        >
          {diamondOptions.map((option, index) => (
            <motion.div
              key={index}
              style={styles.card}
              onClick={() => handleDiamondSelect(option.amount, option.price)}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGem style={styles.icon} />
              <p style={styles.diamondText}>{option.amount} Diamond</p>
              <p style={styles.priceText}>{option.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div style={styles.topupInfo}>
        {diamondAmount && (
          <>
            <p>Jumlah Diamond: {diamondAmount}</p>
            <p>Harga: {price}</p>
          </>
        )}
      </div>

      <motion.button
        onClick={handleSubmit}
        style={styles.submitButton}
        whileHover={{
          backgroundColor: '#0b7dda',
          scale: 1.02,
        }}
        whileTap={{ scale: 0.98 }}
      >
        Top-up via WhatsApp
      </motion.button>
    </div>
  );
};

const styles = {
  topupCard: {
    display: 'block',
    border: '1px solid #ccc',
    padding: '20px',
    margin: '20px auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '90%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
  },
  select: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  diamondOptions: {
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px',
  },
  card: {
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    fontSize: '24px',
    color: '#4CAF50',
    marginBottom: '10px',
  },
  diamondText: {
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  priceText: {
    color: '#2196F3',
    fontWeight: 'bold',
  },
  topupInfo: {
    marginTop: '15px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default TopupCard;
