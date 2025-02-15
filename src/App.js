import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import profilescreen from './screens/profilescreen';
import Adminscreen from './screens/Adminscreen';
import Landingscreen from './screens/Landingscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={Homescreen} />
          <Route path="/book/:roomid/:startDate/:endDate" element={<Bookingscreen />} />
          <Route path='/register' exact Component={Registerscreen}/>
          <Route path='login' exact Component={Loginscreen}/>
          <Route path='profile' exact Component={profilescreen}/>
          <Route path="/admin" exact Component={Adminscreen} />
          <Route path="/" exact Component={Landingscreen} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
