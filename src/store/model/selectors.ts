import { RootState } from "../store";

const getState = (state: RootState) => state.model;

const getModelList = (state: RootState) => getState(state).list;

export const getModel = (state: RootState, id?: string) => getModelList(state).find((model) => model.id === id);
