import { useState,useEffect} from 'react'
import Header from '../../components/header'
import axios from 'axios'

const SubjectScreen=(props)=>{

const [data,setData]=useState([])
const [st,setst]=useState('')
const userD=sessionStorage.getItem('user')

    useEffect(()=>{
        var url='http://localhost:8080/cdac/student/subject/1'
        axios.get(url)
        .then(res =>{
            console.log(res)
            setData(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[st])
   
    return(

        <div>    
            <p>{userD}</p>   
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
      </div>
  
    )

}

export default SubjectScreen