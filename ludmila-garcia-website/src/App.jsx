import "./App.css";
import Header from "./components/header";
import HeaderPurple from "./components/HeaderPurple";
import Home from "./components/home/Home";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Terapia from "./components/pacientes/terapia/Terapia";
import Footer from "./components/Footer";
import FooterPurple from "./components/FooterPurple";
import PenseMagro from "./components/pacientes/pensemagro/PenseMagro";
import Marketing from "./components/psicologos/marketing/Marketing";
import Compulsao from "./components/psicologos/compulsao/Compulsao";
import Contato from "./components/contato/Contato";
import Cookie from "./components/Cookie/Cookie";
import LandingPage from "./components/landingPage/LandingPage";

function App() {
  function HeaderContainer() {
    const location = useLocation();
    const isMarketingOrCompulsao =
      location.pathname === "/marketing" || location.pathname === "/compulsao";
    return isMarketingOrCompulsao ? <HeaderPurple /> : <Header />;
  }
  function FooterContainer() {
    const location = useLocation();
    const isMarketingOrCompulsao =
      location.pathname === "/marketing" || location.pathname === "/compulsao";
    return isMarketingOrCompulsao ? <FooterPurple /> : <Footer />;
  }
  return (
    <Router>
      <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/terapia" element={<Terapia />}></Route>
        <Route path="/pensemagro" element={<PenseMagro />}></Route>
        <Route path="/marketing" element={<Marketing />}></Route>
        <Route path="/compulsao" element={<Compulsao />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
        <Route path="/landingPage" element={<LandingPage />}></Route>
      </Routes>
      <Cookie/>

      <FooterContainer />
    </Router>
  );
}

export default App;
