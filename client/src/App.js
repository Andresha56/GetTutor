
import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
function App() {
  return (
    <>
      {/* <Students></Students> */}
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup/students" element={<Signup/>}/>
        <Route path="/signup/teachers" element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
