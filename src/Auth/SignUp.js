import { firebase } from '../Config/Firebase';
import { useNavigate } from 'react-router-dom'

const sinup = ((email, password) => {

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      firebase.firestore().collection('Doctors').add({
        email: email,
        password: password
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


const Login = ((email, password) => {
  const navigate = useNavigate()

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      firebase.firestore().collection('Doctors').add({
        email: email,
        password: password
      })
      navigate('/Dashboard')

      alert("Logged In")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..

      alert("error")
    });

})





export { sinup, Login }