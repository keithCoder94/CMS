import {firebase} from '../Config/Firebase';


const sinup =((email , password)=>{

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      firebase.firestore().collection('Doctors').add({
          email:email ,
          password:password
      })


      alert("gggvgv")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..

      alert("error")
    });

})


const login =((email , password)=>{

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      firebase.firestore().collection('Doctors').add({
          email:email ,
          password:password
      })


      alert("gggvgv")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      // ..

      alert("error")
    });

})





export {sinup, login}