import './promo.css';
import promoImg from '../../img/images/header-img.jpg';


function Promo() {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo-content">
                    <div className="promo__text">
                        <div className="promo__title">
                            <span className="highlight">LET’S</span><br /> 
                            EXPLORE <br/>
                            <span className="highlight highlight-gold">UNIQUE</span><br />
                            CLOTHES.
                        </div>
                        <div className="promo__desc">Live for Influential and Innovative fashion!</div>
                        <div className="promo__btn-wrapper">
                            <a href="#!" className="promo__btn">Shop Now</a>
                        </div>
                    </div>
                    <div className="promo__img">
                        <img src={promoImg} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promo;