import React, { useEffect, useState } from "react";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import Menu from "./Menu/Menu";
import LandingPage from "./LandingPage/LandingPage";
import AboutMe from "./AboutMe/AboutMe";
import Projects from "./Projects/Projects";
import Skillset from "./Skillset/Skillset";
import Footer from "./Footer/Footer";
import Modal from "./Projects/ProjectDetail"; // Import your Modal component here

function App() {
  const [modalId, setModalId] = useState(null);

  return (
    <BrowserRouter>
      <ScrollToHashElement modalId={modalId} setModalId={setModalId} />
      <div className="App">
        <Menu />
        <LandingPage />
        <main role="main">
          <AboutMe />
          <Projects />
          <Skillset showSlideshow={modalId===null} />
        </main>
        <Footer />
        {modalId && <Modal id={modalId} closeModal={() => setModalId(null)} />}
      </div>
    </BrowserRouter>
  );
}

const ScrollToHashElement = ({ modalId, setModalId }) => {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    const removeHashCharacter = (str) => str.slice(1);
  
    const handleHashChange = () => {
      let hash = location.hash;
  
      if (hash.startsWith('#modal')) {
        // Remove the hash from the URL without adding a new entry to the history
        // extract modal ID from "#modal-ID"
        navigate(location.pathname);
  
        let modalId = hash.substring(hash.indexOf('-')+1);
        setModalId(modalId);
      } else {
        let hashElement = document.getElementById(removeHashCharacter(hash));
        if (hashElement) {
          hashElement.scrollIntoView({
            behavior: "smooth",
            inline: "nearest",
          });
        }
      }
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && modalId) {
        setModalId(null);
      }
    };
  
    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener('keydown', handleKeyPress);
  
    handleHashChange(); // Initial call
  
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [location, setModalId, navigate, modalId]);
  
  return null;
};

export default App;
