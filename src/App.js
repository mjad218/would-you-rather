import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Add from './pages/Add';
import Leaderboard from './pages/Leaderboard';
import LogIn from './pages/LogIn';
import {getUsers} from "./redux/actions/users"; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


function App() {
  const dispatch = useDispatch(); 
  useEffect( () => {
    dispatch(getUsers());

  }, [dispatch]); 
  let users = useSelector( (store) => store.users); 
  console.log(users); 

  return (
    <Router> 
      <div className="App">
        <Header />
        <NavBar/> 
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/login" element={<LogIn />} />

        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
