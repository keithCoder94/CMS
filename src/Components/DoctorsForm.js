import React, { useState } from 'react';
// import './App.css'

import { saveMedicalFacilities } from '../databaseServices/services';

export const DoctorsForm = () => {
    const [name, setName] = useState()
    const [specialty, seSpecialty] = useState()
    const [email, setEmail] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()
    const [totalPatients, setTotalPatients] = useState()
    const [phoneNumber, sePhoneNumber] = useState()
    const [ratings, setRatings] = useState()
    const [gender, setGender] = useState()
    const [workingDays, setWorkingDays] = useState()
    const [bio, seBio] = useState()

    const createDoctor = (name, specialty, email, dateOfBirth, totalPatients, phoneNumber, ratings, gender, workingDays, bio) => {
        saveMedicalFacilities(name, specialty, email, dateOfBirth, totalPatients, phoneNumber, ratings, gender, workingDays, bio)
    }

    return (
        <div>
            <div className="header">
                <h1 className="heading">CyberPharm</h1>
                <div className="screens">
                    <button className="dashboard">Dashboard</button>
                    <button className="appt">Appointment</button>
                    <button className="doctor">Doctors</button>
                    <button className="doctor">Patients</button>
                </div>
            </div>
            <p className="text2">Edit Doctor Information</p>
            <h5 className="di">Doctors Image*</h5>
            <div className="info">
                <div style={{ display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="350" height="350" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16" style={{ marginLeft: "40px" }}>
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                    </svg>
                    <form className="input">
                        <label style={{ marginLeft: '-40px' }}>
                            <h5>Name*</h5>
                            <input type="text" className="block" />
                        </label>
                    </form>
                    <form className="input">
                        <label>
                            <h5>Specialty*</h5>
                            <input type="text" className="block" />
                        </label>
                    </form>

                </div>

            </div>
            <div className="info">
                <form className="input2">
                    <label>
                        <h5>Email*</h5>
                        <input type="text" className="block" />
                    </label>
                </form>
                <form style={{ marginLeft: "200px", marginTop: "-265px" }}>
                    <label>
                        <h5>Experience(in years)*</h5>
                        <input type="text" className="block" />
                    </label>
                </form>

            </div>
            <div className="info">
                <form style={{ marginLeft: "550px", marginTop: "-175px" }}>
                    <label>
                        <h5>Date of Birth*</h5>
                        <input type="text" className="block" />
                    </label>
                </form>
                <form style={{ marginLeft: "200px", marginTop: "-175px" }}>
                    <label>
                        <h5>No. of Patients Worked With*</h5>
                        <input type="text" className="block" />
                    </label>
                </form>

            </div>
            <div className="info">
                <form style={{ marginLeft: "550px", marginTop: "-85px" }}>
                    <label>
                        <h5>Phone Number*</h5>
                        <input type="text" className="block" />
                    </label>
                </form>
                <form style={{ marginLeft: "200px", marginTop: "-85px" }}>
                    <label>
                        <h5>Ratings*</h5>
                        <input type="text" className="block" />
                    </label>
                </form>

            </div>
            <div className="info">
                <form style={{ marginLeft: "550px", marginTop: "10px" }}>
                    <label>
                        <h5>Gender*</h5>
                        <input type="text" className="block" />
                    </label>
                </form>
                <form style={{ marginLeft: "200px", marginTop: "10px" }}>
                    <label>
                        <h5>Working Days and Time*</h5>
                        <input type="text" className="block" />
                    </label>
                </form>

            </div>
            <div className="info">
                <form style={{ marginLeft: "550px", marginTop: "25px" }}>
                    <label>
                        <h5>Professional Bio*</h5>
                        <input type="text" className="bio" />
                    </label>
                </form>

            </div>

            <button className="add">Add</button>

        </div>
    )
}
