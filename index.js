import {Header,Main,Nav, Footer} from "./components";
import * as state from "./store";


import Navigo from "navigo";


const router = new Navigo();



function render (st=state.Main){

 document.querySelector("#root").innerHTML=`
 ${Header(st)}
 ${Nav(st)}
 ${Main(st)}
 ${Footer(st)}
` } 



router.on({'/':  ( )=> render(state['Home'].main),
'contact us': () => render(state['ContactUs'].main),
'gallery': () => render(state['Gallery'].main),
'about': () => render(state['About'].main),
'sign in': ()=>render (state['SignIn'].main),
'education benefits': () => render(state['EducationBenefits'].main),
'resume builder': () => render(state['ResumeBuilder'].main)})
.resolve();