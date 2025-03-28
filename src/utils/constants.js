export const DIRECTIONS = {
  FROM: 'from',
  TO: 'to'
}

export const LANGUAGES = {
  en: 'English',
  es: 'Spanish',
  it: 'Italian',
  fr: 'French',
}

export const AUTO = 'Auto'

export const TYPES = {
  CHANGE_LANGUAGE_FROM: 'CHANGE_LANGUAGE_FROM',
  CHANGE_LANGUAGE_TO: 'CHANGE_LANGUAGE_TO',
  REVERT: 'REVERT',
  CHANGE_FROM_TEXT: 'CHANGE_FROM_TEXT',
  CHANGE_RESULT: 'CHANGE_RESULTS',
  COPY: 'COPY',
  ERASE: 'ERASE'
}

export const INSTRUCTIONS = 'you are a translator, do not respond, just translate, i will give you a message like this: hello {{en}} [[es}}. you have to responde: hola. since the language between {{ }} is the source language and the language between [[ ]] is the destination language, what i send you is not the whole language\'s name, is the short form, some examples: en: English, fr: French, es: Spanish. if the source language is auto guess what language should it be'

export const PLACEHOLDERS = {
  FROM: 'Text to translate',
  TO: 'Translation',
  LOADING: 'Loading'
}

export const ERRORS = {
  429: "There was an error, try again in a few seconds",
  CLIPBOARD: "Error al copiar al portapapeles: ",
  UNEXPECTED: "An unexpected error occurred. Please try again later."
}

export const CSS_VARS = {
  TEXT: {
    VAR: "--copy-text",
    ON_COPY: '"Copied!"',
    WAITING: '"Copy"'
  },
  POSITION: {
    VAR: "--copy-right",
    ON_COPY: 0,
    WAITING: "0.45rem"
  }
}