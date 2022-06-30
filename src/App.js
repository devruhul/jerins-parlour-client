import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Services from './pages/Home/Services/Services';
import ContactUs from './pages/Home/ContactUs/ContactUs';
import Feature from './pages/Home/Feature/Feature';
import Testimonials from './pages/Home/Testimonials/Testimonials';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import NotFound from './pages/Home/NotFound/NotFound';
import Register from './pages/Authentication/Register/Register';
import Login from './pages/Authentication/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="feature" element={<Feature />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
