import './PhotoDetails.css'

export default function PhotoDetails({photo}) {
    return (
        <div className='photo__inner'>
            {
                photo.map(value =>
                    <div key={value.id}>
                        <h3 className='photo__title'>{value.title}</h3>
                        <img src={value.url} alt={value.title}/>
                    </div>)
            }
        </div>
    )
}