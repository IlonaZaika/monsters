import { configureStore } from "@reduxjs/toolkit";
import { searchMonstersReducer } from "../containers/app-container/reducers/searchMonstersSlice";
import { monstersReducer } from "../containers/app-container/reducers/monstersSlice";

const store = configureStore({
  reducer: {
    search: searchMonstersReducer,
    monsters: monstersReducer,
  },
});

export default store;
