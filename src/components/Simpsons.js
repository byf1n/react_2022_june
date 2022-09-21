import {simpsons} from "./data";
import Simpson from "./Simpson";

function Simpsons(props){
    return(
        <div>
            {
                simpsons.map((simpson,index) => <Simpson simpson={simpson} key={index}/>)
            }
        </div>
    )
}
export default Simpsons;