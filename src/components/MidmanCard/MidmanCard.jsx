import React, { useState, useEffect } from 'react';

import image8 from './2.jpg';

const MidmanServicePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [nama, setNama] = useState('');
  const [hargaAkun, setHargaAkun] = useState('');
  const [deskripsiAkun, setDeskripsiAkun] = useState('');

  const midmanProfiles = [
    {
      id: 1,
      name: 'Budi Setiawan',
      rating: 4.8,
      totalTransaksi: 150,
      spesialisasi: 'Transaksi Online',
      foto: image8,
    },
    {
      id: 2,
      name: 'Siti Rahayu',
      rating: 4.9,
      totalTransaksi: 200,
      spesialisasi: 'Jual Beli Barang Elektronik',
      foto: image8,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Halo King Hamz, saya ingin menyewa jasa midman dengan spek: 
    - Nama Lengkap: ${nama}
    - Harga Akun: ${hargaAkun}
    - Deskripsi Akun: ${deskripsiAkun}`;
    const phoneNumber = '+628986648730';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const styles = {
    container: {
      fontFamily: "'Roboto', sans-serif",
      padding: '20px',
      color: '#2c3e50',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      margin: '0',
      color: '#2c3e50',
    },
    headerSubtitle: {
      fontSize: '1.2rem',
      fontWeight: '400',
      marginTop: '10px',
      color: '#7f8c8d',
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
    },
    profileSection: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    profileGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
    },
    profileCard: {
      textAlign: 'center',
      backgroundColor: '#ecf0f1',
      borderRadius: '10px',
      padding: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    profileCardHover: {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
    profileImageContainer: {
      marginBottom: '15px',
    },
    profileImage: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
    },
    formSection: {
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '10px',
      border: '1px solid #dcdde1',
      borderRadius: '5px',
      fontSize: '1rem',
    },
    textarea: {
      padding: '10px',
      border: '1px solid #dcdde1',
      borderRadius: '5px',
      fontSize: '1rem',
      resize: 'none',
    },
    button: {
      backgroundColor: '#27ae60',
      color: '#ffffff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#219150',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Jasa Midman</h1>
        <p style={styles.headerSubtitle}>Transaksi Aman, Tepercaya, dan Terjamin</p>
      </div>

      <div style={styles.contentWrapper}>
        <div style={styles.profileSection}>
          <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#2c3e50' }}>
            Admin Hamz Store
          </h2>
          <div style={styles.profileGrid}>
            {midmanProfiles.map((profile) => (
              <div
                key={profile.id}
                style={styles.profileCard}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={styles.profileImageContainer}>
                  <img src={profile.foto} alt={profile.name} style={styles.profileImage} />
                </div>
                <h3>{profile.name}</h3>
                <p>⭐ Rating: {profile.rating}/5</p>
                <p>💼 Total Transaksi: {profile.totalTransaksi}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.formSection}>
          <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#2c3e50' }}>
            Pesan Layanan Midman
          </h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label>Nama Lengkap</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              style={styles.input}
              placeholder="Masukkan nama lengkap"
              required
            />
            <label>Harga Akun</label>
            <input
              type="text"
              value={hargaAkun}
              onChange={(e) => setHargaAkun(e.target.value)}
              style={styles.input}
              placeholder="Masukkan harga akun"
              required
            />
            <label>Deskripsi Akun</label>
            <textarea
              value={deskripsiAkun}
              onChange={(e) => setDeskripsiAkun(e.target.value)}
              style={styles.textarea}
              placeholder="Jelaskan deskripsi akun"
              required
            />
            <button
              type="submit"
              style={styles.button}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
            >
              Pesan Sekarang
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MidmanServicePage;
