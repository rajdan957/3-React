import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
// import CampsiteCard from './features/campsites/CampsiteCard.js';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
// import { CAMPSITES } from './app/shared/CAMPSITES';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='contact' element={<ContactPage />}/>
        <Route path='directory' element={<CampsitesDirectoryPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
