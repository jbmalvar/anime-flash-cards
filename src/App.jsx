import { useState } from 'react'
import Card from './components/Card'
import './App.css';
import maomaoImage from './assets/Maomao-Design-Anime.webp'

const App = () => {
  const [characters, setCharacters] = useState([
    {
      name: 'Naruto Uzumaki',
      image: 'https://cdn.staticneo.com/w/naruto/Nprofile2.jpg?20120125214131'
    },
    {
      name: 'Sasuke Uchiha',
      image: 'https://upload.wikimedia.org/wikipedia/en/4/42/SasukeKishimoto.jpg'
    },
    {
      name: 'Sakura Haruno',
      image: 'http://www.gubaba.org/mi2/wiki/images/thumb/7/70/Sakura.jpg/600px-Sakura.jpg'
    },
    {
      name: 'Kakashi Hatake',
      image: 'https://static.wikia.nocookie.net/character-stats-and-profiles/images/5/5b/Part_1_Kakashi.jpg'
    },
    {
      name: 'Vladilena Milize',
      image: 'https://static.wikia.nocookie.net/universal-warriors/images/a/a7/Vladilena_Milize_Anime.png'
    },
    {
      name: 'Eren Yeager',
      image: 'https://static.wikia.nocookie.net/shingekinokyojin/images/3/3c/Eren_Jaeger_%28Anime%29_character_image_%28850%29.png'
    },
    {
      name: 'Satowa Hozuki',
      image: 'https://static.wikia.nocookie.net/kono-oto-tomare/images/1/1d/230971.jpg'
    },
    {
      name: 'Maomao',
      image: maomaoImage
    },
    {
      name: 'Megumin',
      image: 'https://static.wikia.nocookie.net/konosuba/images/3/3f/Megumin-anime.png'
    },
    {
      name: 'Miu Takigawa',
      image: 'https://cdn.myanimelist.net/images/characters/5/389321.jpg'
    }
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
    };
  
    const prevCard = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
    };

  return (
    <div className="Header">
      <h1>Anime Character Test</h1>
      <p>How well can you identify these characters? Check it out!</p>
      <p>Number of cards: {characters.length}</p>
      <div className = "CardContainer">
        <Card character={characters[currentIndex]} />
        <button className='button' onClick={prevCard}>{"<-"}</button>
        <button className='button' onClick={nextCard}>{"->"}</button>
      </div>
    </div>
  )
};

export default App;
