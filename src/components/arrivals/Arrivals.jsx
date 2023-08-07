import './arrivals.css';
import cat_1Img from './../../img/categories/cat-01.jpg';
import cat_2Img from './../../img/categories/cat-02.jpg';
import cat_3Img from './../../img/categories/cat-03.jpg';
import Card from '../card/Card';

function Arrivals() {
    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals-content">
                    <div className="arrivals__header">NEW ARRIVALS</div> 
                    <div className="arrivals__cards">
                        <Card title="Hoodies & Sweetshirt" mainImg={cat_1Img} />
                        <Card title="Coats & Parkas" mainImg={cat_2Img} />
                        <Card title="Tees & T-Shirt" mainImg={cat_3Img} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Arrivals;