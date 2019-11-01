import {Header,Main,Nav, Footer} from "./components";
import * as state from "./store";
import {slideshow} from "./library"


import Navigo from "navigo";


const router = new Navigo(location.origin);



function render (st=state.Main){

 document.querySelector("#root").innerHTML=`
 ${Header(st)}
 ${Nav()}
 ${Main(st)}
 ${Footer()}
 `;
 const currentpage = router.lastRouteResolved ();
 if (currentpage.url === "/Gallery") {
     slideshow()
     console.log(slideshow);
 }
 router.updatePageLinks();
} 





router.on({
  '/':  ( )=> render(state['Home'].main),
  'Uontact us': () => render(state['ContactUs'].main),
  'Gallery': () => render(state['Gallery'].main),
  'About': () => render(state['About'].main),
  'SignIn': ()=>render (state['SignIn'].main),
  'EducationBenefits': () => render(state['EducationBenefits'].main),
  'ResumeBuilder': () => render(state['ResumeBuilder'].main),
  'ResumeBuildercon': () => render(state['ResumeBuilderCon'].main),
  'ResumeBuildercon2': () => render(state['ResumeBuilderCon2'].main),
  'volunteer': () => render(state['Volunteer'].main),
  'SqaureAway': () => render(state['SquareAway'].main),
  'CreateAnAccount': ()=> render(state['CreateAnAccount'].main)
})
.resolve();








