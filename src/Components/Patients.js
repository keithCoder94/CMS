import React from 'react';
// import './App.css'

export const Patients = () => {
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
            <p className="text2">Patients</p>
            <div className="show">
                <button className="btn">Export</button>

            </div>
            <div className="appt3">
                <div className="show">
                    <h5 style={{ marginLeft: "20px", marginTop: "20px" }}>Show</h5>
                    <div className="no1">
                        <p >10</p>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg> */}
                    </div>
                    <h5 style={{ marginLeft: "10px", marginTop: "20px" }}>Entries</h5>
                    <h5 style={{ marginLeft: "900px", marginTop: "20px" }}>Search:</h5>
                    <input
                        type="text"
                        // placeholder="Search name"
                        style={{ height: "30px", marginLeft: "10px", marginTop: "20px" }}

                    />
                </div>
                <div className="appt-bar2">
                    <h6>#</h6>
                    <h6 style={{ marginLeft: "170px" }}>Patients Name</h6>
                    <h6 style={{ marginLeft: "170px" }}>Patients ID No.</h6>
                    <h6 style={{ marginLeft: "170px" }}>Email</h6>
                    <h6 style={{ marginLeft: "170px" }}>Status</h6>
                    <h6 style={{ marginLeft: "170px" }}>Actions</h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>
                <div className="names">
                    <h6 style={{ marginLeft: "10px" }}> 1</h6>
                    <h6 style={{ marginLeft: "180px" }}>Olorato Pule</h6>
                    <h6 style={{ marginLeft: "190px" }}>00000000000</h6>
                    <h6 style={{ marginLeft: "130px" }}>olorato@gmail.com</h6>
                    <h6 className="status"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16" style={{ paddingTop: "-10%" }}>
                        <circle cx="8" cy="8" r="8" />
                    </svg></h6>
                    <h6 style={{ marginLeft: "180px", display: "flex" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" style={{color:"red"}}>
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </h6>
                </div>







                <div className="show">
                    <p className="text3">Showing 1 To 9 Of 9 Entries</p>
                </div>

            </div>


        </div>
    )
}
