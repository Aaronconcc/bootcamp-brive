import { useEffect, useState } from 'react';
import './App.css';
import { Characters } from './components/Characters';

function App() {
  const [characters, setCharacters] = useState([]);
  
  function getCharacters(pageNumber = 1){
    const res = fetch("https://rickandmortyapi.com/api/character/?page=19")
    .then(response => response.json())
    .then(({results, info})=> {return { results}})
    .catch(() => { return [] })
    return res;
  }
  async function consoleCharacters(){
    const resp = await getCharacters();
    //console.log(resp);
    setCharacters(resp.results);
    
  }
  useEffect(() => {
    consoleCharacters();
  }, []);

  return (
    <div className="App">
      <header className = 'Header'>
        <img className='Logo' src="/logo.jpg" alt=""/>
        <h1 className='Terms'>Terminos y condiciones</h1>
      </header>
      <div className='Hero'>
        <div>
          <h1>Rick and Morty</h1>
          <h1>See all the characters</h1>
        </div>            
      </div>
      <main>
        <h1 className='main-title'>Character List</h1>
        <hr/>
        <div>
       
        {
          characters && characters.map(character => (
          <Characters character = {character}/> 
          )) 
        }

        </div>       
      </main>
    </div>
  );
}

export default App;
