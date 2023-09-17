import './App.css';
import Topheader from './Components/Topheader';
import Navbar from './Components/Navbar';
import About from './Components/About';
import HospitalInformation from './Components/HospitalInformation';
import Department from './Components/Department';
import EBooks from './Components/EBooks'; 
import CafeMenu  from './Components/CafeMenu';
import NABH from './Components/NABH';
import Supervisorsduty from './Components/Supervisors Duty List';
import PhotoGallery from './Components/PhotoGallery';
import Marqueetext from './Components/Marqueetext';
import Maincontainer from './Components/Maincontainer';
import Footer from './Components/Footer';
import { Form, Link,Outlet,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div >
     <div className="header">
      <Topheader />
      </div>
<Marqueetext />

<Maincontainer />
<Footer />
      </div>
  );
}

export default App;
