import {useSelector,useDispatch} from 'react-redux';
import {useNavigate,useSearchParams} from 'react-router-dom'
import {update,update1} from './Slice.js'
import './Form.scss';
import { useEffect, useState } from 'react';

const Form=()=>{
 
    let[name,setname]=useState("");
    let[des,setdes]=useState("");
    let[status,setstatus]=useState("");
    let[check,setcheck]=useState(false);
    let [hour,sethour]=useState("");
    let [min,setmin]=useState("");

    let State=useSelector((data)=>data.data)
    let dispatch=useDispatch();
    let nav=useNavigate();
    let [m]=useSearchParams();
    
    let z=(m.get('id'));
    console.log(z);
    

    const handle=(e)=>{
        if(e.target.name==="tname"){
            console.log(e.target.value)
            setname(e.target.value)
        }else if(e.target.name==="tdes"){
            console.log(e.target.value)
            setdes(e.target.value)

        }else if(e.target.name==="tstatus"){
            console.log(e.target.value)
            setstatus(e.target.value)
        }
        let d=new Date();
    let hours=d.getHours();
    sethour(hours);

    let mins=d.getMinutes();
    setmin(mins);
    }
    useEffect(()=>{
        if(z!=null){
            let f=State.arr.find((v,i)=>{
                return parseInt(z)==i?v:""
            })
            console.log(f);
            setname(f.sname);
            setdes(f.sdes);
            setstatus(f.sstatus);
        }
    },[])

    const submit=(e)=>{
        e.preventDefault();
        if(name===""||des===""||status===""){
            setcheck(true)
        }
        else if(z!=null){

            let obj1={
                sname:name,
                sdes:des,
                sstatus:status,
                shour:hour,
                smin:min
                }


            let y=State.arr.map((v,i)=>{
                return i==parseInt(z)?obj1:v
            })
            dispatch(update1(y))
        }
        else{
        let obj={
            sname:name,
            sdes:des,
            sstatus:status,
            shour:hour,
            smin:min

        }
        dispatch(update1([...State.arr,obj]))
    }

        setname("")
        setdes("")
        setstatus("")

    }
    console.log(State.arr)
    const gotohome=()=>{
        nav('/')
    }
    return(
        <div>
            <div className="navbar">
            <button onClick={gotohome}>View Tasks</button>
            </div>
            <div className='form'>
            
            <label>Task Name</label>
            <input type='text' name="tname" value={name} onChange={handle}/><br/><br/>
            <label>Task Details</label>
            <input type='text' name="tdes" value={des} onChange={handle}/><br/><br/>
            
            <label>Completed</label><input type='radio' value="Completed" checked={status} name="tstatus" onChange={handle}/><br/>
            <label>Incomplete</label><input type='radio' value="Incomplete" checked={status} name="tstatus" onChange={handle}/><br/><br/>
            <button onClick={submit}>Submit</button>
            </div>
            
        </div>
    )
}
export default Form;