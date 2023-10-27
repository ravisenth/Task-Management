import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom'
import {update} from './Slice.js'
const Login=()=>{
    let[name,setname]=useState("");
    let[pass,setpass]=useState(0);

    // const cred=[{username:"Ravi",password:1234},{username:"Ravis",password:4321}]

    let State=useSelector((data)=>data.data)
    let dispatch=useDispatch();
    let nav=useNavigate();
    console.log(State)

    const handle=(e)=>{
        if(e.target.name==="uname"){
            setname(e.target.value)
        }else{
            setpass(e.target.value)
        }
    }

    const submit=(e)=>{
        e.preventDefault();

        const check=State.cred.find(v=>{
            return v.username==name && v.password==pass
        })
        if(check){
            dispatch(update(true))
        }else{
            alert("Wrong Credentials")
        }
    }
    


    return(
        <div>
            <div className="loginbg">
            <div className="login">
                <label>Username</label>
            <input type='text' name="uname" onChange={handle}/><br/><br/>
            <label>Password</label>
            <input type='password' name="upass" onChange={handle}/><br/><br/>
            <button onClick={submit}>Submit</button>
            </div>
            </div>

        </div>
    )
}
export default Login;