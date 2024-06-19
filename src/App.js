import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/SignUp' element={<SignUp/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
