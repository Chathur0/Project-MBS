import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import i5 from '/program/profile.png'
import i6 from '/program/slip.jpeg'
import Nav from '../components/navBar'
import Footer from '../components/footer'
import { Link } from 'react-router-dom';

const YogaRegistration = () => {
  const initialData = [
    { name: "Rashmika Perera", email: "rashmika@gmail.com", status: null, selectedDate: null },
    { name: "Rashmika Perera", email: "rashmika@gmail.com", status: null, selectedDate: null },
    { name: "Rashmika Perera", email: "rashmika@gmail.com", status: null, selectedDate: null },
    { name: "Rashmika Perera", email: "rashmika@gmail.com", status: null, selectedDate: null }
  ];

  const [registrations, setRegistrations] = useState(initialData);
  const [showNote, setShowNote] = useState(false);
  const [showDatePopup, setShowDatePopup] = useState(false);
  const [selectedSlip, setSelectedSlip] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleSlipClick = (slip) => {
    setSelectedSlip(slip);
    setShowNote(true);
  };

  const handleCalendarClick = (index) => {
    setCurrentIndex(index);
    setShowDatePopup(true);
  };

  const closeNote = () => {
    setShowNote(false);
  };

  const closeDatePopup = () => {
    setShowDatePopup(false);
  };

  const handleApprove = (index) => {
    const newRegistrations = [...registrations];
    newRegistrations[index].status = 'approved';
    setRegistrations(newRegistrations);
  };

  const handleReject = (index) => {
    const newRegistrations = [...registrations];
    newRegistrations[index].status = 'rejected';
    setRegistrations(newRegistrations);
  };

  const handleDateChange = (date) => {
    const newRegistrations = [...registrations];
    newRegistrations[currentIndex].selectedDate = date.toLocaleDateString();
    setRegistrations(newRegistrations);
    setShowDatePopup(false);
  };

  return (
    <><style>{`.container {
      max-width: 1000px;
      margin: auto;
      padding: 20px;
      font-family: Arial, sans-serif;
      position: relative;
    }
    
    h2 {
      text-align: center;
      margin-bottom: 20px;
      color:#05062d;
    }
    
    .registration-table {
      width: 100%;
      border-collapse: collapse;
    }
    
    .registration-table th,
    .registration-table td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: center;
    }
    
    .registration-table th {
      background-color: #f4f4f4;
    }
    
    .clickable {
      cursor: pointer;
    }
    
    .action-buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    
    .add-program-btn {
      background-color: green;
      color: white;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      margin: 5px;
    }
    
    .left-corner {
      align-self: flex-start;
    }
    
    .right-corner {
      align-self: flex-end;
    }
    
    .approve-btn {
      background-color: green;
      color: white;
      padding: 5px 10px;
      border: none;
      cursor: pointer;
      margin-right: 5px;
    }
    
    .reject-btn {
      background-color: red;
      color: white;
      padding: 5px 10px;
      border: none;
      cursor: pointer;
    }
    
    .status-icon {
      font-size: 20px;
    }
    
    .status-icon.approved {
      color: green;
    }
    
    .status-icon.rejected {
      color: red;
    }
    
    .note-popup,
    .date-popup {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .popup-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
    }
    
    .calendar {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .date {
      margin: 5px;
      padding: 10px;
      background-color: #f4f4f4;
      cursor: pointer;
    }
    
    .selected-date {
      margin-top: 10px;
      font-weight: bold;
    }
    
    @media (max-width: 768px) {
      .registration-table th,
      .registration-table td {
        padding: 5px;
      }
    
      .add-program-btn {
        padding: 8px 15px;
      }
    
      .action-buttons {
        flex-direction: column;
        align-items: center;
      }
    
      .left-corner, .right-corner {
        align-self: center;
      }
    }
    `}</style><Nav/>
    <div className="container">
      <h2><b>Manage Yoga Registration</b></h2>
      <table className="registration-table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Slip</th>
            <th>Total</th>
            <th>Days</th>
            <th>Approve or Reject</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration, index) => (
            <tr key={index}>
              <td><img src= {i5} alt="Profile" /></td>
              <td>{registration.name}</td>
              <td>{registration.email}</td>
              <td><img src={i6} alt="Slip" onClick={() => handleSlipClick("/slip.jpeg")} className="clickable" /></td>
              <td>10$</td>
              <td>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/calendar.png" 
                  alt="Calendar"
                  onClick={() => handleCalendarClick(index)}
                  className="clickable calendar-icon"
                />
                {registration.selectedDate && <div className="selected-date">Selected Date: {registration.selectedDate}</div>}
              </td>
              <td>
                {registration.status === null ? (
                  <>
                    <button className="approve-btn" onClick={() => handleApprove(index)}>Approve</button>
                    <button className="reject-btn" onClick={() => handleReject(index)}>Reject</button>
                  </>
                ) : registration.status === 'approved' ? (
                  <span className="status-icon approved">&#10004;</span>
                ) : (
                  <span className="status-icon rejected">&#10006;</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="action-buttons">
        <button className="add-program-btn left-corner">Add Upcoming Programs</button>
        <button className="add-program-btn right-corner">Add Previous Programs</button>
      </div>
      {showNote && (
        <div className="note-popup">
          <div className="popup-content">
            <img src={selectedSlip} alt="Slip" />
            <button onClick={closeNote}>Close</button>
          </div>
        </div>
      )}
      {showDatePopup && (
        <div className="date-popup">
          <div className="popup-content">
            <Calendar onChange={handleDateChange} />
            <button onClick={closeDatePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default YogaRegistration;
