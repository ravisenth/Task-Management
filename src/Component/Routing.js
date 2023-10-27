import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Login.js';
import { UseSelector, useSelector } from 'react-redux';
import Form from './Form.js'
import Home from './Home.js';


const Routing=()=>{
    let State=useSelector((data)=>data.data)

    return(
        <BrowserRouter>
        
            {State.login?<Routes><Route path='/' element={<Home/>}></Route>
            <Route path='/Form' element={<Form/>}></Route></Routes>
            :<Routes><Route path='/' element={<Login/>}/></Routes>}
       
        </BrowserRouter>
    )
}
export default Routing;