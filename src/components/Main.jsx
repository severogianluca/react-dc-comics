import BgBlue from "./BgBlue"
import Card from "./card.jsx"

import comics from "../data/comics.js"

function Main(){
    return(
        <>
            <div className="bg-jumbo"></div>
            <h2 className="bg-black">
                <Card Comics={comics}/>
                <button className="btn-load-more">LOAD MORE</button>
            </h2>
            <BgBlue/>

        </>

    )
}


export default Main