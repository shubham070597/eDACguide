import { createStore, combineReducers, applyMiddleware } from 'redux'
import { userSignupReducer, userSigninReducer, userPaymentReducer, userConfirmReducer,checkPayReducer } from './reducers/userReducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { adminUpdateReferenceReducer,adminUpdateSubjectReducer,adminUpdateTutorialsReducer,adminAddQuizQuestionReducer, adminAddTutorialReducer ,adminAddReferenceReducer,adminAddSubjectReducer, addCourseReducer} from './reducers/adminReducers'
import {studentFetchQuizQuestionReducer,studentFetchReferenceReducer,studentFetchSubjectReducer,studentFetchTutorialReducer} from './reducers/studentReducers'
// combined reducers
const reducers = combineReducers({
  userSignup: userSignupReducer,
  userSignin: userSigninReducer,

  addQuizQue:adminAddQuizQuestionReducer,
  addTuto:adminAddTutorialReducer,
  addsub:adminAddSubjectReducer,
  addRefe:adminAddReferenceReducer,
  adminCourse:addCourseReducer,

  fetchTutorial:studentFetchTutorialReducer,
  fetchSubject:studentFetchSubjectReducer,
  fetchRefernceBook:studentFetchReferenceReducer,
  fetchQuiz:studentFetchQuizQuestionReducer,
  checkPay:checkPayReducer,

  payment:userPaymentReducer,
  otp:userConfirmReducer,

  UpdateSubject:adminUpdateSubjectReducer,
  UpdateTutorial:adminUpdateTutorialsReducer,
  UpdateReference:adminUpdateReferenceReducer,

  
})

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store