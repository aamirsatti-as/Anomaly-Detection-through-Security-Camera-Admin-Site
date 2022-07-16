import React, { useEffect, useState } from "react";
import Navbar from '../component/Navbar';

import './ViewDetection.css'
function ViewDetection() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    getDetection();
  }, []);

  const getDetection = async () => {

    let result = await fetch("http://localhost:4000/getDetection");
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

  const editDetection = () => {

  }

  async function deleteDetection(d_id) {
    const res = await fetch("http://localhost:4000/deleteDetection", {
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
      window.alert("Detection Record Deleted");
    }
  }

  return (
    <>
    <div>
    <Navbar />
  </div>
      <div>
        <table className="table table-dark table-hover m-1"  style={{width:'99.6%'}}>
          <thead className="col mr-4">
            <tr>
              <th scope="col">Anomaly Name</th>
              <th scope="col">Anomaly Duration</th>
              <th scope="col">Anomaly Time</th>
              <th scope="col">Anomaly Day</th>
              <th scope="col">Operations</th>
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

                    <td>{result.anomalyName}</td>
                    <td>{result.anomalyDuration}</td>
                    <td>{result.anomalyTime}</td>
                    <td>{result.anomalyDay}</td>
                    <td>


                      {/* <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      onClick={()=>editDetection(result._id)}
                    >
                      Edit
                    </button>
                   */}
                      <button
                        className="btn btn-danger "
                        onClick={() => deleteDetection(result._id)}
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



    </>

  );
}

export default ViewDetection;
