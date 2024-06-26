import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp'
import BrowseToWatch from './components/BrowseToWatch'
import NotFound from './pages/NotFound';
import AdsPlan from './pages/AdsPlan';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/BrowseToWatch' element={<BrowseToWatch/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path='/AdsPlan' element={<AdsPlan/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
