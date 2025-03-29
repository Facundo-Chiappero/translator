import { AUTO, TYPES } from "@utils/constants";

export const initialState = {
  languageFrom: AUTO,
  languageTo: 'en',
  loading: false,
  fromText: '',
  result: ''
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === TYPES.CHANGE_LANGUAGE_FROM) {

    return {
      ...state,
      languageFrom: payload,
      result: ''
    };
  }

  if (type === TYPES.CHANGE_LANGUAGE_TO) {

    return {
      ...state,
      languageTo: payload,
      result: ''
    };
  }

  if (type === TYPES.REVERT) {

    if (state.languageFrom === AUTO) return state

    const loading = state.languageFrom === ''

    return {
      ...state,
      languageFrom: state.languageTo,
      languageTo: state.languageFrom,
      loading: loading
    };
  }

  if (type === TYPES.CHANGE_FROM_TEXT) {
    return {
      ...state,
      fromText: payload,
      loading: true,
      result: ''
    };
  }

  if (type === TYPES.CHANGE_RESULT) {

    return {
      ...state,
      result: payload,
      loading: false
    };
  }

  if (type === TYPES.ERASE) {

    return {
      ...state,
      result: '',
      fromText: '',
      loading: false
    };
  }

  return state;
};
