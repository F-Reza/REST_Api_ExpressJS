import { BrowserRouter as BrowserRoute, HashRouter, Routes, Route } from 'react-router-dom';
import './assets/css/App.css'
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import Profile from './pages/Profile';

const App = () => {

  return (
    <>
      <BrowserRoute>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:id/:name/:address" element={<Profile />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRoute>
      
    </>
  )
}

export default App

