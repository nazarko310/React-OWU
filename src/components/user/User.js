export default function User({item: {name, email}}) {
    return (
        <div>
            <p>{name} - {email}</p>
        </div>
    )
}