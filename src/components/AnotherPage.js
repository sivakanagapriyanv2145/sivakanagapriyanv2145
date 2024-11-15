import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { firestore } from './firebase';

function AnotherPage() {
  const [weight, setWeight] = useState('');
  const [duration, setDuration] = useState('');
  const [calories, setCalories] = useState(null);

  const saveCalories = async (calories, activity) => {
    const caloriesRef = collection(firestore, 'caloriesData');
    try {
      await addDoc(caloriesRef, {
        weight,
        duration,
        calories,
        timestamp: Timestamp.now(),
        activity,
      });
      console.log("Calories data saved");
    } catch (error) {
      console.error("Error in saving", error);
    }
  };

  const calculateCalories = (factor, activityType) => {
    const weightm = parseFloat(weight);
    const durationm = parseFloat(duration);
    if (weightm > 0 && durationm > 0) {
      const res = factor * weightm * durationm;
      setCalories(res);
      saveCalories(res, activityType);  
    } else {
      alert("Enter positive values");
    }
  };

  return (
    <>
      <center>
        <div className='v1'>
          <h1 className='w1'>Calories Calculator</h1>
          <p className='x1'>Your Weight (Kg)</p>
          <input
            type='number'
            placeholder='Enter Your Weight'
            className='y1'
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <p className='z1'>Duration in Hours</p>
          <input
            type='number'
            placeholder='Enter Duration in Hours'
            className='a2'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          <button onClick={() => calculateCalories(3.67, 'Walking')} className='a3'>Walking</button>
          <button onClick={() => calculateCalories(6, 'Exercise')} className='a4'>Exercise</button>
          <button onClick={() => calculateCalories(12, 'Running')} className='a5'>Running</button>
          {calories !== null && <h2 className='a6'>Calories Burned: {calories}</h2>}
        </div>
      </center>
    </>
  );
}

export default AnotherPage;
