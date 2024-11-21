import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchField: "",
};

// Slice contains Redux reducer logic for updating state, and
// generates actions that can be dispatched to trigger those updates.
export const searchMonstersSlice = createSlice({
  name: "searchMonsters",
  initialState,
  reducers: {
    updateSearchQuery: (state, action) => {
      return {
        ...state,
        searchField: action.payload,
      };
    },
  },
});

// Export the generated action creators for use in components
export const { updateSearchQuery } = searchMonstersSlice.actions;

// Export the slice reducer for use in the store configuration
export const searchMonstersReducer = searchMonstersSlice.reducer;
