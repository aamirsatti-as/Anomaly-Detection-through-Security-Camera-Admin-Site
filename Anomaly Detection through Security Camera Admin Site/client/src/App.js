import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import ViewDetection from './View Detection/ViewDetection'
import Notifiers from './Notifiers/notifier'
import  Login  from './Login/login';
import ChangePassword from './changePassword/changePassword'
import ViewNotifiers from './View Notifiers/viewNotifier'
import Dashboard from './Dashboard/Dashboard';
import PrivateComponent from './component/privateComponent';

function App() {
  return (
    <div className='flex-container'>
     
      <div>
        <Routes>

         <Route element ={<PrivateComponent/>}>
            <Route exact path="/viewdetection" element={<ViewDetection />} />
            <Route exact path="/notifiers" element={<Notifiers />} />
            <Route exact path="/changepassword" element={<ChangePassword />} />
            <Route exact path="/viewnotifiers" element={<ViewNotifiers />} />
            <Route exact path="/dashboard" element={<Dashboard />} />        
          </Route>
          <Route exact path="/" element={<Login />} />
          
        </Routes>
      </div>
    </div>
  );
}

export default App;
