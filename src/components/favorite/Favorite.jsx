import './favorite.css';
import promo1 from './../../img/images/promo-01.jpg';
import promo2 from './../../img/images/promo-02.jpg';
import Card from './../../components/card/Card.jsx';

function Favorite() {
    return (
        <section className="favorite">
            <div className="container">
                <div className="favorite-content">
                    <div className="favorite__header">Young’s Favourite</div>
                    <div className="favorite__cards">
                        <Card title="Trending on instagram" mainImg={promo1} />
                        <Card title="All Under $40" mainImg={promo2} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Favorite;