import digitalComics from '../assets/img/buy-comics-digital-comics.png';
import dcMerchendise from '../assets/img/buy-comics-merchandise.png';
import subscription from '../assets/img/buy-comics-subscriptions.png';
import comicShopLocator from '../assets/img/buy-comics-shop-locator.png';
import DcPowerVis from '../assets/img/buy-dc-power-visa.svg';

function BgBlue(){
    return(
        <div className= "bg-blue">
        <ul className= "flex-menu">
            <li>
                <img src= {digitalComics} alt="digital comics" />
                <p>DIGITAL COMICS</p>
            </li>
            <li>
                <img src= {dcMerchendise} alt=" merchendise" />
                <p>DC MERCHENDISE</p>
            </li>
            <li>
                <img src= {subscription} alt="subscription" />
                <p>SUBSCRIPTION</p>
            </li>
            <li>
                <img src={comicShopLocator} alt="shop locator" />
                <p>COMIC SHOP LOCATOR</p>
            </li>
            <li>
                <img src={DcPowerVis} alt="visa" />
                <p>DC POWER VISA</p>
            </li>
        </ul>
        </div>
    )
}

export default BgBlue