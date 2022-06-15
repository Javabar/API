import { useEffect, useState } from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Container } from "./css/App.styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
const [psychoNauts, setPsychoNauts] = useState([]);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://psychonauts-api.herokuapp.com/api/characters?limit= '
      ); 
      if(!response.ok){
        throw new Error(response.statusText)
      };
      const data = await response.json()
      setPsychoNauts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Could not fetch the data");
    };
   
  };
  fetchData();
}, []);


return (
    <Container>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home error={error} psychoNauts={psychoNauts} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
};

export default App;