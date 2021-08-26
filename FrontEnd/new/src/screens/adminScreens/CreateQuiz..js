import axios from "axios"
import { useEffect, useState } from "react"

const CreateQuiz = (props) => {


    const [data ,setData]=useState([])
   
   
       useEffect(()=>{
           const url='http://localhost:8080/cdac/admin/subject'
           axios
           .get(url)
           .then((res) => {
               console.log(res.data) 
            setData(res.data)
           })
           .catch((err) => {
               console.log('err')
           })
       },[data])



       const [quiztime ,serQuiztime]=useState('')
       const [subId ,setSubId]=useState('')
    const body={
        "subjectId":subId,
        "quizTime":quiztime
    }


    const url=""
    const onCreate=()=>{
      axios.post(url,body)
    }

   
      
       return(
           <div>
        
         
         <table className="table table-striped ">
           <thead className="text-success">
             <tr>
               <th>Id</th>
               <th>SubjectName</th>
               <th>courseId</th>
           </tr>
           </thead>
           <tbody>
       
             
                 {
                  data.map((c) => {
                     return (
                       <tr>
                         <td className="text-success">{c.id}</td>
                         <td className="text-success">{c.subjectName}</td>
                         <td className="text-success"> {c.courseId}</td>
                         
                          </tr>
                     ) 
                   })  
                   }
             
           </tbody>
         </table>  
         <div>
              <div >
                     <h3>Create Quiz </h3>
         <div className="form-group">
      <label for="subjectId">subjectId</label>
           <input type="number"  className="form-control" onChange={(e) =>{setSubId(e.target.value)}}/>
           </div>
           <div className="form-group">
      <label for="subjectId">Time in minutes</label>
            <input type="nummber" className="form-control" onChange={(e) =>{serQuiztime(e.target.value)}}/>
            </div>
            <button type="submit"  onClick={onCreate} className="btn btn-success"> CreateQuiz
        
          </button>
          </div>


        </div>

    </div>
       )
   
   }
   export default CreateQuiz