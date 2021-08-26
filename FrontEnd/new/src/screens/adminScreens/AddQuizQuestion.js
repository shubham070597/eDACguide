import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Header from '../../components/header'
import { addquestion } from '../../actions/adminActions'


const AddQuizQueScreen =(props)=>{
    
    const[quizId,setQuizId]=useState('')
    const[que,setQue]=useState('')
    const[option1,setOption1]=useState('')
    const[option2,setOption2]=useState('')
    const[option3,setOption3]=useState('')
    const[option4,setOption4]=useState('')
    const[correctAns,setCorrectAns]=useState('')

    const addQuizQue =useSelector((store)=>store.addQuizQue)
    const{loading,error,response}=addQuizQue
    

    const dispatch=useDispatch()

    const addQuestion = ()=>{
        dispatch( addquestion(quizId,que,option1,option2,option3,option4,correctAns))
    }

    useEffect(()=>{
        if(response && response.status === 'success'){
            alert("login success")
            
             this.props.history.push("/home")
        }else if (response && response.status === 'error'){
            alert(response.error)
        }else if(error){
            alert(error)
        }
    },[loading,error,response])

    return(
        <div>
            <Header title="Add Suject" />
           
    
    <div className="form-group">
      <label for="quizId">QuizId:</label>
      <input onChange={(e) =>{setQuizId(e.target.value)}} type="number" class="form-control" placeholder="Enter quizId" />
    </div>
    
     <div className="form-group">
      <label for="opt1">Question:</label>
      <input onChange={(e)=>{setQue(e.target.value)}} type="textarea" className="form-control"  placeholder="Enter Question" />
    </div>
    <div className="form-group">
      <label for="opt1">Qption 1:</label>
      <input onChange={(e)=>{setOption1(e.target.value)}} type="text" className="form-control"  placeholder="Enter Option 1" />
    </div>
    <div className="form-group">
      <label for="opt2">Qption 2:</label>
      <input onChange={(e)=>{setOption2(e.target.value)}} type="text" className="form-control"  placeholder="Enter Option 2" />
    </div>
    
    <div className="form-group">
      <label for="opt3">Qption 3:</label>
      <input onChange={(e)=>{setOption3(e.target.value)}} type="text" className="form-control"  placeholder="Enter Option 3" />
    </div>
    <div className="form-group">
      <label for="opt">Qption 4:</label>
      <input onChange={(e)=>{setOption4(e.target.value)}} type="text" className="form-control"  placeholder="Enter Option 4" />
    </div>
    
    <div className="form-group">
      <label for="CorrectAns">Correct Ans :</label>
      <input onChange={(e)=>{setCorrectAns(e.target.value)}} type="text" className="form-control"  placeholder="Enter Ans" />
    </div>
    
    
     
    <button onClick={addQuestion} className="btn btn-success">ADD</button>
    
       
        {loading && <div>Waiting for response</div>}
        </div>
    )
}

export default AddQuizQueScreen 