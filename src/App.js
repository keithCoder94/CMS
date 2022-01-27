import './App.css';
import { LogIn } from './Components/LogIn';
import {SignUp} from './Components/SignUp';
import { Dashboard } from './Components/Dashboard';
import {Appointment} from './Components/Appointment';
import {Doctors} from './Components/Doctors';
import {DoctorsForm} from './Components/DoctorsForm';
import {Patients} from './Components/Patients';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
   <div className="App">
     <LogIn/>
     <SignUp/>
     <Dashboard/>
     <Appointment/>
     <Doctors/>
     <DoctorsForm/>
     <Patients/>
 
   </div>
  );
}
export default App;



