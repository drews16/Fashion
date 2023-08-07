import './banner.css';
import bannerImg from "./../../img/images/promo-img.jpg";

function Banner() {
    return (
        <section className="banner">
            <div className="container">
                <div className="banner-content">
                    <div className="banner__img"><img src={bannerImg} /></div>
                    <div className="banner__text">
                        <div className="banner__title">
                            <span className="highlight">PAYDAY</span><br />SALE NOW
                        </div>
                        <div className="banner__desc">
                            Spend minimal $100 get 30% off voucher code for your next purchase
                        </div>
                        <div className="banner__date">
                            <span>1 June - 10 June 2021</span><br/>
                            *Terms & Conditions apply
                        </div>
                        <div className="banner__btn-wrapper">
                            <a href="#!" className="banner__btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;