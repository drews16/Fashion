import './footer.css';
import fbIcon from './../../img/socials/fb.svg';
import inIcon from './../../img/socials/in.svg';
import instIcon from './../../img/socials/inst.svg';    
import twIcon from './../../img/socials/tw.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-col">
                        <div className="footer__logo">FASHION</div>
                        <ul className="footer__list">
                            <li className="footer__list-item">Complete your style with awesome clothes from us.</li>
                            <ul className="footer__list-links">
                                <li><a href="#!"><img src={fbIcon} /></a></li>
                                <li><a href="#!"><img src={instIcon} /></a></li>
                                <li><a href="#!"><img src={twIcon} /></a></li>
                                <li><a href="#!"><img src={inIcon} /></a></li>
                            </ul>
                        </ul>
                    </div>
                    <div className="footer__spoiler">
                        <div className="footer-col">
                            <div className="footer__header">Company</div>
                            <ul className="footer__list">
                                <li className="footer__list-item"><a href="#!">About</a></li>
                                <li className="footer__list-item"><a href="#!">Contact us</a></li>
                                <li className="footer__list-item"><a href="#!">Support</a></li>
                                <li className="footer__list-item"><a href="#!">Careers</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <div className="footer__header">Quick Link</div>
                            <ul className="footer__list"> 
                                <li className="footer__list-item"><a href="#!">Share Location</a></li>
                                <li className="footer__list-item"><a href="#!">Orders Tracking</a></li>
                                <li className="footer__list-item"><a href="#!">Size Guide</a></li>
                                <li className="footer__list-item"><a href="#!">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <div className="footer__header">Legal</div>
                            <ul className="footer__list">
                                <li className="footer__list-item"><a href="#!">Terms & conditions</a></li>
                                <li className="footer__list-item"><a href="#!">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;