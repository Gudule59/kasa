import Banner from '../Banner/Banner.js'
import Footer from '../Footer/Footer.js'
import Card from '../Card/Card.js'
import CardList from '../CardList/CardList.js'
import '../../Style/Style.scss';





function Home() {
    return <div > <Banner /> <Card /><CardList /><Footer />
         </div>;
  }

  export default Home;