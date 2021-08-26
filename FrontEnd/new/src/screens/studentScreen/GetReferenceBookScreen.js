import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getReferenceBook } from '../../actions/studnetAction'
import Header from '../../components/header'
import axios from 'axios'

const ReferenceBookScreen=(props)=>{

  const [data,setData]=useState([])
 
    
    useEffect(()=>{
        const url='http://localhost:8080/cdac/student/refance_book/1'
        axios.get(url)
        .then((response) =>{
            setData(response.data)
        }).catch((error) =>{
            console.log('err')
        })
      
        
    }, [data])
  const OnAddBook =()=>{
    props.history.push('/addreference')
  }

   
    return(
     
<div className="mt-6 container">
    {/* <header title="Refernce-Book"/> */}
        
           <table className="table table-striped">
             <thead>
               <tr>
                 
                 <th>BookName</th>
                 <th>Author</th>
                 <th>Link</th>
                 <th>SubjectId</th>
             
               </tr>
             </thead>
             <tbody>
         
               
                   { 
                   data.map((c) => {
                       return (
                         <tr>
                           {/* <td>{c.id}</td> */}
                           <td>{c.bookName}</td>
                           <td>{c.author}</td>
                           <td>{c.bookLink}</td>
                           <td>{c.subjectId}</td>
                         </tr>
                       ) 
                     })  
                     }
               
             </tbody>
           </table>  
     
      </div>

    )

}


export default ReferenceBookScreen