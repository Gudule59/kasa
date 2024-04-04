import Banner from '../Banner/Banner.js'
import Footer from '../Footer/Footer.js'
import Card from '../Card2/Card.js'
import Collapse from '../Collapse/Collapse.js'
import CardList from '../CardList/CardList.js'
import '../../Style/Style.scss';





function Home() {
    return <div >
  <Banner /> <Card /><Collapse /><Footer />
         </div>;
  }

  export default Home;