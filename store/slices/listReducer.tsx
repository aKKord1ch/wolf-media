import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { List, ListItem } from "./interface/listInterface";
import { setLocalStorageData } from "@/helpers/localStorage";

const initialState: List = {
  favs: [],
};

const listSlice = createSlice({
  name: "slug_favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ListItem>) => {
      if (
        !state.favs.some((item: ListItem) => item.slug === action.payload.slug)
      ) {
        state.favs = [...state.favs, action.payload];
        setLocalStorageData("fav-cards", state.favs);
        /* setCookie("count-fav-cards", state.favs.length); */
      }
    },
    removeFromFavorites: (state, action: PayloadAction<ListItem>) => {
      state.favs = state.favs.filter(
        (item: Readonly<ListItem>) => item.slug !== action.payload.slug
      );
      setLocalStorageData("fav-cards", state.favs);
      /* setCookie("count-fav-cards", state.favs.length); */
    },
  },
});

export const { addToFavorites, removeFromFavorites } = listSlice.actions;

export default listSlice.reducer;
