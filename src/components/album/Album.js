import './Album.css'

const Album = ({album}) => {

    return (
        <div className={'album'}>
            <div>id: {album.id}</div>
            <div>title: {album.title}</div>
        </div>
    )
}
export {Album};