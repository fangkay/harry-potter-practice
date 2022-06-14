import { useState } from "react";
import { addCharacter } from "../../store/characters/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectCharacters } from "../../store/characters/selectors";

export const AddCharacter = () => {
  const [name, setName] = useState("");
  const [house, setHouse] = useState("");
  const characters = useSelector(selectCharacters);
  const dispatch = useDispatch();

  const formSubmit = (e) => {
    e.preventDefault();
    const newCharacter = { name, house };
    dispatch(addCharacter(newCharacter));
    setName("");
    setHouse("");
  };

  return (
    <div>
      <h1>Add a new character</h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={house} onChange={(e) => setHouse(e.target.value)}>
          {characters.map((c) => (
            <option value={c.house.name}>{c.house.name}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
