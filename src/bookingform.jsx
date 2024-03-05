import React, { useState } from 'react';
import './bookingform.css';

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    class: '',
    title: '',
    firstname: '',
    lastname: '',
    approver: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(bookingData);
  };

  return (
    <form className="booking-form">
        <div className='head'>
            <h1>ÅKA TÅG</h1>
        </div>
        <div className='city'>
            <div className='city1'>
                <h3>STOCKHOLM</h3>
                <p>10:30</p>
            </div>
            <hr />
            <div className='city2'>
                <h3>GÖTEBERG</h3>
                <p>10:30</p>
            </div>
        </div>
      <div className='title'>
        <div>
      <label>Antal Biljetter</label>
      <input type="text" name="class" placeholder="1" onChange={handleChange} />
        </div>
        <div>
            <label>Title</label>
            <input type="text" name="title" placeholder="Ms" onChange={handleChange} />
        </div>
      </div>
      <label>First Name</label>
      <input type="text" name="firstname" placeholder="Enter Your First Name" onChange={handleChange} />
      <label>Last Name</label>
      <input type="text" name="lastname" placeholder="Enter Your Last Name" onChange={handleChange} />
      <div className='approved'>
      <input type="text"  name="approver" placeholder="" onChange={handleChange} />
      <label htmlFor="">Approver</label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default BookingForm;
