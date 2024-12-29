import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-5 mt-10" style={{ backgroundColor: '#213555' }}>
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-lg-6 mb-4">
            <h5 className="text-uppercase mb-3">Tentang JB Hamz</h5>
            <p className="small">
              JB Hamz adalah platform terpercaya untuk membeli akun game seperti FreeFire, Mobile Legend, dan PUBG. Kami menjamin keamanan dan kualitas terbaik untuk semua akun yang dijual.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-lg-6 mb-4">
            <h5 className="text-uppercase mb-3">Kontak Kami</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><i className="bi bi-geo-alt me-2"></i> Jalan Raya No. 123, Denpasar, Bali</li>
              <li className="mb-2"><i className="bi bi-envelope me-2"></i> support@jbhamz.com</li>
              <li className="mb-2"><i className="bi bi-phone me-2"></i> +62 812-3456-7890</li>
            </ul>
          </div>
        </div>

        <hr className="my-4 text-secondary" />

        {/* Footer Bottom Section */}
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 small">&copy; {new Date().getFullYear()} JB Hamz. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
