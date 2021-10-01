import './App.css';
import {useState, useEffect} from "react"



function App() {
  const [name, setName] = useState("")
  const [characters, setCharacters] = useState([])
  const handleChanges = event => {    
    setName(event.target.value)
    // console.log(name)
    event.preventDefault()
  }

  const url = `https://www.breakingbadapi.com/api/characters?name=${name}`
  const getCharacters = async() => {
    const response = await fetch(url)
    const data = await response.json()
    setCharacters(data)
    console.log(characters)
    
  }
  
  useEffect(() => {
    getCharacters();    
    if (name ==="") {
      document.getElementById("cards").style.display = "none"
    }else {
      document.getElementById("cards").style.display = "block"
    }
    
    
  },[url]);

  return (
    <div className="App">
      <div className="search-comp">
        <input type="text" placeholder="Search by name" className="search" value={name} onChange={handleChanges}/>
      </div>
      <div className="character_cards" id="cards">
        {characters.map((info) => {
          const {
            char_id,
            name,
            nickname,
            birthday,
            portrayed,
            status,
            img,
          } = info

          return (
            <div className="card" key={char_id}>
              <img src={img} alt={name}/>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
