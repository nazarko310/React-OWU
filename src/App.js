import {useEffect, useState} from "react";
import {getUsers} from "./services/Api";
import Users from "./components/users/Users";

function App() {
    let [user, setUser] = useState([]);
    useEffect(() => {
        getUsers().then(({data}) => {
            setUser(data)
        })
    }, [])

    return (
        <div>
            {
                <Users items={user}/>
            }
        </div>
    )
}

export default App;

