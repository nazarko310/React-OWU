export default function UserDetails({address: {city, suite, street}}) {
    return (
        <div>
            <div>
                <p>{city}</p>
                <p>{street} - {suite}</p>
            </div>
        </div>
    )
}