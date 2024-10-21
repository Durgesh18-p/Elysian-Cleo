import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const handleCurtain = () => {
    setShowNavigation(true); // Show navigation on button click
  };

  if (showNavigation) {
    return (
      <>
        <Navigation />
        <Home />
        <Footer />
      </>
    );
  }

  return (
    <>
      <SplashScreen handleCurtain={handleCurtain} />
    </>
  );
};

export default App;
