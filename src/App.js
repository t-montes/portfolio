import Menu from './Menu/Menu';
import LandingPage from './LandingPage/LandingPage';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Skillset from './Skillset/Skillset';
import Footer from './Footer/Footer';
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useMemo, useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <div className="App">
        <Menu />
        <LandingPage />
        <main role="main">
          <AboutMe />
          <Projects />
          <Skillset />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const ScrollToHashElement = () => {
  // Took from https://github.com/ncoughlin/scroll-to-hash-element
  let location = useLocation();

  let hashElement = useMemo(() => {
    let hash = location.hash;
    const removeHashCharacter = (str) => {
      const result = str.slice(1);
      return result;
    };

    if (hash) {
      let element = document.getElementById(removeHashCharacter(hash));
      return element;
    } else {
      return null;
    }
  }, [location]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        behavior: "smooth",
        // block: "end",
        inline: "nearest",
      });
    }
  }, [hashElement]);

  return null;
};

export default App;
