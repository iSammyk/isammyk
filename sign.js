
  // Import the functions you need from the SDKs you need
  
  const firebaseConfig = {
    apiKey: "AIzaSyCwVfH-A0BmPjRWef4VEdk4IAImHFLA1Ek",
    authDomain: "isammy-app.firebaseapp.com",
    projectId: "isammy-app",
    storageBucket: "isammy-app.appspot.com",
    messagingSenderId: "581637815341",
    appId: "1:581637815341:web:33eb5fc8ad00c97a148ca4",
    measurementId: "G-LXBM3HSSTT"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  let firstname = document.getElementById("firstname")
  let lastname = document.getElementById("lastname")
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let cpassword = document.getElementById("cpassword")

  function sub(ev){
   ev.preventDefault()
   

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        var user = userCredential.user;
       
    //   const user = firebase.auth().currentUser;
    if (user) {
        alert("signup Successful ")
        firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
          alert("verification sent")
          // ...
        }); 
        window.location.href ="login.html"
    }

user.updateProfile({
  displayName: "lastname.value",
//   photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Update successful
  // ...
}).catch((error) => {
  // An error occurred
  // ...
});  
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("error siging up")
    });

  }