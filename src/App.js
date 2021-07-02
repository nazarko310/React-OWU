import {useEffect, useState} from "react";
import { getPostsFromUser, getUser, getUsers } from "./services/Api";
import Users from "./components/users/Users";
import UserDetails from "./components/user-details/UserDetails";
import { Posts } from "./components/posts/Posts";

function App() {
   let [usersList, setUsersList] = useState([]);
   let [posts, setPosts] = useState([]);
   // let [userDetails, setUserDetails] = useState(null);

   useEffect(() => {
      getUsers().then(response => setUsersList(response.data));
   }, [])

   // function selectUser(id) {
   //    getUser(id).then(({data}) => {
   //       setUserDetails(data)
   //    })
   // }
   function selectUser(id) {
      getPostsFromUser(id).then(({data}) => setPosts(data))
   }

   return (
       <div>
          <Users items={usersList} selectUser={selectUser}/>
          {
             posts && <Posts posts={posts}/>
          }
       </div>

   )

}


export default App;

