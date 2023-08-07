import './brands.css';
import amazon from './../../img/brands/Amazon.png';
import hm from './../../img/brands/HM.png';
import lacoste from './../../img/brands/Lacoste.png';
import levis from './../../img/brands/Levis.png';
import obey from './../../img/brands/Obey.png';
import shopify from './../../img/brands/Shopify.png';

function Brands() {
    return (
        <section className="brands">
            <div className="container">
                <ul className="brands-list">
                    <li><a href="#!"><img src={hm} /></a></li>
                    <li><a href="#!"><img src={obey} /></a></li>
                    <li><a href="#!"><img src={shopify} /></a></li>
                    <li><a href="#!"><img src={lacoste} /></a></li>
                    <li><a href="#!"><img src={levis} /></a></li>
                    <li><a href="#!"><img src={amazon} /></a></li>
                </ul>
            </div>
        </section>
    );
};

export default Brands;