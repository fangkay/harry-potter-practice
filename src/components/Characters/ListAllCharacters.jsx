import { useSelector } from "react-redux";
import { selectCharacters } from "../../store/characters/selectors";

export const ListAllCharacters = () => {
  const characters = useSelector(selectCharacters);

  return (
    <div>
      <ul>
        {characters.map((c) => {
          return (
            <li key={c.id}>
              <img width="150" src={c.imgUrl} alt={c.name}></img>
              <p>{c.name}</p>
              <p>{c.house.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
