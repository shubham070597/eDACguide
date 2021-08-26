import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../components/header'
import axios from 'axios'

const QuizScreen=(props)=>{
 const [quiz,setQuiz]=useState([])
 const [option,setoption]=useState('')
 const [ans,setans]=useState('')


  useEffect(()=>{
    
    const url='http://localhost:8080/cdac/student/getQuiz/1'

      axios.get(url)
      .then((response) =>{
          setQuiz(response.data)
        
          
          }).catch((error) =>{
          console.log(error)
      })
},[])

useEffect(()=>{
quiz.map((e)=>{

})
  
},[])

const onCheck=()=>{
    console.log(option+" select ans")
    
        console.log(ans+" ans is")

}
    return(
      
        <div>
             
             {quiz.map((no) => {
              return (
                <div>
                  {/* <label className="options">{q.option4}<input type="radio" name="radio"/> <span className="checkmark"></span> </label> 
     */}

                  <div className="container mt-5">
    <div className="d-flex justify-content-center row">
        <div className="col-md-10 col-lg-10">
            <div className="border">
                <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row justify-content-between align-items-center mcq">
                        
                    </div>
                </div>
                <div className="question bg-white p-3 border-bottom">
                    <div className="d-flex flex-row align-items-center question-title">
                        <h3 className="text-danger">Q.</h3>
                        <h5 className="mt-1 ml-2">{no.que}</h5>
                    </div>
                    <div className="ans ml-2">
                        <label className="radio"> <input type="radio" onClick={(e)=>{setoption(e.target.value)}}  name={no.que} id="op1"value={no.option1}/> <span>{no.option1}</span>
                        </label>
                    </div>
                    <div className="ans ml-2">
                        <label className="radio"> <input type="radio" onChange={(e)=>{setoption(e.target.value)}}  name={no.que} id="op2"value={no.option2}/> <span>{no.option1}</span>
                        </label>
                    </div>
                    <div className="ans ml-2">
                        <label className="radio"> <input type="radio" onChange={(e)=>{setoption(e.target.value)}}   name={no.que} id="op3" value={no.option3}/> <span>{no.option3}</span>
                        </label>
                    </div>
                    <div className="ans ml-2">
                        <label className="radio"> <input type="radio" onChange={(e)=>{setoption(e.target.value)}}    name={no.que} id="op4" value={no.option4}/> <span>{no.option4}</span>
                        </label>
                    </div>
                    <div hidden className="ans ml-2">
                        <label className="radio"> <input type="hidden" onLoadStart={(e)=>{setans(e.target.value)}} id="ans"   name={no.que}  value={no.correctAns}/> <span>{no.option4}</span>
                        </label>
                    </div>
                </div>
                <div  className="d-flex flex-row justify-content-between align-items-center p-3 bg-white"><button onClick={onCheck} className="btn btn-primary border-success align-items-center btn-success" type="button"><i class="fa fa-angle-left mt-1 mr-1"></i>&nbsp;Submit</button></div>
            </div>
        </div>
    </div>
</div>
            </div>
              )
             }
             )}
                    </div>
              )

}

export default QuizScreen