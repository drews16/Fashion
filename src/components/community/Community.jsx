import './community.css';

function Community() {
    return (
        <section className="community">
            <div className="container">
                 <div className="community-content">
                    <div className="community__text">
                        <div className="community__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</div>
                        <div className="community__desc">Type your email down below and be young wild generation</div>
                    </div>
                    <div className="community__input-wrapper">
                        <input className="community__input" type="text" placeholder="Add your email here" />
                        <div className="community__input-btn"><a href="#!">SEND</a></div>
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default Community;