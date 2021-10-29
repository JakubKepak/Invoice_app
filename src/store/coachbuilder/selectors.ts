import { formatCoachbuilderText } from "../../utils";
import { RootState } from "../store";

const getState = (state: RootState) => state.coachbuilder;

const getCoachbuilderList = (state: RootState) => getState(state).list;

const getCoachbuilder = (state: RootState, id: string | undefined) => getCoachbuilderList(state).find((coachbuilder) => coachbuilder.id === id);

export const getCoachbuilderText = (state: RootState, id: string | undefined) => formatCoachbuilderText(getCoachbuilder(state, id));
