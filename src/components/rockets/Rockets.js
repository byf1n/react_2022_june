import {useEffect, useState} from "react";
import {rocketsService} from "../../services";
import {Rocket} from "../rocket/Rocket";

const Rockets = () => {

    let [rockets, setRockets] = useState([]);

    useEffect(() => {
        rocketsService.getAll().then(value => setRockets(value.data))
    },[]);

    return (
        <div>
            {
                rockets.map(rocket => <Rocket key={rocket.flight_number} rocket={rocket}/>)
            }
        </div>
    )
}
export {Rockets};