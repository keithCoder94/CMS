import './App.css';
import React , {useEffect}from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { LogIn } from './Components/LogIn';
import {SignUp} from './Components/SignUp';
import { Dashboard } from './Components/Dashboard';
import {Appointment} from './Components/Appointment';
import {Doctors} from './Components/Doctors';
import {DoctorsForm} from './Components/DoctorsForm';
import {Patients} from './Components/Patients';
import {getBookings} from './databaseServices/services'

function App() {

  useEffect(()=>{
    getBookings()

  }, [])
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='SignUp' element={<SignUp/>}/>
      <Route path='Dashboard' element={<Dashboard/>}/>
      <Route path='Appointment' element={<Appointment/>}/>
      <Route path='Doctors' element={<Doctors/>}/>
      <Route path='DoctorsForm' element={<DoctorsForm/>}/>
      <Route path='Patients' element={<Patients/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;



