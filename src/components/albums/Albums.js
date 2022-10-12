import {useEffect, useState} from "react";

import {services} from "../../services";
import {Album} from "../album/Album";

const Albums = () => {
let [albums, setAlbums] = useState([]);
useEffect(() => {
    services.getAlbums().then(value => setAlbums(value.data));
},[])
    return (
        <div>
            {albums.map(album => <Album key={album.id} album={album}/>)}
        </div>
    )
}
export {Albums};