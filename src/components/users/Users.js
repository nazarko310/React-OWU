import User from "../user/User";

export default function Users({items, showPosts}) {
    return (
        <div>
            {
                items.map(value => <User item={value} key={value.id} showPosts={showPosts}/>)
            }
        </div>
    )
}