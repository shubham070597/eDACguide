import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { checkPaymet } from "../../actions/userActions"
import QuizApp from "./quiz/QuizApp"

const QuizPage=(props)=>{
    
    // const checkPay=useSelector((store)=>store.checkPay)
    // const [response,loading,error]=checkPay

    const dispatch=useDispatch()
    const user=sessionStorage.getItem("userId")
    const [data,setData]=useState('')
    
const onCheck=()=>{
    const url='http://localhost:8080/cdac/user/checkPay/'+user
     axios
     .get(url)
     .then((res) => {
      setData(res.data)
     })
     .catch((err) => {
         console.log('err')
     })

   
}

    useEffect(()=>{
        console.log(user)
    },[])

    return(
        <div>
            <button  className="btn btn-primary is-medium is-fullwidth mt-4" type="submit" onClick={onCheck}> GetQuiz</button>
       { data=="PAID" && <QuizApp/>}

       {data=='faild' && <div className="text-danger">u r not paid pay fees 1St</div>}

        </div>
    )
}
export default QuizPage