import './vouchers.css';
import googleImg from './../../img/icons/google-play.png';
import appStoreImg from './../../img/icons/app-store.png';
import vouchersImg from './../../img/images/vouchers-img.png';

function Vouchers() {
    return (
        <section className="vouchers">
            <div className="container">
                <div className="vouchers-content">
                    <div className="vouchers__text">
                        <div className="vouchers__title">DOWNLOAD APP & GET THE VOUCHER!</div>
                        <div className="vouchers__desc">
                            Get 30% off for first transaction using Rondovision mobile app for now.
                        </div>
                        <div className="vouchers__btn-wrapper">
                            <div className="vouchers__btn"><a href="#!"><img src={appStoreImg} /></a></div>
                            <div className="vouchers__btn"><a href="#!"><img src={googleImg} /></a></div>
                        </div>
                    </div>
                    <div className="voushers__img">
                        <img src={vouchersImg} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vouchers;