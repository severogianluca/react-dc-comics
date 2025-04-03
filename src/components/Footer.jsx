import bgLogo from "../assets/img/dc-logo-bg.png"
import Facebook from "../assets/img/footer-facebook.png"
import Twitter from "../assets/img/footer-twitter.png"
import Youtube from "../assets/img/footer-youtube.png"
import Pinterest from "../assets/img/footer-pinterest.png"
import Periscope from "../assets/img/footer-pinterest.png"

function Footer() {
    return (
        <>
            <div className="bg-img">
                <div className="container-flex">
                    <div>
                        <ul>
                            <h3>DC COMICS</h3>

                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Videos</a></li>
                            <li><a href="#">Newa</a></li>

                            <h3>SHOP</h3>
                            <li><a href="#">Shop DC</a></li>
                            <li><a href="#">Shop DC Collectibles</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <h3>DC</h3>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy policy (New)</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscriptions</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">CPSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <ul>
                            <h3>SITES</h3>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>

                </div>
                
                <img src={bgLogo} alt="bg-logo" className="bg-logo" />
            </div>

            <div className="footer-bottom">
                <div>
                    <button className="btn">SIGN-UP NOW!</button>
                </div>

                <div className="flex-icon">
                    <h3 className="footer-h3">FOLLOW US</h3>
                    <img src={Facebook} alt="facebook" />
                    <img src={Twitter} alt="twitter" />
                    <img src={Youtube} alt="youtube" />
                    <img src={Pinterest} alt="pinterest" />
                    <img src={Periscope} alt="periscope" />
                </div>
            </div>
        </>




    )
}

export default Footer