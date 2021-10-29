import { RootState } from "../store";

const getState = (state: RootState) => state.category;

const getCategoryList = (state: RootState) => getState(state).list;

export const getCategory = (state: RootState, id: String | undefined) => getCategoryList(state).find((category) => category.id === id);
