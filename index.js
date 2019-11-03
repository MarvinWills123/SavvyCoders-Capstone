import {Header,Main,Nav, Footer} from "./components";
import * as state from "./store";
import {slideShow} from "./library"


import Navigo from "navigo";


const router = new Navigo(location.origin);



function render (st=state.Main){

 document.querySelector("#root").innerHTML=`
 ${Header(st)}
 ${Nav()}
 ${Main(st)}
 ${Footer()}
 `;
 const currentPage = router.lastRouteResolved();
 if (currentPage.url === "/Gallery") {
   console.log('let\'s load the slideshow')
  slideShow();
 }
 router.updatePageLinks();
} 





router.on({
  '/':  ( )=> render(state['Home'].main),
  'ContactUs': () => render(state['ContactUs'].main),
  'Gallery': () => render(state['Gallery'].main),
  'About': () => render(state['About'].main),
  'SignIn': ()=>render (state['SignIn'].main),
  'EducationBenefits': () => render(state['EducationBenefits'].main),
  'ResumeBuilder': () => render(state['ResumeBuilder'].main),
  'ResumeBuildercon': () => render(state['ResumeBuildercon'].main),
  'ResumeBuildercon2': () => render(state['ResumeBuildercon2'].main),
  'Volunteer': () => render(state['Volunteer'].main),
  'SquaredAway': () => render(state['SquaredAway'].main),
  'CreateAnAccount': ()=> render(state['CreateAnAccount'].main)
})
.resolve();








