export default function User({item}){
    return(
        <div>
            {
                item.map(value=><div key={value.id}>{value.id} - {value.name}</div>)
            }
        </div>
    )
 }