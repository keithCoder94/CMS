import { firebase } from '../Config/Firebase';



const saveDoctor = ((email, description, phonenumber, exprience, workingtime, backgroundeducation) => {
    firebase.firestore().collection("Doctors").add({
        email:email,
        description:description,
        phonenumber:phonenumber,
        exprience:exprience,
        workingtime:workingtime,
        backgroundeducation:backgroundeducation

    }).then(() => {

    }).catch(() => {

    })
})


const saveMedicalFacilities = (() => {
    firebase.firestore().collection("Doctors").add({
        email:email,
        description:description,
        phonenumber:phonenumber,
        exprience:exprience,
        workingtime:workingtime,
        backgroundeducation:backgroundeducation

    }).then(() => {

    }).catch(() => {

    })
})


const getBookings =  (()=>{
    firebase.firestore().collection('DoctorsAppointments').doc('doctorthapelo@gmail.com').collection('Bookings').onSnapshot((querySnapshot)=>{
        const dis = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        console.log(dis)
    return dis ;

    })
    

})


export {getBookings}