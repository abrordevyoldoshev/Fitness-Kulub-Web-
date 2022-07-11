import React from "react";
import "./SASS/import.scss";
import Hero from "./Components/Hero";
import Programs from "./Programs/Programs";
import Reasons from "./Reasons/Reasons";
import Plans from "./Components/Plans";
import Testimonials from "./Components/Testimonials";
import Join from "./Components/join";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
