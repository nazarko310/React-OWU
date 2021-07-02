import User from "../user/User";

export default function Users({items, selectUser}) {
    return (
        <div>
            {
                items.map(value => <User item={value} key={value.id} selectUser={selectUser}/>)
            }
        </div>
    )
}