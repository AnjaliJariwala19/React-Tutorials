import React,{useState,useContext} from 'react';
import UserContext from '../Context/UserContext';

const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <>
        <div >
            <h2>Login</h2>
            <label>Username : </label>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} type='text' placeholder='Username'/><br/><br/>
            <label>Password : </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)}  type='password' placeholder='Password'/><br/><br/>
            <button onClick={handleSubmit}>Submit</button><br/><br/>
        </div>
        </>
    );
}

export default Login;