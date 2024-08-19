import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MyEvents from "./pages/Events";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileDashboard from "./components/ProfileDashboard";
import HistoryPage from "./pages/HistoryPage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import PurchasedEvent from "./components/PurchasedEvent";
import AboutUs from "./pages/AboutUs";

const NotFound = () => <h1>404 - Page Not Found</h1>;

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('access_token');
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route 
            path="/events" 
            element={<ProtectedRoute><MyEvents /></ProtectedRoute>} 
          />
          <Route 
            path="/profile/" 
            element={<ProtectedRoute><ProfileDashboard /></ProtectedRoute>} 
          />
          <Route 
            path="/PersonalInfoPage" 
            element={<ProtectedRoute><PersonalInfoPage /></ProtectedRoute>} 
          />
          <Route 
            path="/profile/history" 
            element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} 
          />
          <Route 
            path="/purchased-event" 
            element={<ProtectedRoute><PurchasedEvent /></ProtectedRoute>} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
