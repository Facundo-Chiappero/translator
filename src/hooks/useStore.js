import { initialState, reducer } from "@reducers/reducer"
import { TYPES } from "@utils/constants";
import { useReducer } from "react"

export function useStore() {
  const [{ languageFrom, languageTo, loading, fromText, result }, dispatch] = useReducer(reducer, initialState);

  const setFromLanguage = (payload) => {
    dispatch({ type: TYPES.CHANGE_LANGUAGE_FROM, payload });
  };

  const setToLanguage = (payload) => {
    dispatch({ type: TYPES.CHANGE_LANGUAGE_TO, payload });
  };

  const setRevertLanguage = () => {
    dispatch({ type: TYPES.REVERT, });
  };

  const setFromText = (payload) => {
    dispatch({ type: TYPES.CHANGE_FROM_TEXT, payload });
  };

  const setResult = (payload) => {
    dispatch({ type: TYPES.CHANGE_RESULT, payload });
  };

  const setErase = () => {
    dispatch({ type: TYPES.ERASE });
  };


  return {
    languageFrom, languageTo, loading, fromText, result, setFromLanguage, setFromText, setResult, setRevertLanguage, setToLanguage, setErase
  };
}
