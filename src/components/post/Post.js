export default function Post({item}) {
    return (
        <div>
            {
                item.map(value => <div key={value.id}>{value.id} - {value.body}</div>)
            }
        </div>
    )
}