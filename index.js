import {Header,Main,Nav, Footer} from "./components";
import * as state from "./store";
import {slideShow} from "./library";
import firebaseConfig from "./Firebase /config.js";
import Navigo from "navigo";
import {auth, db, firebase} from "./Firebase ";


//console.log(auth)

const router = new Navigo(location.origin);


// var app = firebase.initializeApp(firebaseConfig);
//npm --experimental-modules run serve



function render (st=state.Main){

 document.querySelector("#root").innerHTML=`
 ${Header(st)}
 ${Nav()}
 ${Main(st)}
 ${Footer()}
 `;
 const currentPage = router.lastRouteResolved();
 if (currentPage.url === "/Gallery") {
  slideShow();
 }
 if (currentPage.url === "/CreateAnAccount"){
  const CreateAnAccount =document.getElementById("create-account")
  
  CreateAnAccount.addEventListener('click', function(){
    const first_name =document.getElementById("first_name");
    const last_name =document.getElementById("last_name");
    const email =document.getElementById("email").value;
    const username =document.getElementById("username");
    const password =document.getElementById("password").value;
    const password_confirm =document.getElementById("password_confirm");

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  });
}
} 

// if (currentPage.url === "/SignIn"){
//   const SignIn =document.getElementById("sign-in")
//   SignIn.addEventListener('click', function(){
//     const email =document.getElementById("email").value;
//     const password =document.getElementById("password").value;
//     console.log(email.value);
//     firebase.auth().signInWithEmailAndPassword()
//     .catch(function(error) {
//   // Handle Errors here.
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   if (errorCode == 'auth/weak-password') {
//     alert('The password is too weak.');
//   } else {
//     alert(errorMessage);
//     router.navigate("/SignIn")
//   }
//   console.log(error);
// });
//  router.updatePageLinks();
// }),




router.on({
  '/':  ( )=> render(state['Home'].main),
  'ContactUs': () => render(state['ContactUs'].main),
  'Gallery': () => render(state['Gallery'].main),
  'About': () => render(state['About'].main),
  //'SignIn': ()=> { console.log('Hello')
   //return render (state['SignIn'].main)
  //},
  'EducationBenefits': () => render(state['EducationBenefits'].main),
  'ResumeBuilder': () => render(state['ResumeBuilder'].main),
  'ResumeBuildercon': () => render(state['ResumeBuildercon'].main),
  'ResumeBuildercon2': () => render(state['ResumeBuildercon2'].main),
  'Volunteer': () => render(state['Volunteer'].main),
  'SquaredAway': () => render(state['SquaredAway'].main),
  //'CreateAnAccount': ()=> render(state['CreateAnAccount'].main)
})
.resolve();

router.on('SignIn', () => render (state['SignIn'].main),
'CreateAnAccount', () => render (state['CreateAnAccount'].main))


// db.collection

// auth ()


//const createAnAccount = document.querySelector("#create-account")


//export function createaccount() {(createAccount.addEventListener('submit', (e) => {
  //document.querySelector("#create-account"),
  //e.preventDefault();
//}
