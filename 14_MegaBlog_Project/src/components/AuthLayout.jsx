import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Protected = ({children, authentication = true }) => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(()=>{

        //Instead code
        // if (authStatus === true){
        //     navigate("/")
        // }
        // else if(authStatus === false){
        //     navigate("/login")
        // }



        /*authentication = true authstatus = false => true &&  false != true => true && true */
        //So you are not authenticate then this will run and you will go to login.
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }

        /*authentication = true authstatus = false => false &&  false != false => false && false */
        //So you are authenticate then this will run and you will stay on home.
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])

    return loader? <h2>Loading...</h2>: <>{children}</>
}


export default Protected;