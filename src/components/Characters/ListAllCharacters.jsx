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
              <p>{c.name}</p>
              <p>{c.house.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
