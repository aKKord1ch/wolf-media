import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { List, ListItem } from "./interface/listInterface";

const initialState: List = {
   favs: []
}

const listSlice = createSlice({
   name: 'slug_favorites',
   initialState,
   reducers: {
      addToFavorites: (state, action: PayloadAction<ListItem> ) => {
         state.favs = [...state.favs, action.payload]
      },
      removeFromFavorites: (state, action: PayloadAction<ListItem>) => {
         state.favs = state.favs.filter((item: Readonly<ListItem>) => item.slug !== action.payload.slug)
      }
   }
})

export const {addToFavorites, removeFromFavorites} =  listSlice.actions;

export default listSlice.reducer;