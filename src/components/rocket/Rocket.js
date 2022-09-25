import './rocket.css';
const Rocket = ({rocket}) => {

    return (
        <div>
            <h3>{rocket.flight_number} - {rocket.launch_year}</h3>
            <img src={rocket.links.mission_patch} alt='rocket img'/>
        </div>
    )
}
export {Rocket};