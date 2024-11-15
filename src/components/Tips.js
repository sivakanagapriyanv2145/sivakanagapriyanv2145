import React from 'react';


function Tips() {
  const tips = [
    '💧 Drink plenty of water before, during, and after your workout.',
    '🏃‍♂️ Start slow, and gradually increase the intensity of your workouts.',
    '🧘‍♀️ Don’t skip warm-up and cool-down exercises.',
    '🍏 Eat a balanced diet rich in proteins, carbs, and healthy fats.',
    '😴 Get plenty of sleep to allow your muscles to recover.',
    '🏋️‍♂️ Consistency is key to seeing progress in your fitness journey.',
    '🧠 Focus on mental well-being alongside physical fitness.',
    '🌞 Work out in the morning to boost your energy for the day.',
    '⏳ Take rest days to prevent injury and allow recovery.',
    '🍎 Eating post-workout snacks helps muscle recovery.'
  ];

  return (
    <div className="carrot-container">
      <h2 className="cabbage-title">Your Fitness Tips 💪</h2>
      <div className="lettuce-tips">
        {tips.map((tip, index) => (
          <div key={index} className="broccoli-tip">
            <p className="spinach-text">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
