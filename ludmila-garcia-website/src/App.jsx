import "./App.css";
import Header from "./components/header";
import HeaderPurple from "./components/HeaderPurple";
import Home from "./components/home/Home";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Apresentacao from "./components/apresentacao/Apresentacao";
import Terapia from "./components/pacientes/terapia/Terapia";
// import Footer from './components/Footer';
import PenseMagro from "./components/pacientes/pensemagro/PenseMagro";
import Marketing from "./components/psicologos/marketing/Marketing";
import Compulsao from "./components/psicologos/compulsao/Compulsao";


function App() {
  function HeaderContainer() {
    const location = useLocation();
    return location.pathname === "/marketing" ? <HeaderPurple /> : <Header />;
  }
  return (
    <Router>
       <HeaderContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apresentacao" element={<Apresentacao />}></Route>
        <Route path="/terapia" element={<Terapia />}></Route>
        <Route path="/pensemagro" element={<PenseMagro />}></Route>
        <Route path="/marketing" element={<Marketing />}></Route>
        <Route path="/compulsao" element={<Compulsao />}></Route>
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
