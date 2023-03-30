import { ADD_FAVORITE, DELETE_FAVORITE, ORDER, FILTER } from "./actiontypes";

export const addFavorite = (person) => {
  return { type: ADD_FAVORITE, payload: person };
};

export const deleteFavorite = (id) => {
  return { type: DELETE_FAVORITE, payload: id };
};

export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
