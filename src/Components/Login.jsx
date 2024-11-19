 import { useContext,useState } from "react";
 import UserContext from "../Context/UserContext";
 

const Login = () => {
  let handleonclick =(e)=>{
 e.preventDefault();
 setUser({username,password})
  }
  const {setUser} = useContext(UserContext);
const [username , setUserName] =useState('');
const [password, setPassword] = useState( '');
  return (
    <div  >
   <input type="text" value={username} onChange={(e)=> setUserName(e.target.value)} placeholder="Username"  className="text-white bg-black" />
   <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder="password"   className="text-white bg-black" />
 <input type="submit" onClick={handleonclick} />
    </div>
  )
}

export default Login;