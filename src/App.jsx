import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationMenu from "./components/NavigationMenu";
import Accueil from "./pages/Accueil";
import Projets from "./pages/Projets";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Header
        name={"Développeur Web Full Stack"}
        baseline={
          "Je conçois des sites internets et des applications mobiles modernes, rapides et bien pensés."
        }
      />
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
