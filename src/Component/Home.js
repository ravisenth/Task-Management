import {useSelector,useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {update,update1,update2} from './Slice.js';
import './Form.scss';

const Home=()=>{

    let State=useSelector((data)=>data.data)
    let dispatch=useDispatch();
    let nav=useNavigate();

    const logout=()=>{
        dispatch(update(false))
    }
    const gotoform=()=>{
        nav('/Form')
    }
    const modify=(i)=>{
        nav(`/Form?id=${i}`)
    }
    const dele=(i)=>{
       let x=State.arr.filter((val,index)=>{
            return i==index?"":val
        })
        dispatch(update1(x))
    }
    const all=()=>{
        let q=State.arr.filter((v,i)=>{
            return v
        })
        dispatch(update2(q))
       
    }

    const completed=()=>{
        let r=State.arr.filter((v,i)=>{
            return v.sstatus=="Completed"
        })
        dispatch(update2(r))
    }

    const incompleted=()=>{
        let s=State.arr.filter((v,i)=>{
            return v.sstatus=="Incomplete"
        })
        dispatch(update2(s))
    }


    return(<div>
<div className="navbar">
<button className='butt1' onClick={all}>All</button>
<button className='butt1' onClick={completed}>Completed</button>
<button className='butt1' onClick={incompleted}>Incompleted</button>
<button className='butt1' onClick={gotoform}>Add Tasks</button>
<button className='butt2' onClick={logout}>Logout</button>
</div>

<div>
    <div className="formdisplay">
    <table border="1">
        <tr><th>Task Name</th><th>Task Description</th><th>Task Status</th><th>Time</th><th>Actions</th></tr>
{State.arr1.map((val,index)=>{
    return <> 
        <tr><td>{val.sname}</td>
        <td>{val.sdes}</td>
        <td>{val.sstatus}</td>
        <td>{val.shour}:{val.smin}</td>
        <td><button className='butt1' onClick={()=>modify(index)}>Edit</button><button className='butt2' onClick={()=>dele(index)}>Delete</button></td>
        </tr>
        
        </>
})}
</table>
</div>

</div>
    </div>)
}
export default Home;