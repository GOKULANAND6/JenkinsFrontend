import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './HomePage'
import Login from './Login'
import Signup from './Signup'
import HomePage2 from './HomePage2';
import InsertBooking from './InsertBooking';
import InsertCustomer from './InsertCustomer';
import ViewCustomer from './ViewCustomer';
import ViewBooking from './ViewBooking';
import UpdateBooking from './UpdateBooking';
import UpdateCustomer from './UpdateCustomer';

function AppRouter() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homepage2" element={<HomePage2 />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/insertbooking" element={<InsertBooking />} />
            <Route path="/insertcustomer" element={<InsertCustomer />} />
            <Route path="/viewcustomer" element={<ViewCustomer />} />
            <Route path="/viewbooking" element={<ViewBooking />} />
            <Route path="updatebooking/:id" element={<UpdateBooking />} />
            <Route path="updatecustomer/:id" element={<UpdateCustomer />} />

        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter
