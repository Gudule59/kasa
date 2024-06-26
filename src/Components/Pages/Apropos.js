import React from 'react';
import Banner from '../Banner/Banner.js';
import Footer from '../Footer/Footer.js';
import Card from '../CardMaster/Card.js';
import Collapse from '../Collapse/Collapse.js';
import Imageaccueil2 from '../Assets/ImageSource2.png';
import item from '../../Datas/AboutList.json';

function Home() {
    return (
        <div>
            <Banner />
            <Card imageSource={Imageaccueil2} />
            {item.map(({ id, title, content }) => (
                <Collapse key={id} title={title} content={<p>{content}</p>} />
            ))}
            <Footer />
        </div>
    );
}

export default Home;
