import React, { useState } from "react";
import Navbar from '../component/Navbar';
import './notifier.css'
const RegisterReceptionist = () => {
  const [email, setEmail] = useState("");
  const [cnfrmPassword, setcnfrmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [phone, setphone] = useState("");
  const [name, setname] = useState("");
  // let name, value;
  // const handleInput = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   //    ... is seperator opreator used to access all variable of user object, [] is used to change value dinamicaly
  //   setUser({ ...user, [name]: value });
  // };

  let name1, value;
  const handleInput = (e) => {
    name1 = e.target.name;
    value = e.target.value;
  }
  const handleSubmit=async()=>{
    console.log({email,password});
   let result=await fetch("http://localhost:4000/notifiers",{
      method:"post",
      body:JSON.stringify({name,email,age,gender,phone,password,cnfrmPassword}),
      headers:{
        'Content-Type':'application/json'
      },
    });
    result=await result.json()
    if (result.status == 422) {
      window.alert(result.message);
    } else {
        // window.location.reload();
        window.alert(result.message);  
    }
  }

  return (
    <>

      {/* <div className="body"> */}
      <div>
    <Navbar />
  </div>
      <div>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-200">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div
                  className="card shadow-2-strong card-registration"
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "ghostwhite",
                  }}
                >
                  <div className="card-body p-4 p-md-5">
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                      Add Notifiers Form
                    </h3>
                    <form >
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                          {/* <input
           className="login_input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
                            <input
                              type="text"
                              name="name"
                              className="form-control form-control-lg"
                              required={true}
                              onChange={(e) => setname(e.target.value)}
                            />
                            <label className="form-label" htmlFor="name">
                              Name
                            </label>
                          </div>
                        </div>
                      </div>

                       <div className="row">
                        <div className="col-md-6 mb-4 d-flex align-items-center">
                          <div className="form-outline datepicker w-100">
                            <input
                              type="Number"
                              className="form-control form-control-lg"
                              name="age"
                              required={true}
                              onChange={(e) => setage(e.target.value)}
                            />
                            <label htmlFor="age" className="form-label">
                              Age
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <h6 className="mb-2 pb-1">gender: </h6>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="female"
                              value="Female"
                              onChange={(e) => setgender(e.target.value)}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="male"
                              value="Male"
                              onChange={(e) => setgender(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="male">
                              Male
                            </label>
                          </div>

                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="other"
                              value="Other"
                              onChange={(e) => setgender(e.target.value)}
                            />
                            <label className="form-check-label" htmlFor="other">
                              Other
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="email"
                              name="email"
                              className="form-control form-control-lg"
                              required={true}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label className="form-label" htmlFor="email">
                              Email
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="tel"
                              name="phoneNo"
                              className="form-control form-control-lg"
                              required={true}
                              onChange={(e) => setphone(e.target.value)}
                            />
                            <label className="form-label" htmlFor="phoneNo">
                              Phone Number
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              name="password"
                              className="form-control form-control-lg"
                              required={true}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              name="cpassword"
                              className="form-control form-control-lg"
                              required={true}
                              onChange={(e) => setcnfrmPassword(e.target.value)}
                            />
                            <label className="form-label" htmlFor="cpassword">
                              Confirm Password
                            </label>
                          </div>
                        </div> 
                      </div>

                      <div className="d-flex justify-content-center mt-4 pt-2">
                        <input
                          className="btn btn-primary btn-lg"
                          type="submit"
                          value="Submit"
                          onClick={handleSubmit}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      
      {/* </div> */}

    </>
  )
}
export default RegisterReceptionist;