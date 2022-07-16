import React, { useEffect, useState } from "react";
import Navbar from '../component/Navbar';

function ViewNotifiers() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    getNotifiers();
  }, []);

  const getNotifiers = async () => {

    let result = await fetch("http://localhost:4000/getNotifiers");
    result = await result.json();
    setResult(result);
  };
  console.warn(result)

  // const deletNotifier=async (id)=>{ 
  //   let result=fetch('http://localhost:4000/getNotifiers/${id}',{
  //     method:"Delete"
  //   })
  //   result=await result.json();
  //   if(result)
  //   alert("Notifier Delete")
  //   else
  //   alert("Not Deleted")

  // }

  async function deletNotifier(d_id) {
    const res = await fetch("http://localhost:4000/deleteNotifiers", {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        d_id,
      }),
    });
    const data = await res.json();
    if (data.status === 422) {
      window.alert("Not Found");
    } else {
      window.location.reload();
      window.alert("Notifier Deleted");
    }
  }



  return (

    <>
    <div>
    <Navbar />
  </div>
    <div>
    <table className="table table-dark table-hover m-1"  style={{width:'99.6%'}}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone</th>
            <th>Operations</th>
          </tr>
        </thead>
        {result === null ? (
          <tr>
            <td>No Record </td>
          </tr>
        ) : (
          result.map((result) => {
            // const { id, name, email } = user;
            return (
              <tbody>
                <tr>

                  <td>{result.name}</td>
                  <td>{result.email}</td>
                  <td>{result.age}</td>
                  <td>{result.gender}</td>
                  <td>{result.phone}</td>

                  <td>
                  {/* <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      onClick={()=>editNotifier(result._id)}
                    >
                      Edit
                    </button> */}
                  
                  <button
                      className="btn btn-danger "
                      onClick={() => deletNotifier(result._id)}
                    >
                      Delete
                    </button>

                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>

    </div>
      

      {/* <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            { <!-- Modal Header --> }
            <div className="modal-header">
              <h4 className="modal-title">Edit Profile</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {<!-- Modal body --> }
            { <div className="modal-body">{u_id}</div> }
            <div className="container">
              <form method='POST' >
                <div className="row">
                  <div className="col-md-6">
                  <div className="form-outline">
                  <label htmlFor="name" className="form-label">Name</label>
                      <input type='text' className="form-control form-control-lg" required  name="name" onChange={handleInput}
                              value={user.name}/>
                  </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-outline">
                  <label htmlFor="email" className="form-label">Email</label>
                      <input type='email' className="form-control form-control-lg"  required name='email' onChange={handleInput}
                              value={user.email}/>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  <div className="form-outline">
                  <label htmlFor="phoneNo" className="form-label">PhoneNo</label>
                      <input type='tel'className="form-control form-control-lg"  name="phoneNo" onChange={handleInput}
                              value={user.phoneNo}/>
                      </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-outline">
                  <label htmlFor="qualification" className="form-label">Qualification</label>
                      <input type='text' className="form-control form-control-lg"  name='qualification' onChange={handleInput}
                              value={user.qualification}/>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                  <div className="form-outline">
                  <label htmlFor="password" className="form-label">Password</label>
                      <input type='password' className="form-control form-control-lg" name="password" onChange={handleInput}
                              value={user.password}/>
                      </div>
                  </div>
                  <div className="col-md-6">
                  <div className="form-outline">
                  <label htmlFor="cpassword" className="form-label">confirm Password</label>
                      <input type='password' className="form-control form-control-lg" name='cpassword' onChange={handleInput}
                              value={user.cpasssword}/>
                      </div>
                  </div>
                </div>
              </form>
            </div>
            { <!-- Modal footer --> }
            <div className="modal-footer">
              <button
              type="submit"
              className="btn btn-success"
              value='submit'
              onClick={postData}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>

            </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default ViewNotifiers;
