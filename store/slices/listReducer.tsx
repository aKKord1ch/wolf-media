import { createSlice, PayloadAction  } from "@reduxjs/toolkit";
import { List, ListItem } from "./interface/listInterface";

const initialState: List = {
   items: []
}

const listSlice = createSlice({
   name: 'list',
   initialState,
   reducers: {
      setItem: (state, action: PayloadAction<ListItem[]> ) => {
         state.items = action.payload
      }
   }
})

export const {setItem} =  listSlice.actions;

export default listSlice.reducer;