import './App.css';
import Nav from './components/Navbar/Nav';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
function App() {
  return (
    <>
      {/* <Students></Students> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="user/signup" element={<Signup />} />
          <Route path="user/signup" element={<Signup />} />
          <Route path='user/create/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
