import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import JBAkun from './pages/JBAkun';
import Midman from './pages/Midman';
import TopUp from './pages/TopUp';
import AmankanAkun from './pages/AmankanAkun';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<JBAkun />} />
        <Route path="/TopUp" element={<TopUp />} />
        <Route path="/Midman" element={<Midman />} />
        {/* <Route path="/AmankanAkun" element={<AmankanAkun />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
