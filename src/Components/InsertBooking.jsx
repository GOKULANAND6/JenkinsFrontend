import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Insert.css';

function InsertBooking() {
    const [inputData, setInputData] = useState({
        
        booking_options: '',
        booking_price: '',
        booking_offers: ''

        });
  
      const naviget = useNavigate();
  
      let handleSubmit = (e) => {
        e.preventDefault();
        let result = validateValues(inputData);
        // setSubmitting(true);
    
        if (result === true) {
          axios
            .post("http://localhost:8003/booking", inputData)
            .then((res) => {
              alert("Data added Successfully");
              naviget("/homepage2");
              console.log(res.data);
            })
            .catch((err) => console.log(err));
        } else {
          alert("Please Enter the Valid Inputs!!!");
        }
      };
  
    
      const validateValues = (inputData) => {
        if(inputData.booking_options === null) {
          alert("BasicSalary should be greater than 10,000 !!!");
          return false;
        } 
        else {
          return true;
        }
      };

    return (
        <div className='insert-student-form' id="in2">
            <h2 id="heading">Insert Bookings Description</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder='Services'
                name="booking_options"
                className="form-control"
                onChange={(e) =>
                    setInputData({ ...inputData, booking_options: e.target.value })
                }
                />
                <input
              type="text"
              name="booking_price"
              placeholder='Pricing'
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, booking_price: e.target.value })
              }
            />
                <input
              type="text"
              name="booking_offers"
              placeholder='Offers'
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, booking_offers: e.target.value })
              }
            />
            
                <button type="submit">Insert</button>
            </form>
        </div>
    );
}

export default InsertBooking;
