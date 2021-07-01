export default function User({item: {name, email}}) {
    return (
        <div>
            <h2>{name}-{email}</h2>
        </div>
    )
}