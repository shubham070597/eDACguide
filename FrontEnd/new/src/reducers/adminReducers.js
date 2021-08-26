import{
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
    
    ADD_TUTORIAL_FAIL,
    ADD_TUTORIAL_REQUEST,
    ADD_TUTORIAL_SUCCESS,


    ADD_SUBJECT_FAIL,
    ADD_SUBJECT_REQUEST,
    ADD_SUBJECT_SUCCESS,
    
    ADD_QUIZ_QUESTION_FAIL,
    ADD_QUIZ_QUESTION_REQUEST,
    ADD_QUIZ_QUESTION_SUCCESS,

    ADD_REFERENCE_FAIL,
    ADD_REFERENCE_REQUEST,
    ADD_REFERENCE_SUCCESS,

    UPDATE_SUBJECT_FAIL,
    UPDATE_SUBJECT_REQUEST,
    UPDATE_SUBJECT_SUCCESS,

    UPDATE_REFERENCE_FAIL,
    UPDATE_REFERENCE_REQUEST,
    UPDATE_REFERENCE_SUCCESS,

    UPDATE_TUTORIAL_FAIL,
    UPDATE_TUTORIAL_REQUEST,
    UPDATE_TUTORIAL_SUCCESS,

    ADMIN_COURSEADD_FAIL,
ADMIN_COURSEADD_SUCCESS,
ADMIN_COURSEADD_REQUEST,

    

}from '../constatnts/constants'

//signin
export const userSigninReducer=(state ={},action)=>{
    switch(action.type){
      case USER_SIGNIN_REQUEST:
          return {loading:true}
      case USER_SIGNIN_SUCCESS:
          return{loading:false,response:action.payload}
       case USER_SIGNIN_FAIL:
           return {loading:false,error:action.payload} 
       case USER_SIGNOUT:
           return {}
           default:
               return state       

    }

}

//add tutorial
export const adminAddTutorialReducer=(state ={},action)=>{
    switch(action.type){
      case ADD_TUTORIAL_REQUEST:
          return {loading:true}
      case ADD_TUTORIAL_SUCCESS:
          return{loading:false,response:action.payload}
       case ADD_TUTORIAL_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }

}

// add subject
export const adminAddSubjectReducer=(state ={},action)=>{
    switch(action.type){
      case ADD_SUBJECT_REQUEST:
          return {loading:true}
      case ADD_SUBJECT_SUCCESS:
          return{loading:false,response:action.payload}
       case ADD_SUBJECT_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }

}
//add refernce
export const adminAddReferenceReducer=(state ={},action)=>{
    switch(action.type){
      case ADD_REFERENCE_REQUEST:
          return {loading:true}
      case ADD_REFERENCE_SUCCESS:
          return{loading:false,response:action.payload}
       case ADD_REFERENCE_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }

}
//add quiz question

export const adminAddQuizQuestionReducer=(state ={},action)=>{
    switch(action.type){
      case ADD_QUIZ_QUESTION_REQUEST:
          return {loading:true}
      case ADD_QUIZ_QUESTION_SUCCESS:
          return{loading:false,response:action.payload}
       case ADD_QUIZ_QUESTION_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }

}


export const addCourseReducer =(state ={}, action)=>{
    switch(action.type){
        case ADMIN_COURSEADD_REQUEST:
            return {loading:true}
        case ADMIN_COURSEADD_SUCCESS:
                return{loading:false,response:action.payload}
        case ADMIN_COURSEADD_FAIL:
            return {loading:false,error:action.payload}
            default:
                return state
    }
}

export const adminUpdateSubjectReducer=(state ={},action)=>{
    switch(action.type){
      case UPDATE_SUBJECT_REQUEST:
          return {loading:true}
      case UPDATE_SUBJECT_SUCCESS:
          return{loading:false,response:action.payload}
       case UPDATE_SUBJECT_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }
}

// Update Reference book
export const adminUpdateReferenceReducer=(state ={},action)=>{
    switch(action.type){
      case UPDATE_REFERENCE_REQUEST:
          return {loading:true}
      case UPDATE_REFERENCE_SUCCESS:
          return{loading:false,response:action.payload}
       case UPDATE_REFERENCE_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }
}

// Update Tutorials
export const adminUpdateTutorialsReducer=(state ={},action)=>{
    switch(action.type){
      case UPDATE_TUTORIAL_REQUEST:
          return {loading:true}
      case UPDATE_TUTORIAL_SUCCESS:
          return{loading:false,response:action.payload}
       case UPDATE_TUTORIAL_FAIL:
           return {loading:false,error:action.payload} 
           default:
               return state       

    }
}