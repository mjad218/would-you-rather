import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Add from './pages/Add';
import Leaderboard from './pages/Leaderboard';
function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <NavBar/> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
