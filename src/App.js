import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
// import CampsiteCard from './features/campsites/CampsiteCard.js';
import CampsitesList from './features/campsites/CampsitesList';
// import { CAMPSITES } from './app/shared/CAMPSITES';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
