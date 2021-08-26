import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../actions/userActions"
import Header from "../components/header"

const Logout=(props)=>{
    
    const dispatch=useDispatch()

    const onlogout=()=>{
        dispatch(
            logout()
        )

    }
    useEffect(()=>{

    },[])

    
    return(

        <div>
            <Header title="Logout"></Header>

            <button onClick={onlogout} className="btn btn-success"></button>

        </div>
    )
}
export default Logout