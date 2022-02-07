import React,{useState} from 'react';
// import './App.css'
import { db } from '../Config/Firebase';

export const Appointment = () => {

    const viewAppointment =()=>{
        db.collection('Appointment').doc("doctor@email.com").collection('bookings')
        .onSnapshot((snapshot) => {
            const dis = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            setDoctor(dis)
        })
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
            <p className="text2">Appointment</p>
            <div className="show">
                <button className="btn">Delete Selected</button>
                {/* <p className="btn">Delete Selected</p> */}
                
            </div>
            <div className="appt2">
            <div className="show">
                        <h5 style={{ marginLeft: "20px", marginTop:"20px" }}>Show</h5>
                        <div className="no1">
                            <p >10</p>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
</svg> */}
                        </div>
                        <h5 style={{ marginLeft: "10px", marginTop:"20px" }}>Entries</h5>
                        <h5 style={{marginLeft:"1100px", marginTop:"20px"}}>Search:</h5>
                        <input 
                    type="text" 
                    // placeholder="Search name"
                    style={{height:"30px", marginLeft:"10px", marginTop:"20px"}} 
                   
                    />
                    </div>
                    <div className="appt-bar">
                        <h6>#</h6>
                        <h6 style={{marginLeft:"100px"}}>Appoitment ID</h6>
                        <h6 style={{marginLeft:"100px"}}>Patient ID No.</h6>
                        <h6 style={{marginLeft:"80px"}}>Amount</h6>
                        <h6 style={{marginLeft:"110px"}}>Doctors Name</h6>
                        <h6 style={{marginLeft:"100px"}}>Date</h6>
                        <h6 style={{marginLeft:"140px"}}>Payment Status</h6>
                        <h6 style={{marginLeft:"90px"}}>Status</h6>
                        <h6 style={{marginLeft:"100px"}}>View Appointment</h6>
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="remain">Remaining</p>
                        <p className="cancel">Cancelled</p>
                        <h6 style={{marginLeft:"100px"}}>View</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="remain">Remaining</p>
                        <p className="cancel">Cancelled</p>
                        <h6 style={{marginLeft:"100px"}}>View</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="payed">Paid</p>
                        <p className="complete">Completed</p>
                        <h6 style={{marginLeft:"100px", color:"#3E64FF"}}>View</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="remain">Remaining</p>
                        <p className="cancel">Cancelled</p>
                        <h6 style={{marginLeft:"100px"}}>View</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="payed">Paid</p>
                        <p className="complete">Completed</p>
                        <h6 style={{marginLeft:"100px", color:"#3E64FF"}}>View</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="remain">Remaining</p>
                        <p className="cancel">Cancelled</p>
                        <h6 style={{marginLeft:"100px", color:"#3E64FF"}}>View</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="remain">Remaining</p>
                        <p className="cancel">Cancelled</p>
                        <h6 style={{marginLeft:"100px"}}>View</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="payed">Paid</p>
                        <p className="complete">Completed</p>
                        <h6 style={{marginLeft:"100px", color:"#3E64FF"}}>View</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="payed">Paid</p>
                        <p className="complete">Completed</p>
                        <h6 style={{marginLeft:"100px", color:"#3E64FF"}}>View</h6>
                        
                    </div>
                    <div className="names">
                        <h6 style={{marginLeft:"10px"}}> 1</h6>
                        <h6 style={{marginLeft:"100px"}}>#331555</h6>
                        <h6 style={{marginLeft:"130px"}}>00000000000</h6>
                        <h6 style={{marginLeft:"100px"}}>R250</h6>
                        <h6 style={{marginLeft:"90px"}}>Dr. Bellamy Nicholas</h6>
                        <h6 style={{marginLeft:"60px"}}>2021/11/13</h6>
                        <p className="remain">Remaining</p>
                        <p className="cancel">Cancelled</p>
                        <h6 style={{marginLeft:"100px"}}>View</h6>
                        
                    </div>
                    <div className="show">
                  <p className="text3">Showing 1 To 9 Of 9 Entries</p>
                  </div>

            </div>
           

        </div>
    )
}
