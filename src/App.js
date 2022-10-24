import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { NavbarMenu } from './components/NavbarMenu';

function App() {
  return (
    <BrowserRouter>
      <NavbarMenu />

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
