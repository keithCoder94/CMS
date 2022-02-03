import {firebase} from '../Config/Firebase';



const saveDoctor = ((name, email,)=>{
    firebase.firestore().collection("Doctors").add({


    }).then(()=>{


    }).catch(()=>{



    })
})


const getApps = ((name, email,)=>{
    firebase.firestore ().collection('Appointment').get({


    }).then(()=>{

    }).catch(()=>{


    })
})