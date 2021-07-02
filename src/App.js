import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/Api";
import Users from "./components/users/Users";
import UserDetails from "./components/user-details/UserDetails";

function App() {
   let [usersList, setUsersList] = useState([]);
   let [userDetails, setUserDetails] = useState(null);
   useEffect(() => {
      getUsers().then(response => setUsersList(response.data));
   }, [])

   function selectUser(id) {
      getUser(id).then(({data}) => {
         setUserDetails(data)
      })
   }

   return (
       <div>
          <Users items={usersList} selectUser={selectUser}/>
          {
             userDetails && <UserDetails address={userDetails.address}/>
          }
       </div>

   )

}


export default App;

