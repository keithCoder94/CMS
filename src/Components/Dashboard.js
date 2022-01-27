import React from 'react';
// import './App.css';


export const Dashboard = () => {
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
            <p className="text2">Dashboard</p>
            <div className="info">
                <div className="total">
                    <div className="totalText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="96" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16" style={{ marginTop: "20px" }}>
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                        <div className="totals">
                            <h2>Total Patients</h2> <br />
                            <h2 style={{ marginLeft: "60px" }}>50</h2>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="totalText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="96" fill="currentColor" class="bi bi-journal-text" viewBox="0 0 16 16">
                            <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z" />
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z" />
                        </svg>
                        <div className="totals">
                            <h2>Appointments</h2> <br />
                            <h2 style={{ marginLeft: "60px" }}>74</h2>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="totalText">
                        <svg xmlns="http://www.w3.org/2000/svg" width="102" height="96" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <div className="totals">
                            <h2>Doctors</h2> <br />
                            <h2 style={{ marginLeft: "40px" }}>10</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lists">
                <div className="doctors-list">
                    <h4 className="name">Doctors List</h4>
                    <hr style={{ width: "750px", marginLeft: "30px" }} />
                    <div className="show">
                        <h5 style={{ marginLeft: "20px" }}>Show</h5>
                        <div className="no">
                            <p>10</p>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg> */}
                        </div>
                        <h5 style={{ marginLeft: "10px" }}>Entries</h5>
                        <h5 style={{marginLeft:"300px"}}>Search:</h5>
                        <input 
                    type="text" 
                    // placeholder="Search name" 
                   
                    />
                        
                    </div>
                    <div className="bar">
                        <h6>Doctors Name</h6>
                        <h6 style={{marginLeft:"110px"}}>Doctor Based On</h6>
                        <h6 style={{marginLeft:"110px"}}>Treatments</h6>
                        <h6 style={{marginLeft:"110px"}}>Reviews</h6>
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"90px"}}>Subscription</h6>
                        <h6 style={{marginLeft:"110px"}}>Women's Health</h6>
                        <h6 style={{marginLeft:"100px"}}>*****</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"90px"}}>Subscription</h6>
                        <h6 style={{marginLeft:"110px"}}>Women's Health</h6>
                        <h6 style={{marginLeft:"100px"}}>*****</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"90px"}}>Subscription</h6>
                        <h6 style={{marginLeft:"110px"}}>Women's Health</h6>
                        <h6 style={{marginLeft:"100px"}}>*****</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"90px"}}>Subscription</h6>
                        <h6 style={{marginLeft:"110px"}}>Women's Health</h6>
                        <h6 style={{marginLeft:"100px"}}>*****</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"90px"}}>Subscription</h6>
                        <h6 style={{marginLeft:"110px"}}>Women's Health</h6>
                        <h6 style={{marginLeft:"100px"}}>*****</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"90px"}}>Subscription</h6>
                        <h6 style={{marginLeft:"110px"}}>Women's Health</h6>
                        <h6 style={{marginLeft:"100px"}}>*****</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"90px"}}>Subscription</h6>
                        <h6 style={{marginLeft:"110px"}}>Women's Health</h6>
                        <h6 style={{marginLeft:"100px"}}>*****</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"90px"}}>Subscription</h6>
                        <h6 style={{marginLeft:"110px"}}>Women's Health</h6>
                        <h6 style={{marginLeft:"100px"}}>*****</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"90px"}}>Subscription</h6>
                        <h6 style={{marginLeft:"110px"}}>Women's Health</h6>
                        <h6 style={{marginLeft:"100px"}}>*****</h6>
                        
                    </div>
                  <div className="show">
                  <p className="text3">Showing 1 To 9 Of 9 Entries</p>
                  </div>
                  
                </div>
               
                <div className="doctors-list">
                    <h4 className="name">Latest Patients List</h4>
                    <hr style={{ width: "750px", marginLeft: "30px" }} />
                    <div className="show">
                        <h5 style={{ marginLeft: "20px" }}>Show</h5>
                        <div className="no">
                            <p>10</p>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg> */}
                        </div>
                        <h5 style={{ marginLeft: "10px" }}>Entries</h5>
                        <h5 style={{marginLeft:"300px"}}>Search:</h5>
                        <input 
                    type="text" 
                    // placeholder="Search name" 
                   
                    />
                        
                    </div>
                    <div className="bar">
                        <h6>Patients Name</h6>
                        <h6 style={{marginLeft:"110px"}}>Phone</h6>
                        <h6 style={{marginLeft:"110px"}}>Email</h6>
                        <h6 style={{marginLeft:"110px"}}>Gender</h6>
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{color:"rgba(5, 78, 222, 0.7)"}}>Olorato Pule</h6>
                        <h6 style={{marginLeft:"90px"}}>123456789</h6>
                        <h6 style={{marginLeft:"110px"}}>olorato@gmail.com</h6>
                        <h6 style={{marginLeft:"100px"}}>Female</h6>
                        
                    </div>
                   
                  <div className="show">
                  <p className="text3">Showing 1 To 9 Of 9 Entries</p>
                  </div>
                  
                </div>
               

            </div>

        </div>
    )
}
