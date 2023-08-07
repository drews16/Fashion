import Header from "./components/header/Header.jsx";
import Promo from "./components/promo/Promo.jsx";
import Brands  from "./components/brands/Brands.jsx";
import Arrivals from "./components/arrivals/Arrivals.jsx";
import Banner from "./components/banner/Banner.jsx";
import Favorite from "./components/favorite/Favorite.jsx";
import Vouchers from "./components/vouchers/Vouchcers.jsx";
import Community from "./components/community/Community.jsx";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Favorite />
      <Vouchers />
      <Community />
      <Footer />
    </div>
  );
}

export default App;