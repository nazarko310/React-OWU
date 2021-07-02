import './App.css'
import {useEffect, useState} from "react";
import {getAlbumsFromUsers, getPhotosFromAlbums, getUsers} from "./services/Api";
import Users from "./components/users/Users";
import AlbumsDetails from "./components/albums/AlbumsDetails";
import PhotoDetails from "./components/photo/PhotoDetails";

function App() {
    let [usersList, setUsersList] = useState([]);
    let [albumsList, setAlbumsList] = useState([]);
    let [photosList, setPhotosList] = useState([]);
    useEffect(() => {
        getUsers().then(response => {
            setUsersList(response.data)
        })
    }, [])

    function getAlbums(id) {
        getAlbumsFromUsers(id).then(({data}) => {
            setAlbumsList(data)
        })
    }

    function getPhoto(id) {
        getPhotosFromAlbums(id).then(({data}) => {
            setPhotosList(data)
            console.log(data);
        })
    }

    return (
        <div>
            <div className="container">
                <Users items={usersList} getAlbums={getAlbums}/>
                <div>
                    {
                        albumsList && <AlbumsDetails albums={albumsList} getPhoto={getPhoto}/>
                    }
                </div>
                <div>
                    {
                        photosList && <PhotoDetails photo={photosList}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default App;

