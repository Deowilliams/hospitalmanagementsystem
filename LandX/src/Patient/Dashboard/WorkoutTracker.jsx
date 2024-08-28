import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorkoutTracker.css';

const WorkoutTracker = () => {
  const [workouts, setWorkouts] = useState([]);
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // Fetch exercises from an API
    axios.get('https://jsonplaceholder.typicode.com/posts')  // Replace this URL with the API endpoint for exercise data
      .then(response => {
        // Assuming the response contains an array of exercises
        const exerciseData = response.data.slice(0, 10).map(item => ({
          id: item.id,
          exercise: item.title,  // Mock data: using title as exercise name
        }));
        setExercises(exerciseData);
      })
      .catch(error => {
        console.error("There was an error fetching the exercise data!", error);
      });
  }, []);

  const addWorkout = () => {
    const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
    const newWorkout = {
      id: workouts.length + 1,
      date: new Date().toLocaleDateString(),
      exercise: randomExercise ? randomExercise.exercise : 'Exercise not available',
      sets: Math.floor(Math.random() * 5) + 1,  // Random sets between 1 and 5
    };
    setWorkouts([...workouts, newWorkout]);
  };

  return (
    <div className="workout-tracker">
      <h1 style={{fontFamily: "'Orbitron', sans-serif"}}>MEDICATION TODAY</h1>
      <button className="button" onClick={addWorkout} style={{fontFamily: "'Orbitron', sans-serif"}}> + A D D</button>
      <div className="workout-list">
        {workouts.map(workout => (
          <div key={workout.id} className="workout-item">
            <div><strong>Date:</strong> {workout.date}</div>
            <div><strong>Tablet:</strong> {workout.exercise}</div>
            <div><strong>Dosage:</strong> {workout.sets}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkoutTracker;
