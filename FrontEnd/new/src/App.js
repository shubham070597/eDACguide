import './App.css';
import {BrowserRouter as Router ,Route, Switch} from 'react-router-dom'
import AboutScreen from './screens/AboutScreen'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import ModuleScreen from './screens/ModuleScreen'

import AddQuizQueScreen from './screens/adminScreens/AddQuizQuestion'
import AddRefernceScreen from './screens/adminScreens/AddReference'
import AddSubjectScreen from './screens/adminScreens/AddSubject'
import AddTutorialScreen from './screens/adminScreens/AddTutotials'

import QuizScreen from './screens/studentScreen/GetQuizScreen'
import ReferenceBookScreen from './screens/studentScreen/GetReferenceBookScreen'
import SubjectScreen from './screens/studentScreen/GetSubjectScreen'
import TutorialScreen from './screens/studentScreen/GetTutotialScreen'
import './App.css';
import PaymentScreen from './screens/Payment';
import PaymentOtpScreen from './screens/PaymentValidation';
import Adminnavigation from './components/AdminNavigationBar';
import StudentNavBar from './components/StudentNavBar';
import AboutScreenstudent from './screens/studentScreen/AboutScreenstudent'
import AboutScreenadmin from './screens/adminScreens/AboutScreenadmin'


import DBDA from './screens/homepage/DBDA'
import DAC from './screens/homepage/DAC'
import DMC from './screens/homepage/DMC'
import DAI from './screens/homepage/DAI'
import InterviewQuestions from './screens/InterviewQuestions';
import Profile from './screens/profile';
import ForgotPassScreen from './screens/forgotpass';
import Sider from './components/side';
import CollapsePage from './screens/homepage/DacSyllabus';
import { useEffect } from 'react';
import QuizPage from './screens/studentScreen/quizpage';
import AddCourse from './screens/adminScreens/AddCourse';
import DmcPage from './screens/homepage/DmcSyllabus';
import DbdaPage from './screens/homepage/DbdaSyllabus';
import DaiPage from './screens/homepage/DaiSyllabus';
import CreateQuiz from './screens/adminScreens/CreateQuiz.';
import CompanyScreen from './screens/homepage/CompanyScreen';
import UpdateSubject from './screens/adminScreens/UpdateSubject';
// import WelcomeScreen from './screens/studentScreen/welcome';




function App() {

  useEffect(()=>{})

  return (
    <div>
     <Router>
       
      {sessionStorage.getItem("user")==null && <Sider/>}
      {/* <Navigation/> */}
     {sessionStorage.getItem("role")=="ADMIN"&& <Adminnavigation/>}
     {sessionStorage.getItem("role")=="STUDENT"&& <StudentNavBar/>}
      <div className="container">
        <Switch>
          
       
      <Route path="/home" component={AboutScreen}></Route>
       <Route path="/homeamdin" component={AboutScreenadmin}></Route>
       <Route path="/homestudent" component={AboutScreenstudent}></Route>
       <Route path="/signin" component={SigninScreen}></Route>
       <Route path="/interview" component={InterviewQuestions}></Route>
       <Route path="/dacs" component={CollapsePage}></Route>
       <Route path="/dais" component={DaiPage}></Route>
       <Route path="/dbdas" component={DbdaPage}></Route>
       <Route path="/dmcs" component={DmcPage}></Route>
       
      
       <Route path ="/dbda" component={DBDA} ></Route>
       <Route path ="/dai" component={DAI} ></Route>
       <Route path ="/dmc" component={DMC} ></Route>
       <Route path ="/dac" component={DAC} ></Route>
       
       <Route path="/signup" component={SignupScreen}></Route>

       
      <Route path="/module" component={ModuleScreen}></Route>
      <Route path="/payment" component={PaymentScreen}></Route>
      <Route path="/validatepay" component={PaymentOtpScreen}></Route>
      <Route path="/company" component={ CompanyScreen}></Route>
      
     
     
       <Route path="/addque" component={AddQuizQueScreen}></Route>
       <Route path="/addreference" component={AddRefernceScreen}></Route>
       <Route path="/addsubject" component={AddSubjectScreen}></Route>
       <Route path="/addtutorial" component={AddTutorialScreen}></Route> 
       <Route path="/addcourse" component={AddCourse}></Route> 
       
      
       <Route path="/getquiz" component={QuizScreen}></Route>
       <Route path="/getsubject" component={SubjectScreen}></Route>
       <Route path="/getreference" component={ReferenceBookScreen}></Route>
       <Route path="/gettutorial" component={TutorialScreen}></Route>
       <Route path="/forgotepass" component={ForgotPassScreen}></Route>
       <Route path="/createquiz" component={CreateQuiz}></Route>
       <Route path="/updateSub" component={UpdateSubject}></Route>  
      
       
       <Route path="/profile" component={Profile}></Route>
    
       <Route path="/quizpage" component={QuizPage}></Route>

       
       </Switch>
       
       </div>
     </Router>
  
    </div>
  );
}

export default App;
