import React from 'react'
import './Dashboard.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import login from '../Login/login';
import img from '../images/main.jpg'
import Navbar from '../component/Navbar';
import add from '../images/add.png'
import view from '../images/view.png'
import viewDete from '../images/viewdet.png'
import password from '../images/password.png'
import dashimage from "../images/image.webp"
export const Landing = () => {
  function onPressbtn() {
    <Router>
      <Routes>
        <Route path="D:\frontend\src\component\login.js" component={login} />
      </Routes>
    </Router>

  }
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <img className="bkimage" src={dashimage} style={{ marginRight: '4px' }}></img>
      </div>

      <div>
        <div className='landingbody'>

          <div className='bk' >
            {/* <img className='dcr' src={img}></img> */}

            <div className='center2'>
              <h1 className='heading' style={{ color: "navy", fontSize: 40, marginTop: '15px' }}>ADTSC</h1>
              <div className='tags'>
                <div className='images'>
                  <Link to="/notifiers" style={{ textDecoration: "none" }}>
                    <img className='circleimage' src={add} alt=''></img>
                    <text className='headingtext' style={{ width: '110px', fontWeight: 'bold' }}>Add Notifier</text>
                  </Link>
                </div>

                <div className='images'>
                  <Link to="/viewnotifiers" style={{ textDecoration: "none" }}>
                    <img className='circleimage' src={view} alt=''></img>
                    <text className='headingtext' style={{ width: '115px', fontWeight: 'bold' }}>View Notifiers</text>
                  </Link>
                </div>

                <div className='images'>
                  <Link to="/viewdetection" style={{ textDecoration: "none" }}>
                    <img className='circleimage' src={viewDete} alt=''></img>
                    <text className='headingtext' style={{ width: '125px', fontWeight: 'bold' }}>View Detection</text>
                  </Link>
                </div>

                <div className='images'>
                  <Link to="/changepassword" style={{ textDecoration: "none" }}>
                    <img className='circleimage' src={password} alt=''></img>
                    <text className='headingtext' style={{ width: '150px', fontWeight: 'bold' }}>Change Password</text>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
export default Landing;