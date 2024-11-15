import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import './index.css';

export default function Water() {
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [waterIntake, setWaterIntake] = useState(null);

  
  function calculateWaterIntake(weight, activityLevel) {
    let intake;

    switch (activityLevel) {
      case 'sedentary':
        intake = weight * 30; 
        break;
      case 'lightly-active':
        intake = weight * 35; 
        break;
      case 'moderately-active':
        intake = weight * 40;
        break;
      case 'very-active':
        intake = weight * 45; 
        break;
      case 'super-active':
        intake = weight * 50; 
        break;
      default:
        intake = 0;
    }
    return intake;
  }

  const handleSubmit = () => {
    const intake = calculateWaterIntake(weight, activityLevel);
    if (intake > 0) {
      setWaterIntake(intake);
    } else {
      setWaterIntake(null);
      alert("SORRY");
    }
  };

  return (
    <div className="con">
      <h1 className='header'>Water Intake Calculator</h1>

      <label className='label' htmlFor="weight">Your Weight (kg):</label>
      <input className='input'
        type="number"
        id="weight"
        placeholder="Enter your weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />

      <label htmlFor="activity-level">Activity Level:</label>
      <select className='select'
        id="activity-level"
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
        required
      >
        <option value="">Select your activity level</option>
        <option value="sedentary">Sedentary (little to no exercise)</option>
        <option value="lightly-active">Lightly active (light exercise/sports 1-3 days/week)</option>
        <option value="moderately-active">Moderately active (moderate exercise/sports 3-5 days/week)</option>
        <option value="very-active">Very active (hard exercise/sports 6-7 days a week)</option>
        <option value="super-active">Super active (very hard exercise, physical job, or training twice a day)</option>
      </select>

      <button className='buttone' onClick={handleSubmit}>Calculate Water Intake</button>

      <div className="result">
        {waterIntake !== null ? (
          <p>Recommended daily water intake: {waterIntake.toFixed(2)} ml</p>
        ) : (
          <p>Please fill out all fields.</p>
        )}
      </div>
    </div>
  );
}



