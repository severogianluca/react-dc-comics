import BgBlue from "./BgBlue"
import Card from "./card.jsx"

import comics from "../data/comics.js"

function Main(){
    return(
        <>
            <div className="bg-jumbo"></div>
            <div className="bg-black">
            <span class="current-series">Current Series</span>
                <Card Comics={comics}/>
                <button className="btn-load-more">LOAD MORE</button>
            </div>
            <BgBlue/>

        </>

    )
}


export default Main