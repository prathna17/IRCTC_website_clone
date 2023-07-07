import logo from './logo.svg';
import './App.css';
import Frontpage from './components/Frontpage';
import Login from './components/Login';
import Aboutus from './components/Aboutus';
import Ourbusiness from './components/Ourbusiness';
import Contactus from './components/Contactus';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Frontpage />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/ourbusiness' element={<Ourbusiness />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;