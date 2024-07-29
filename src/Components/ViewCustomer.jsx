import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";

function ViewCustomer() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios
      .get("http://localhost:8003/customer/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:8003/customer/" + id)
        .then((res) => {
          alert("Record has deleted");
          navigate("/homepage2");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="body">
      <div className="container ">
        <h1 id="app2" className="text-center text-bg-info " role="details">
        Appointment Details
        </h1>

        <div className="text"  id="addbutton">
          <Link to="/insertcustomer" className="btn btn-primary">
            Book Appointment
          </Link>
        </div>
        <div className="text-end" id="salbutton">
          <Link to="/viewsalary" className="btn btn-primary">
             Details
          </Link>
        </div>
        <br />
        <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Gender</th>
              <th>Mobile No</th>
              <th>Time</th>
              <th>Priority</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.cus_id}</td>
                <td>{d.cus_name}</td>
                <td>{d.cus_gender}</td>
                <td>{d.cus_mobile}</td>
                <td>{d.cus_time}</td>
                <td>{d.cus_priority}</td>
                <td>{d.booking.booking_options}</td>


                <td>
                  <Link
                    to={`/updatecustomer/${d.cus_id}`}
                    className="btn btn-sm btn-success " id="updbutton"
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.cus_id)}
                    className="btn btn-sm ms-1 btn-danger" id="delbutton"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewCustomer;
