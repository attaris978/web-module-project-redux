import {
  TOGGLE_FAVORITES,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} from "../actions/favoritesActions.js";
import movies from "./../data.js";

const initialState = {
  favorites: [movies[0], movies[1]], 
//   [{
//     id: 1,
//     title: "Star Wars",
//     director: "George Lucas",
//     metascore: 92,
//     genre: "Scifi",
//     description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader."
//   }],
  displayFavorites: false,
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      return {
        ...state,
        displayFavorites: !state.displayFavorites,
      };

    case ADD_FAVORITE:
        console.log("Favorite added");
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_FAVORITE:
        console.log(state.favorites, action.payload);
      return {
        ...state,
        favorites: state.favorites.filter(item=>(action.payload !== item.id))
        
      };

    default:
        console.log("default triggered");
      return state;
  }
};

export default favoritesReducer;
