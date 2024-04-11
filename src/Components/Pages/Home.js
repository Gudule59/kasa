import Banner from '../Banner/Banner.js'
import Footer from '../Footer/Footer.js'
import Card from '../CardMaster/Card.js'
import CardList from '../CardList/CardList.js'
import '../../Style/Style.scss';
import Imageaccueil1 from '../Assets/Imageaccueil.png';




function Home() {
    return <div > <Banner /> <Card imageSource={Imageaccueil1} title="Chez vous, partout et ailleurs"/><CardList /><Footer />
         </div>;
  }

  export default Home;