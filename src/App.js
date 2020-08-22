import React from 'react';

import {BrowserRouter as Router,Route} from 'react-router-dom';
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
function App() {
  return (
    <Router>
    
    <Navbar />
    <br/>
    <Route path="/" exact component={ExercisesList} />
    <Route path="/create" component={CreateExercise} />
    <Route path="/user" component={CreateUser} />
  
  </Router>
  );
}

export default App;
