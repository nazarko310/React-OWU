export default function User({item: {name, email, id}, showPosts}) {
    return (
        <div>
            <h2>{name}, {email}</h2>
            <button onClick={() => {
                showPosts(id)
            }
            }>Пости
            </button>
        </div>
    )
}