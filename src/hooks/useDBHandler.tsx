// this code is not yet implemented

import { useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";

export default function useDBHandler() {
  const initialState = {
    status: "loading",
    data: undefined,
    error: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <div></div>;
}
