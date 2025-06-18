import Home from "./components/Home.jsx";
import FeaturedProperties from "./components/FeaturedProperties.jsx";
import PropertyModal from "./components/PropertyModal.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <Home />
      <FeaturedProperties setSelectedProperty = {setSelectedProperty} />
      <Contact />
      <Footer />
      {selectedProperty && 
        ( <PropertyModal properties={[selectedProperty]} onClose={ () => setSelectedProperty(null) } /> )}
    </div>
  );
}

export default App;
