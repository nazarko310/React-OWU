export default function PostDetails({post, showComments}) {
    return (
        <div>
            {
                post.map(value =>
                    <div key={value.id}>
                        {value.title}---{value.body}
                        <br/>
                        <br/>
                        <button onClick={() => {
                            showComments(value.id)
                        }
                        }>Коменти
                        </button>
                    </div>)
            }

        </div>
    )
}