export default function User({item: {name, username, email, phone, website}, address: {street, city, suite}, company:{named, catchPhrase, bs}}) {
    return (
        <div>
            <h2>{name} - {username}</h2>
            <p>E-mail: {email}</p>
            <div>
                <p>Адрес:</p>
                <p>Місто: {city}</p>
                <p>Вулиця: {street}</p>
                <p>Будинок: {suite}</p>
            </div>
            <div>
                <p>Контактні дані</p>
                <p>Телефон: {phone}</p>
                <p>Сайт: {website}</p>
            </div>
            <div>
                <p>Місце роботи</p>
                <p>Компанія: {named}</p>
                <p>{catchPhrase}</p>
                <p>{bs}</p>
            </div>
        </div>
    )
}