import React, { useState } from "react";
import './changePassword.css'
import Navbar from '../component/Navbar';
const RegisterReceptionist = () => {
  const [cnfrmPassword, setcnfrmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const handleSubmit = async () => {
    let result = await fetch("http://localhost:4000/changePassword", {
      method: "put",
      body: JSON.stringify({ oldPassword, password, cnfrmPassword }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result=await result.json();

    if(result.message=='Password Changed')
    localStorage.setItem("admin", JSON.stringify(result));    
    
    window.alert(result.message)
    // if (result.status == 422) {
    //   window.alert(result.message);
    // } else {
    //   window.alert(result.status);
    //   // window.location.reload();
    //   window.alert(result.message);
    // }
    //       // localStorage.setItem("admin", JSON.stringify(result));
  }


  return (

    <>
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
                      Change Password Form
                    </h3>
                    <form>
                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="name" >
                              Old Password
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter Old Password"
                              className="form-control form-control-lg"
                              required="true"
                              onChange={(e) => setOldPassword(e.target.value)}
                            />

                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="name">
                              New Password
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter New Password"
                              className="form-control form-control-lg"
                              required="true"
                              onChange={(e) => setPassword(e.target.value)}
                            />

                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12 mb-4">
                          <div className="form-outline">
                            <label className="form-label" htmlFor="name">
                              Confirm New Password
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Confirm New Password"
                              className="form-control form-control-lg"
                              required="true"
                              onChange={(e) => setcnfrmPassword(e.target.value)}
                            />

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
    </>
  )

}
export default RegisterReceptionist