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

    UPDATE_TUTORIAL_REQUEST,
    UPDATE_TUTORIAL_SUCCESS,
    UPDATE_TUTORIAL_FAIL,
    
    UPDATE_REFERENCE_REQUEST,
    UPDATE_REFERENCE_SUCCESS,
    UPDATE_REFERENCE_FAIL,

    ADMIN_COURSEADD_FAIL,
    ADMIN_COURSEADD_SUCCESS,
    ADMIN_COURSEADD_REQUEST

    

}from '../constatnts/constants'

import axios from 'axios'

export const logout=()=>{
    return(dispatch)=>{
        // sessionStorage.removeItem('token')
        dispatch({type:USER_SIGNOUT})
        document.location.href='/signin'
    }
}

export const addquestion=(quizId,que,option1,option2,option3,option4,correctAns)=>{
    return(dispatch)=>{
        dispatch({
            type:ADD_QUIZ_QUESTION_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }

    const body = {
    quizId,
     que,
      option1,
       option2,
        option3,
         option4,
          correctAns
        
      }

      const url='http://localhost:8080/cdac/admin/add_quiz'
      axios.post(url, body, header)
      .then((response) =>{
          dispatch({
              type:ADD_QUIZ_QUESTION_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: ADD_QUIZ_QUESTION_FAIL,
              payload:error,
          })
      })
    }

}
export const addsubject=(subjectName,courseId)=>{
    return(dispatch)=>{
        dispatch({
            type:ADD_SUBJECT_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }

    const body = {
        subjectName,
        courseId
        
      }

      const url='http://localhost:8080/cdac/admin/subject/add'
      axios.post(url, body, header)
      .then((response) =>{
          dispatch({
              type:ADD_SUBJECT_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: ADD_SUBJECT_FAIL,
              payload:error,
          })
      })
    }
    
}
export const addtutorial=(subjectId,tutorial)=>{
    return(dispatch)=>{
        dispatch({
            type:ADD_TUTORIAL_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }

    const body = {
        subjectId,
        tutorial
      }

      const url='http://localhost:8080/cdac/admin/create_tutotial'
      axios.post(url, body, header)
      .then((response) =>{
          dispatch({
              type:ADD_TUTORIAL_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: ADD_TUTORIAL_FAIL,
              payload:error,
          })
      })
    }
   
}



export const addreference=(subjectId,bookName,auther,bookLink)=>{

    return(dispatch)=>{
        dispatch({
            type:ADD_REFERENCE_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }

    const body = {
        subjectId,
        bookName,
        auther,
        bookLink
      }

      const url='http://localhost:8080/cdac/admin/RefBook/add'
      axios.post(url, body, header)
      .then((response) =>{
          dispatch({
              type:ADD_REFERENCE_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: ADD_REFERENCE_FAIL,
              payload:error,
          })
      })
    }
}
      

export const signin=(email,password)=>{
    return(dispatch)=>{
        dispatch({
            type:USER_SIGNIN_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
            },
        }
    
    const body={
        email,
        password,
    }
    const url = 'http://localhost:8080/cdac/user/login'
    axios
    .post(url,body,header)
    .then((response)=>{
        dispatch({
            type:USER_SIGNIN_SUCCESS,
            payload:response.data,
        })
    })
    .catch((error)=>{
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload:error,
        })

    })
}
}


export const addCourse=(courseName,duration,startDate,endDate)=>{
    return(dispatch)=>{
        dispatch({
            type:ADMIN_COURSEADD_REQUEST,
        })

        const header={
            headers:{
                'Content-Type':'application/json',
                token: sessionStorage['token'],
            },
        }
        const body={
          courseName,
          duration,
          startDate,
          endDate
        }
        const url='http://localhost:8080/admin/course/add'
        axios
        .post(url,body,header)
        .then((response)=>{
            dispatch({
                type:ADMIN_COURSEADD_SUCCESS,
                payload:response.data,
            })
        })
        .catch((error)=>{
            dispatch({
                type:ADMIN_COURSEADD_FAIL,
                payload:error,
            })
        })
    }
}




export const updateSubject=(subjectName)=>{
    return(dispatch)=>{
        dispatch({
            type:UPDATE_SUBJECT_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }

    const body = {
        subjectName,
        
      }

      const url='http://localhost:8080/admin/subject/update'
      axios.put(url, body, header)
      .then((response) =>{
          dispatch({
              type:UPDATE_SUBJECT_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: UPDATE_SUBJECT_FAIL,
              payload:error,
          })
      })
    }
    
}



//update tutuorials

export const updateTutorials=(tutorial)=>{
    return(dispatch)=>{
        dispatch({
            type:UPDATE_TUTORIAL_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }
    const body = {
        tutorial,
        
      }
      const url='http://localhost:8080/admin/update/tutorials'
      axios.put(url, body, header)
      .then((response) =>{
          dispatch({
              type:UPDATE_TUTORIAL_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type: UPDATE_TUTORIAL_FAIL,
              payload:error,
          })
      })
    }
    
}


// update RefBook
export const updateRefbook=(bookName,author,link)=>{
    return(dispatch)=>{
        dispatch({
            type:UPDATE_REFERENCE_REQUEST,
        })

        const header ={
            headers:{
                'Content-Type':'application/json',
            },  
    }
    const body = {
        bookName,
        author,
        link
        
      }
      const url='http://localhost:8080/admin/RefBook/update'
      axios.put(url, body, header)
      .then((response) =>{
          dispatch({
              type:UPDATE_REFERENCE_SUCCESS,
              payload: response.data,
          })
      }).catch((error) =>{
          dispatch({
              type:UPDATE_REFERENCE_FAIL,
              payload:error,
          })
      })
    }
    
}