import { useState } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MapSection from "./components/MapSection";



function App() {
  return (
    <>
      <div className="relative overflow-hidden">
        <Header />
        <MapSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
