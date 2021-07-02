export default function CommentsDetails({comments}) {
    return (
        <div>
            {
                comments.map(value=><div key={value.id}>Комент: {value.body}</div>)
            }
        </div>
    )
}