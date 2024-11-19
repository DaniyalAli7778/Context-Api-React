import Login from "./Components/Login";
import Profile from "./Components/Profile";
import  UserContextProvider  from "./Context/UserContextProvider";

 
 
 
export default function App() {
   return(
    < UserContextProvider>
      <h1>Chai or Context Api  and Share is important </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}
