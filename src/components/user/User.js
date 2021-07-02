export default function User({item: {name, email, id}, selectUser}) {
    return (
        <div>
            <h2>{name} - {email}</h2>
            <button onClick={() => selectUser(id)}>Детальніше</button>
        </div>
    )
}

