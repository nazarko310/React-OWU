import {useEffect, useState} from "react";

export default function UserDetails({location: {state}}) {
    // console.log(state)
    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {
        setUserDetails({...state})
    }, [state])

    return (
        <div>
            {
                userDetails.email
            }
        </div>
    )
}