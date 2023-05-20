import React, {useEffect,useState} from 'react';
import Karakter from './components/Karakter';
import axios from "axios";


const App = () => {

  const [chars, setChars] = useState([])
  const [films, setFilms] = useState([])
  const [loading, setLoading] = useState(true);
 

  useEffect(()=>{
    const charsPromise = axios("https://swapi.dev/api/people/")
    const filmsPromise = axios("https://swapi.dev/api/films/")
    const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "StarWars")
});

Promise.all([charsPromise,filmsPromise,promise3]).then((values)=> {
    console.log(values);
    setChars(values[0].data);
    setFilms(values[1].data[0].results);
    setLoading(false);
    
})
}, [])

  return (
    <div className="App">
     <img
       src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Star_Wars_Day_May_The_Fourth.svg/1200px-Star_Wars_Day_May_The_Fourth.svg.png"
       alt='Star Wars Logo'
       width ="500px"/>
       {loading && <h1>Hello there.</h1>}
       {!loading && (
        <div>
      <audio id="audio" src="https://voca.ro/1mB9ZYkZRtHi"></audio>
      <Karakter chars={chars} films={films} />
        </div>
       )}
    </div>
  );
}

export default App;
