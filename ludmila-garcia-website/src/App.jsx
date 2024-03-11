import './App.css'
import Header from './components/header'
import Home from './components/home/Home'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/politicaegestao" element={<PoliticaEGestao />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contato" element={<Contato />}></Route> */}
        </Routes>
      </Router>
  )
}

export default App
