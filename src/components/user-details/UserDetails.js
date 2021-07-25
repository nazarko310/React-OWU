export default function UserDetails({location: {state}}) {
    return (
        <div>
            <h3>User details</h3>
            <div>
                {state.username}
            </div>
            <div>
                {state.email}
            </div>
            <div>
                {state.phone}
            </div>
            <div>
                {state.address.city} - {state.address.suite}
            </div>
        </div>
    )
}