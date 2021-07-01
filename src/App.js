import {useEffect, useState} from "react";
import {getUsers} from "./services/Api";
import Users from "./components/users/Users";

function App() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response.data)
        })
    }, [])

    return (
        <div>{
            <Users items={users}/>
        }</div>
    )
}

export default App;

