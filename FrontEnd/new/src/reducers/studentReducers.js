import{
  
    FETCH_TUTORIAL_FAIL,
    FETCH_TUTORIAL_REQUEST,
    FETCH_TUTORIAL_SUCCESS,

    FETCH_SUBJECT_FAIL,
    FETCH_SUBJECT_REQUEST,
    FETCH_SUBJECT_SUCCESS,
    
    FETCH_QUIZ_QUESTION_FAIL,
    FETCH_QUIZ_QUESTION_REQUEST,
    FETCH_QUIZ_QUESTION_SUCCESS,

    FETCH_REFERENCE_FAIL,
    FETCH_REFERENCE_REQUEST,
    FETCH_REFERENCE_SUCCESS

}from '../constatnts/constants'



//Fetch tutorial
export const studentFetchTutorialReducer=(state ={},action)=>{
    switch(action.type){
      case FETCH_TUTORIAL_REQUEST:
          return {loading:true}
      case FETCH_TUTORIAL_SUCCESS:
          return{loading:false,response:action.payload}
       case FETCH_TUTORIAL_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }

}

// Fetch subject
export const studentFetchSubjectReducer=(state ={},action)=>{
    switch(action.type){
      case FETCH_SUBJECT_REQUEST:
          return {loading:true}
      case FETCH_SUBJECT_SUCCESS:
          return{loading:false,response:action.payload}
       case FETCH_SUBJECT_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }

}
//Fetch refernce
export const studentFetchReferenceReducer=(state ={},action)=>{
    switch(action.type){
      case FETCH_REFERENCE_REQUEST:
          return {loading:true}
      case FETCH_REFERENCE_SUCCESS:
          return{loading:false,response:action.payload}
       case FETCH_REFERENCE_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }

}
//Fetch quiz question

export const studentFetchQuizQuestionReducer=(state ={},action)=>{
    switch(action.type){
      case FETCH_QUIZ_QUESTION_REQUEST:
          return {loading:true}
      case FETCH_QUIZ_QUESTION_SUCCESS:
          return{loading:false,response:action.payload}
       case FETCH_QUIZ_QUESTION_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }

}