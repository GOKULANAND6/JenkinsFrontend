import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function UpdateCustomer() {

  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8003/customer/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8003/customer", data).then((res) => {
      alert("Customer Details Updated Successfully");
      navigate("/homepage2");
    });
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>Update Customer Details</h1>
            <div>
              <label htmlFor="cus_id">ID :</label>
              <input
                type="text"
                disabled
                name="cus_id"
                className="form-control"
                value={data.cus_id}
                onChange={(e) => setData({ ...data, cus_id: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="cus_name">Name :</label>
              <input
                type="text"
                name="cus_name"
                className="form-control"
                value={data.cus_name}
                onChange={(e) => setData({ ...data, cus_name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="cus_gender"> Gender :</label>
              <input
                type="text"
                name="cus_gender"
                className="form-control"
                value={data.cus_gender}
                onChange={(e) => setData({ ...data, cus_gender: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="cus_mobile"> Mobile :</label>
              <input
                type="text"
                name="cus_mobile"
                className="form-control"
                value={data.cus_mobile}
                onChange={(e) => setData({ ...data, cus_mobile: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="cus_time"> Time :</label>
              <input
                type="text"
                name="cus_time"
                className="form-control"
                value={data.cus_time}
                onChange={(e) => setData({ ...data, cus_time: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="cus_priority"> Priority :</label>
              <input
                type="text"
                name="cus_priority"
                className="form-control"
                value={data.cus_priority}
                onChange={(e) => setData({ ...data, cus_priority: e.target.value })}
              />
            </div>

        
            <br />

            <button className="btn btn-info " id="updbutton">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateCustomer
