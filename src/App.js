import {useEffect, useState} from "react";
import Users from "./components/users/Users";

function App() {
    let [postsList, setPostsList] = useState([]);
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                setPostsList(response)
            });
    }, [])
    return (
        <div>
            {
                <Users items={postsList}/>

            }
        </div>
    )
}

export default App;

