export default function Post({item: {title, id}, selectPost}) {
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={() => {
                selectPost(id)
            }
            }>Детальніше
            </button>
        </div>
    )
}