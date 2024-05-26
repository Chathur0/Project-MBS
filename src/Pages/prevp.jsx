import React, { useState } from 'react';

function AddPreviousPrograms() {
  const [formData, setFormData] = useState({
    programType: 'Meditation',
    date: '12/04/2024',
    link: 'https://www.youtube.com',
    description: '',
    programImages: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? Array.from(files) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  const handleAddUpcomingPrograms = () => {
    // Add logic for handling upcoming programs
    console.log('Handling upcoming programs...');
  };

  return (
    <>
    <style>{`.form-container {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9; /* Light gray background */
  }
  
  .form-container h2 {
    text-align: center;
    color: #333; /* Darker gray for text */
  }
  
  .form-container label {
    margin-bottom: 5px;
    display: block;
    color: #333; /* Darker gray for text */
  }
  
  .form-container input[type="text"],
  .form-container input[type="date"],
  .form-container textarea,
  .form-container select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .form-section {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 4px;
    background-color: #f1f1f1; /* Slightly darker gray for fieldset background */
  }
  
  .form-container .skip-button {
    background-color: #ccc; /* Light gray for skip button */
    color: black;
    width: auto; /* Smaller width for skip button */
    align-self: flex-end;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    /* Align skip button to the right */
  }
  
  .form-container .skip-button:hover {
    background-color: #bbb; /* Darker gray on hover */
  }
  
  .form-container ul {
    padding: 0;
  }
  
  .form-container li {
    list-style: none;
    color: #333; /* Darker gray for text */
  }
  
  .buttons-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 5px 20px;
  }
  
  .program-button {
    background-color: #999; /* Gray background */
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 48%; /* Adjust width to fit two buttons in a row */
  }
  
  .program-button:hover {
    background-color: #888; /* Darker gray on hover */
  }
  
  /* Adjustments for buttons */
  .add-buttons-container {
    display: flex;
    justify-content: space-between;
  }
  
  /* Responsive */
  @media screen and (max-width: 600px) {
    .form-container {
      width: 100%;
    }
  
    .add-buttons-container {
      flex-direction: column;
      align-items: center;
    }
  
    .program-button, .skip-button {
      width: 100%;
      margin-bottom: 10px;
    }
  
    .skip-button {
      width: 100%;
    }
  }
  
  /* Additional responsive tweaks */
  @media screen and (max-width: 480px) {
    .form-container {
      padding: 15px;
    }
  
    .form-container h2 {
      font-size: 1.5em;
    }
  
    .buttons-container {
      flex-direction: column;
      align-items: center;
    }
  
    .program-button, .skip-button {
      width: 100%;
      margin-bottom: 10px;
    }
  
    .form-container input[type="text"],
    .form-container input[type="date"],
    .form-container textarea,
    .form-container select {
      padding: 6px;
      font-size: 1em;
    }
  }
   `}</style><div className="form-container">
      <h2>ADD Previous Programs</h2>
      <form onSubmit={handleSubmit}>
        <fieldset className="form-section">
          <div>
            <label>Program type :</label>
            <select name="programType" value={formData.programType} onChange={handleChange}>
              <option value="Meditation">Meditation</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <div>
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
          </div>
          <div>
            <label>Link :</label>
            <input type="text" name="link" value={formData.link} onChange={handleChange} />
          </div>
          <div>
            <label>Description :</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
        </fieldset>
        <fieldset className="form-section">
          <div>
            <label>Images</label>
            <input type="file" name="programImages" onChange={handleChange} multiple />
          </div>
          <div>
            <label>Program images :</label>
            <ul>
              {formData.programImages.map((image, index) => (
                <li key={index}>{image.name}</li>
              ))}
            </ul>
          </div>
        </fieldset>
        <div className="buttons-container">
          <button type="submit" className="skip-button">Add programs</button>
        </div>
      </form>
      
    </div>
    
    <div className="buttons-container">
        <button type="button" className="program-button">Slip manage her</button>
        <button type="button"  className="program-button">Add upcoming programs</button>
      </div>
      </>
  );
}

export default AddPreviousPrograms;
