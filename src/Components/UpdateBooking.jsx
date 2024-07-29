import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function UpdateBooking() {

  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8003/booking/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8003/booking", data).then((res) => {
      alert("Service Details Updated Successfully");
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
            <h1>Update Service Details</h1>
            <div>
              <lable htmlFor="booking_id">ID :</lable>
              <input
                type="text"
                disabled
                name="booking_id"
                className="form-control"
                value={data.booking_id}
                onChange={(e) => setData({ ...data, booking_id: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="booking_options">Service :</lable>
              <input
                type="text"
                name="booking_options"
                className="form-control"
                value={data.booking_options}
                onChange={(e) => setData({ ...data, booking_options: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="booking_price"> Price :</lable>
              <input
                type="text"
                name="booking_price"
                className="form-control"
                value={data.booking_price}
                onChange={(e) => setData({ ...data, booking_price: e.target.value })}
              />
            </div>

            <div>
              <lable htmlFor="booking_offers"> Offers :</lable>
              <input
                type="text"
                name="booking_offers"
                className="form-control"
                value={data.booking_offers}
                onChange={(e) => setData({ ...data, booking_offers: e.target.value })}
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

export default UpdateBooking
