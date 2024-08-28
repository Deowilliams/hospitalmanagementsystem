import React from 'react';
import './MainD.css';
import UserProfile from './UserProfile';
import NutritionGuidance from './NutritionGuidance';
import WorkoutTracker from './WorkoutTracker';
import NavBar from '../NavBar';

const Main = () => {
  return (
    <div>
      <NavBar/>
    <div className="app" >
      <h1>Medi<span>Planner</span></h1>
      <div className="dashboard">
        <UserProfile />
        <WorkoutTracker />
        <NutritionGuidance />
      </div>
    </div>
    </div>
  )
}

export default Main