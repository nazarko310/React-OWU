export default function Comment({item}) {
    return (
        <div>
            {
                item.map(value => <div key={value.id}>{value.id} - {value.body}</div>)
            }
        </div>
    )
}