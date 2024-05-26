import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDropzone } from 'react-dropzone';
import i1 from '/program/calender.jpeg'
import i2 from '/program/meditate.jpeg'
import i3 from '/program/meditate1.jpeg'
import i4 from '/program/meditate2.jpeg'
import i5 from '/program/profile.png'
import i6 from '/program/slip.jpeg'
import Nav from '../components/navBar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom';


const YogaRegistration = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  const handleDateChange = (date) => {
    const newDates = [...selectedDates];
    const dateString = date.toDateString();
    if (newDates.some(d => d.toDateString() === dateString)) {
      setSelectedDates(newDates.filter(d => d.toDateString() !== dateString));
    } else {
      newDates.push(date);
      setSelectedDates(newDates);
    }
  };

  const onDrop = (acceptedFiles) => {
    setUploadedFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  useEffect(() => {
    const calculatePayment = () => {
      const numDays = selectedDates.length;
      let costPerSession;

      if (numDays > 7) {
        costPerSession = 8;
      } else {
        costPerSession = 10;
      }

      setTotalPayment(numDays * costPerSession);
    };

    calculatePayment();
  }, [selectedDates]);

  return (
    <><style>{`
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
        background-color:#ddd;
      }
      
      h1, h3, h4 {
        color: #05062d;
      
      }
      
      h1{
        text-align: center;
      }
      
      .conditions {
        background-color: #f8f8f8;
        padding: 10px;
        border-radius: 5px;
        margin-bottom: 20px;
      }
      
      .conditions h3 {
        margin-top: 0;
      }
      
      .free {
        color: red;
      }
      
      .accommodation-btn, .payment-btn, .submit-btn {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-left: 42%;
       
      
      }
      
      .accommodation-btn:hover, .payment-btn:hover, .submit-btn:hover {
        background-color: #45a049;
      }
      
      .calendar-container {
        margin-bottom: 20px;
        margin-left: 150px;
      }
      
      .selected {
        background-color: #4CAF50 !important;
        color: white !important;
      }
      
      .selected-dates ul {
        list-style-type: none;
        padding: 0;
      }
      
      .selected-dates li {
        background-color: #e8e8e8;
        margin: 5px 0;
        padding: 5px;
        border-radius: 5px;
      }
      
      .payment-section {
        margin-bottom: 20px;
      }
      
      
      .upload-section {
        border: 2px dashed #4CAF50;
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        background-color: #f8f8f8;
        height: 300px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      
      .upload-icon {
        color: #aaa;
        font-size: 24px;
      }
      
      .upload-icon i {
        font-size: 48px;
        margin-bottom: 10px;
      }
      
      .upload-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      
      }
      
      .uploaded-images {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        
        
        
      }
      
      .uploaded-image {
        position: relative;
        margin: 10px;
       
      }
      
      .uploaded-image img {
        max-width: 300px;
        max-height: 400px;
        border-radius: 10px;
        border: 1px solid #ddd;
      }
      
      .uploaded-image p {
        margin: 5px 0 0;
        text-align: center;
        font-size: 12px;
      }
      `}</style>
    <div className="container">
      <fieldset>
        <h1>Register for Yoga</h1>
        <br />
        <div className="conditions">
          <h3>Conditions</h3>
          <p>1. For bookings lasting from 1 to 7 days, each session costs $10.</p>
          <p>2. For bookings lasting more than 7 days, guests who have booked accommodation are granted <span className="free">free</span> access to yoga sessions.</p>
          <p>3. For bookings lasting more than 7 days, each session costs $8.</p>
        </div>
        <p>Every day, we have a yoga session. If you haven't booked accommodation, please select below to book accommodation to gain access to free yoga sessions.</p>
        <br />
        <h3>You want to book accommodation?</h3>
        <button type="button" className="accommodation-btn">Accommodation book here</button>
      <br />
        <h4>Please select the days you want to do yoga if you haven't booked accommodation</h4>
        <div className="calendar-container">
          <Calendar
            onClickDay={handleDateChange}
            tileClassName={({ date, view }) => selectedDates.some(d => d.toDateString() === date.toDateString()) ? 'selected' : null}
          />
        </div>
        <br />
        {selectedDates.length > 0 && (
          <div className="selected-dates">
            <h4>Selected Dates:</h4>
            <ul>
              {selectedDates.map((date, index) => (
                <li key={index}>{date.toDateString()}</li>
              ))}
            </ul>
          </div>
        )}
        <br />
        <div className="payment-section">
          <p>Total Payment:<b> ${totalPayment}.</b> Click the payment button to proceed to the Nalanda Foundation site and make your payment. Once completed, please obtain a payment slip. Return to this page and confirm your payment by submitting your slip below.</p>
          <button type="button" className="payment-btn">Payment here</button>
        </div>
        <div {...getRootProps()} className="upload-section">
          <input {...getInputProps()} />
          <div className="upload-box">
            {uploadedFiles.length === 0 ? (
              <div className="upload-icon">
                <i className="fas fa-plus"></i>
                <p>Drag & drop some files here, or click to select files</p>
              </div>
            ) : (
              <div className="uploaded-images">
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="uploaded-image">
                    <img src={file.preview} alt={`upload-${index}`} />
                    <p>{file.name}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </fieldset>
    </div>
    </>
  );
};

export default YogaRegistration;
