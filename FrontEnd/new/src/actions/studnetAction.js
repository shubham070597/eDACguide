
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
import axios from 'axios'


export const gettutorial=()=>{
    return(dispatch)=>{
        dispatch({
            type:FETCH_TUTORIAL_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }

      const url='http://localhost:8080/cdac/student/getTutorial/1'
      axios.get(url, header)
      .then((response) =>{
          dispatch({
              type:FETCH_TUTORIAL_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: FETCH_TUTORIAL_FAIL,
              payload:error,
          })
      })
    }
   
}


export const getSubject=()=>{
    return(dispatch)=>{
        dispatch({
            type:FETCH_SUBJECT_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }

      const url='http://localhost:8080/cdac/student/subject/1'
      axios.get(url, header)
      .then((response) =>{
          dispatch({
              type:FETCH_SUBJECT_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: FETCH_SUBJECT_FAIL,
              payload:error,
          })
      })
    }
   
}


export const getReferenceBook=()=>{
    return(dispatch)=>{
        dispatch({
            type:FETCH_REFERENCE_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }

      const url='http://localhost:8080/cdac/student/refance_book/1'
      axios.get(url, header)
      .then((response) =>{
          sessionStorage.setItem("data",response.data)
          dispatch({
              type:FETCH_REFERENCE_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: FETCH_REFERENCE_FAIL,
              payload:error,
          })
      })
    }
   
}


export const getQuiz=()=>{
    return(dispatch)=>{
        dispatch({
            type:FETCH_QUIZ_QUESTION_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }

      const url='http://localhost:8080/cdac/student/getQuiz/1'

      axios.get(url, header)
      .then((response) =>{
          dispatch({
              type:FETCH_QUIZ_QUESTION_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: FETCH_QUIZ_QUESTION_FAIL,
              payload:error,
          })
      })
    }
   
}
