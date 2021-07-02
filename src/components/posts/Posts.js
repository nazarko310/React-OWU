import Post from "../post/Post";

export default function Posts({items, selectPost}) {
    return (
        <div>
            {
                items.map(value => <Post item={value} key={value.id} selectPost={selectPost}/>)
            }
        </div>
    )
}