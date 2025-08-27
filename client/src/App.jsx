import { BrowserRouter as BrowserRoute, HashRouter, Routes, Route } from 'react-router-dom';
import './assets/css/App.css'
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <>
      <BrowserRoute>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile/:id/:name/:address" element={<Profile />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRoute>
      
    </>
  )
}

export default App
