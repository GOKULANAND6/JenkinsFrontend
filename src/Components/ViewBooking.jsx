import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import './App2.css';


function ViewBooking() {
    const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios
      .get("http://localhost:8003/booking/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:8003/booking/" + id)
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
        <h1 id="app3" className="text-center text-bg-info " role='service'>
          Service Descriptions
        </h1>

        <div className="text"  id="addbutton">
          <Link to="/insertbooking" className="btn btn-info">
            Add +
          </Link>
        </div>

        <br />
        <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
              <th>ID</th>
              <th>OPTIONS</th>
              <th>PRICING</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.booking_id}</td>
                <td>{d.booking_options}</td>
                <td>{d.booking_price}</td>
                <td>{d.booking_offers}</td>

                <td>
                  <Link
                    to={`/updatebooking/${d.booking_id}`}
                    className="btn btn-sm btn-success " id="updbutton"
                  >
                    Update Service
                  </Link>

                  <button
                    onClick={(e) => handleSubmit(d.booking_id)}
                    className="btn btn-sm ms-1 btn-danger" id="delbutton"
                  >
                    Delete Service
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewBooking
