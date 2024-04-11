import Banner from '../Banner/Banner.js'
import Footer from '../Footer/Footer.js'
import Card from '../CardMaster/Card.js'
import Collapse from '../Collapse/Collapse.js'
import '../../Style/Style.scss';
import Imageaccueil2 from '../Assets/ImageSource2.png';




function Home() {
    return <div >
  <Banner /> <Card imageSource={Imageaccueil2} /><Collapse /><Footer />
         </div>;
  }

  export default Home;