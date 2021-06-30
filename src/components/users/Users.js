import User from "../user/User";

export default function Users({items}) {
    return (
        <div>
            {
                items.map(value => <User item={value} key={value.id} address={value.address} company={value.company}/>)

            }
        </div>
    )
}
