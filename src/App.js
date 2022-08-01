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
import ExploreServices from './pages/Home/ExploreServices/ExploreServices';
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import BookingService from './pages/Booking/BookingService/BookingService';
import BookingDetails from './pages/Booking/BookingDetails/BookingDetails';
import Dashboard from './pages/Dashboard/Dashboard';
import AdminRoute from './pages/Authentication/AdminRoute/AdminRoute';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddService from './pages/Dashboard/AddService/AddService';
import BookingsLists from './pages/Dashboard/BookingsLists/BookingsLists';
import ServiceReview from './pages/Dashboard/ServiceReview/ServiceReview';
import OrdersLists from './pages/Dashboard/OrdersLists/OrdersLists';
import ManageServices from './pages/Dashboard/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={
          <PrivateRoute>
            <Services />
          </PrivateRoute>}>
        </Route>
        <Route path="bookingService" element={<BookingService />}>
          <Route path=":id" element={<BookingDetails />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />
        }>
          <Route path="/dashboard/bookingList" element={<BookingsLists />} />
          <Route path="/dashboard/orderList" element={<OrdersLists />} />
          <Route path="/dashboard/manageServices" element={<ManageServices />} />
          <Route path="/dashboard/serviceReview" element={<ServiceReview />} />
          <Route path="/dashboard/makeAdmin" element={
            <AdminRoute>
              <MakeAdmin />
            </AdminRoute>
          } />
          <Route path="/dashboard/addService" element={
            <AddService />
          } />
        </Route>
        <Route path="exploreServices" element={<ExploreServices />} />
        <Route path="feature" element={<Feature />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div >
  );
}

export default App;
