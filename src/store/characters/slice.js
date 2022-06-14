// src/store/something/slice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCharacters: [
    {
      id: 1,
      name: "Luna Lovegood",
      blood: "Pure-blood",
      species: "Human",
      patronus: "Hare",
      born: "13 February, 1981",
      quote:
        "Things we lose have a way of coming back to us in the end, if not always in the way we expect",
      imgUrl:
        "https://static.wikia.nocookie.net/harry-potter-pedia/images/8/87/Luna_profile.png",
      createdAt: "2022-01-27T16:26:36.975Z",
      updatedAt: "2022-01-27T16:26:36.975Z",
      houseId: 3,
      house: {
        id: 3,
        name: "Ravenclaw",
        founder: "Rowena Ravenclaw",
        animal: "Eagle",
        colors: "Blue and Bronze",
        ghost: "Grey Lady",
        imgUrl:
          "https://1.bp.blogspot.com/-3AU33l-fvxI/V-pACpACLHI/AAAAAAAAFKs/Mqcqyj2sTQksDlMg9vx6TSrarVzZWW-VwCLcB/s1600/pm-pride-Ravenclaw-Twitter-Header-Image-1500-x-500-px.png",
        createdAt: "2022-01-27T16:26:36.966Z",
        updatedAt: "2022-01-27T16:26:36.966Z",
      },
    },
    {
      id: 2,
      name: "Hermione Granger",
      blood: "Muggle-born",
      species: "Human",
      patronus: "Otter",
      born: "19 September, 1979",
      quote:
        "Now, if you two don't mind, I'm going to bed before either of you come up with another clever idea to get us killed or worse… Expelled!",
      imgUrl: "https://i.imgur.com/EzbfOmN.jpeg",
      createdAt: "2022-01-27T16:26:36.975Z",
      updatedAt: "2022-01-27T16:26:36.975Z",
      houseId: 1,
      house: {
        id: 1,
        name: "Gryffindor",
        founder: "Godric Gryffindor",
        animal: "Lion",
        colors: "Scarlet and Gold",
        ghost: "Nearly-Headless Nick",
        imgUrl:
          "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/05/Gryffindor-Banner-1920x960.jpg",
        createdAt: "2022-01-27T16:26:36.965Z",
        updatedAt: "2022-01-27T16:26:36.965Z",
      },
    },
    {
      id: 3,
      name: "Bellatrix Lestrange (née Black)",
      blood: "Pure-blood",
      species: "Human",
      patronus: "None",
      born: "1951",
      quote: "I killed Sirius Black... I killed Sirius Black... 🎶",
      imgUrl:
        "https://static.wikia.nocookie.net/dieseldorky16/images/5/5c/6A089BD5-07DA-470E-B3B8-34C2190ABC5C.jpeg",
      createdAt: "2022-01-27T16:26:36.975Z",
      updatedAt: "2022-01-27T16:26:36.975Z",
      houseId: 4,
      house: {
        id: 4,
        name: "Slytherin",
        founder: "Salazar Slytherin",
        animal: "Serpent",
        colors: "Green and Silver",
        ghost: "Bloody Baron",
        imgUrl:
          "https://allears.net/wp-content/uploads/2020/04/Slytherin-Harry-Potter-Pottermore-Hogwarts-Crest.jpg",
        createdAt: "2022-01-27T16:26:36.966Z",
        updatedAt: "2022-01-27T16:26:36.966Z",
      },
    },
    {
      id: 4,
      name: "Tom Riddle (Lord Voldemort)",
      blood: "Half-blood",
      species: "Human",
      patronus: "None",
      born: "31 December, 1926",
      quote:
        "You think I was going to use my filthy Muggle father’s name forever? I, in whose veins runs the blood of Salazar Slytherin himself, through my mother’s side?",
      imgUrl:
        "https://img.static-rmg.be/a/view/q100/w900/h600/3182793/film-voldemort-jpg.jpg",
      createdAt: "2022-01-27T16:26:36.975Z",
      updatedAt: "2022-01-27T16:26:36.975Z",
      houseId: 4,
      house: {
        id: 4,
        name: "Slytherin",
        founder: "Salazar Slytherin",
        animal: "Serpent",
        colors: "Green and Silver",
        ghost: "Bloody Baron",
        imgUrl:
          "https://allears.net/wp-content/uploads/2020/04/Slytherin-Harry-Potter-Pottermore-Hogwarts-Crest.jpg",
        createdAt: "2022-01-27T16:26:36.966Z",
        updatedAt: "2022-01-27T16:26:36.966Z",
      },
    },
    {
      id: 5,
      name: "Harry Potter",
      blood: "Half-blood",
      species: "Human",
      patronus: "Stag",
      born: "31 July, 1980",
      quote: "I don't go looking for trouble. Trouble usually finds me.",
      imgUrl:
        "https://i.pinimg.com/originals/58/39/61/5839613bc887946211e72778d01da05f.jpg",
      createdAt: "2022-01-27T16:26:36.975Z",
      updatedAt: "2022-01-27T16:26:36.975Z",
      houseId: 1,
      house: {
        id: 1,
        name: "Gryffindor",
        founder: "Godric Gryffindor",
        animal: "Lion",
        colors: "Scarlet and Gold",
        ghost: "Nearly-Headless Nick",
        imgUrl:
          "https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/05/Gryffindor-Banner-1920x960.jpg",
        createdAt: "2022-01-27T16:26:36.965Z",
        updatedAt: "2022-01-27T16:26:36.965Z",
      },
    },
  ],
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      const newCharacter = action.payload;
      state.allCharacters = [newCharacter, ...state.allCharacters];
    },
  },
});

export const { addCharacter } = charactersSlice.actions;
export default charactersSlice.reducer;
