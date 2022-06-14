import "./App.css";
import { AddCharacter } from "./components/Characters/AddCharacter";
import { ListAllCharacters } from "./components/Characters/ListAllCharacters";

function App() {
  return (
    <div className="App">
      <h1>Harry Potter Characters</h1>
      <AddCharacter />
      <ListAllCharacters />
    </div>
  );
}

export default App;
