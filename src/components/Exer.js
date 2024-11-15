import React from 'react';

const exercises = [
  { day: 1, title: 'Full Body Workout', exercises: [
    { name: 'Squats', sets: '3 sets of 15 reps' },
    { name: 'Push-ups', sets: '3 sets of 10 reps' },
    { name: 'Plank', sets: 'Hold for 30 seconds' }
  ]},
  { day: 2, title: 'Cardio', exercises: [
    { name: 'Running or Jogging', sets: '20 minutes' },
    { name: 'Jumping Jacks', sets: '3 sets of 30 seconds' }
  ]},
  { day: 3, title: 'Upper Body Strength', exercises: [
    { name: 'Push-ups', sets: '4 sets of 12 reps' },
    { name: 'Triceps Dips', sets: '3 sets of 10 reps' },
    { name: 'Bicep Curls (with dumbbells)', sets: '3 sets of 12 reps' }
  ]},
  { day: 4, title: 'Lower Body Strength', exercises: [
    { name: 'Squats', sets: '4 sets of 15 reps' },
    { name: 'Lunges', sets: '3 sets of 12 reps per leg' },
    { name: 'Glute Bridges', sets: '3 sets of 20 reps' }
  ]},
  { day: 5, title: 'Cardio and Core', exercises: [
    { name: 'Jump Rope', sets: '10 minutes' },
    { name: 'Mountain Climbers', sets: '3 sets of 30 seconds' },
    { name: 'Russian Twists', sets: '3 sets of 20 reps' }
  ]},
  { day: 6, title: 'Active Rest Day', exercises: [
    { name: 'Take a walk or do light stretching', sets: '30 minutes' }
  ]},
  { day: 7, title: 'Rest Day', exercises: [
    { name: 'Rest and recovery', sets: 'Relax' }
  ]},
  { day: 8, title: 'Full Body Workout', exercises: [
    { name: 'Squats', sets: '3 sets of 15 reps' },
    { name: 'Push-ups', sets: '3 sets of 10 reps' },
    { name: 'Plank', sets: 'Hold for 30 seconds' }
  ]},
  { day: 9, title: 'Cardio', exercises: [
    { name: 'Running or Jogging', sets: '20 minutes' },
    { name: 'Jumping Jacks', sets: '3 sets of 30 seconds' }
  ]},
  { day: 10, title: 'Upper Body Strength', exercises: [
    { name: 'Push-ups', sets: '4 sets of 12 reps' },
    { name: 'Triceps Dips', sets: '3 sets of 10 reps' },
    { name: 'Bicep Curls (with dumbbells)', sets: '3 sets of 12 reps' }
  ]},
  { day: 11, title: 'Lower Body Strength', exercises: [
    { name: 'Squats', sets: '4 sets of 15 reps' },
    { name: 'Lunges', sets: '3 sets of 12 reps per leg' },
    { name: 'Glute Bridges', sets: '3 sets of 20 reps' }
  ]},
  { day: 12, title: 'Cardio and Core', exercises: [
    { name: 'Jump Rope', sets: '10 minutes' },
    { name: 'Mountain Climbers', sets: '3 sets of 30 seconds' },
    { name: 'Russian Twists', sets: '3 sets of 20 reps' }
  ]},
  { day: 13, title: 'Active Rest Day', exercises: [
    { name: 'Take a walk or do light stretching', sets: '30 minutes' }
  ]},
  { day: 14, title: 'Rest Day', exercises: [
    { name: 'Rest and recovery', sets: 'Relax' }
  ]},
  { day: 15, title: 'Full Body Workout', exercises: [
    { name: 'Squats', sets: '3 sets of 15 reps' },
    { name: 'Push-ups', sets: '3 sets of 10 reps' },
    { name: 'Plank', sets: 'Hold for 30 seconds' }
  ]},
  { day: 16, title: 'Cardio', exercises: [
    { name: 'Running or Jogging', sets: '20 minutes' },
    { name: 'Jumping Jacks', sets: '3 sets of 30 seconds' }
  ]},
  { day: 17, title: 'Upper Body Strength', exercises: [
    { name: 'Push-ups', sets: '4 sets of 12 reps' },
    { name: 'Triceps Dips', sets: '3 sets of 10 reps' },
    { name: 'Bicep Curls (with dumbbells)', sets: '3 sets of 12 reps' }
  ]},
  { day: 18, title: 'Lower Body Strength', exercises: [
    { name: 'Squats', sets: '4 sets of 15 reps' },
    { name: 'Lunges', sets: '3 sets of 12 reps per leg' },
    { name: 'Glute Bridges', sets: '3 sets of 20 reps' }
  ]},
  { day: 19, title: 'Cardio and Core', exercises: [
    { name: 'Jump Rope', sets: '10 minutes' },
    { name: 'Mountain Climbers', sets: '3 sets of 30 seconds' },
    { name: 'Russian Twists', sets: '3 sets of 20 reps' }
  ]},
  { day: 20, title: 'Active Rest Day', exercises: [
    { name: 'Take a walk or do light stretching', sets: '30 minutes' }
  ]},
  { day: 21, title: 'Rest Day', exercises: [
    { name: 'Rest and recovery', sets: 'Relax' }
  ]},
  { day: 22, title: 'Full Body Workout', exercises: [
    { name: 'Squats', sets: '3 sets of 15 reps' },
    { name: 'Push-ups', sets: '3 sets of 10 reps' },
    { name: 'Plank', sets: 'Hold for 30 seconds' }
  ]},
  { day: 23, title: 'Cardio', exercises: [
    { name: 'Running or Jogging', sets: '20 minutes' },
    { name: 'Jumping Jacks', sets: '3 sets of 30 seconds' }
  ]},
  { day: 24, title: 'Upper Body Strength', exercises: [
    { name: 'Push-ups', sets: '4 sets of 12 reps' },
    { name: 'Triceps Dips', sets: '3 sets of 10 reps' },
    { name: 'Bicep Curls (with dumbbells)', sets: '3 sets of 12 reps' }
  ]},
  { day: 25, title: 'Lower Body Strength', exercises: [
    { name: 'Squats', sets: '4 sets of 15 reps' },
    { name: 'Lunges', sets: '3 sets of 12 reps per leg' },
    { name: 'Glute Bridges', sets: '3 sets of 20 reps' }
  ]},
  { day: 26, title: 'Cardio and Core', exercises: [
    { name: 'Jump Rope', sets: '10 minutes' },
    { name: 'Mountain Climbers', sets: '3 sets of 30 seconds' },
    { name: 'Russian Twists', sets: '3 sets of 20 reps' }
  ]},
  { day: 27, title: 'Active Rest Day', exercises: [
    { name: 'Take a walk or do light stretching', sets: '30 minutes' }
  ]},
  { day: 28, title: 'Rest Day', exercises: [
    { name: 'Rest and recovery', sets: 'Relax' }
  ]},
  { day: 29, title: 'Full Body Workout', exercises: [
    { name: 'Squats', sets: '3 sets of 15 reps' },
    { name: 'Push-ups', sets: '3 sets of 10 reps' },
    { name: 'Plank', sets: 'Hold for 30 seconds' }
  ]},
  { day: 30, title: 'Cardio', exercises: [
    { name: 'Running or Jogging', sets: '20 minutes' },
    { name: 'Jumping Jacks', sets: '3 sets of 30 seconds' }
  ]},
];

const ExerciseDay = ({ day, title, exercises }) => (
  <div className="exercise-day">
    <h3>Day {day}: {title}</h3>
    {exercises.map((exercise, index) => (
      <p key={index}>{exercise.name} - {exercise.sets}</p>
    ))}
  </div>
);

const Exer = () => {
  return (
    <div className="containerr">
      <h1 className='h7'>30-Day Exercise Plan</h1>
      <p>Follow this exercise plan to get fit in 30 days. Each day has a specific exercise routine to follow. Be consistent and track your progress!</p>
 
      {exercises.map((exerciseData) => (
        <ExerciseDay 
          key={exerciseData.day} 
          day={exerciseData.day} 
          title={exerciseData.title} 
          exercises={exerciseData.exercises} 
       />
      ))}

      <div  className="footer">
        <p>Stay consistent, and you'll see results in 30 days!</p>
      </div>
    </div>
  );
};

export default Exer;

