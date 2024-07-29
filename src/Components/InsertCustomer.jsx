import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Insert.css';

function InsertCustomer() {
    const [records, setRecords] = useState([]);
    const [inputData, setInputData] = useState({
        cus_name: '',
        cus_gender: '',
        cus_mobile: '',
        cus_time: '',
        cus_priority: '',
        booking:
        {
            booking_id:'',
            booking_options: '',
            booking_price: '',
            booking_offers: ''
        }
    });
  
    useEffect(() => {
      loadData();
    }, []);
  
    const loadData = async () => {
      await axios.get("http://localhost:8003/booking/all")
        .then((res) => {
          //console.log(res.data);
          setRecords(res.data);
          return res.data;
        })
        .catch((err) => console.error(err));
    };
  
    let handleChange = (e) => {
      const selectedRecordId = e.target.value;
          // console.log(selectedRecordId);
          if (selectedRecordId) {
              axios
                  .get(`http://localhost:8003/booking/` + selectedRecordId)
                  .then((response) => {
                      // console.log(response.data);
                      setInputData({ ...inputData, booking: response.data });
                  })
                  .catch((err) => {
                      console.log(err);
                  });
                }
    }
  
    const naviget = useNavigate();
  
    let handleSubmit = (e) => {
      e.preventDefault();
      let result = validateValues(inputData);
      // setSubmitting(true);
      console.log(inputData);
      if (result === true) {
        axios
          .post("http://localhost:8003/customer", inputData)
          .then((res) => {
            alert("Data added Successfully");
            naviget("/homepage2");
            //console.log(res.data);
          })
          .catch((err) => console.log(err));
      } else {
        alert("Please Enter the Valid Inputs!!!");
      }
    };
  
    // validation Part for add user for student management system
    // const [errors, setErrors] = useState({});
    // const [submitting, setSubmitting] = useState(false);
  
    const validateValues = (inputData) => {
      if (inputData.cus_name.length === 0) {
        alert("Enter Valid Details ");
        return false;
      } 
      else {
        return true;
      }
    };
    return (
        <div className='insert-student-form'>
            <h2 id = "heading">Insert Customer Data</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder='Name'
                name="cus_name"
                className="form-control"
                onChange={(e) =>
                    setInputData({ ...inputData, cus_name: e.target.value })
                }
                />
                <input
              type="text"
              name="cus_gender"
              placeholder='Gender'
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, cus_gender: e.target.value })
              }
            />
                <input
              type="text"
              name="cus_mobile"
              placeholder='Mobile'
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, cus_mobile: e.target.value })
              }
            />
            <input
              type="text"
              name="cus_time"
              placeholder='Arrival Time'
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, cus_time: e.target.value })
              }
            />
            <input
              type="text"
              name="cus_priority"
              placeholder='Priority'
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, cus_priority: e.target.value })
              }
            />

          <div>
          <label htmlFor="booking_id"></label>
          
                  <select
                    class="form-select"
                    required="required"
                    name="booking_id"
                    title="Select ID "
                    id="selectId"
                    onChange={handleChange}
                  >
                    <option name="booking_id" selected="selected">
                      Select One
                    </option>
                    {records.map((item) => (
                      <option value={item.booking_id} key={item.booking_id}>
                        {item.booking_id}
                      </option>
                    ))}
                  </select>
            </div>

            
                <br />
                <button type="submit">Insert</button>
            </form>
        </div>
    );
}

export default InsertCustomer;
