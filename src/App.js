import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiniNavBar from "./components/MiniNavBar";
import MainNavBar from "./components/MainNavBar";
import AboutSection from "./components/AboutSection";
import ForSaleRentToggle from "./components/ForSaleRentToggle";
import Filters from "./components/Filters";
import VideoSection from "./components/VideoSection";
import SortBySection from "./components/SortBySection";
import HouseListings from "./components/HouseListings";
import AgentBios from "./components/AgentBios";
import Testimonials from "./components/Testimonials";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import PropertyDetail from "./components/PropertyDetail";
import SellingPage from "./components/SellingPage";
import ListingsPage from "./components/ListingsPage";
import OurTeam from "./components/OurTeam";
import OpenHouses from "./components/OpenHouses";
import ContactPage from "./components/ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <MiniNavBar />
        <MainNavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AboutSection />
                <ForSaleRentToggle />
                <VideoSection />
                <Filters />
                <SortBySection />
                <HouseListings />
                <AgentBios />
                <Testimonials />
                <MapSection />
              </>
            }
          />
          <Route path="/selling" element={<SellingPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/open-houses" element={<OpenHouses />} />
          <Route path="/ContactPage" element={<ContactPage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
