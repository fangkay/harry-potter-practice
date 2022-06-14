export const selectCharacters = (reduxState) => {
  const arrayCopy = [...reduxState.characters.allCharacters];
  return arrayCopy.sort((a, b) => a.name.localeCompare(b.name)); //Sort alphabetically
};
