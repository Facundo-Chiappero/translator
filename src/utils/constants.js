export const DIRECTIONS = {
  FROM: 'from',
  TO: 'to'
}

export const LANGUAGES = {
  af: 'Afrikaans',
  sq: 'Albanian',
  am: 'Amharic',
  ar: 'Arabic',
  hy: 'Armenian',
  az: 'Azerbaijani',
  eu: 'Basque',
  be: 'Belarusian',
  bn: 'Bengali',
  bs: 'Bosnian',
  bg: 'Bulgarian',
  ca: 'Catalan',
  ceb: 'Cebuano',
  ny: 'Chichewa',
  zh: 'Chinese (Simplified)',
  zh_TW: 'Chinese (Traditional)',
  co: 'Corsican',
  hr: 'Croatian',
  cs: 'Czech',
  da: 'Danish',
  nl: 'Dutch',
  en: 'English',
  eo: 'Esperanto',
  et: 'Estonian',
  fi: 'Finnish',
  fr: 'French',
  fy: 'Frisian',
  gl: 'Galician',
  ka: 'Georgian',
  de: 'German',
  el: 'Greek',
  gu: 'Gujarati',
  ht: 'Haitian Creole',
  ha: 'Hausa',
  haw: 'Hawaiian',
  he: 'Hebrew',
  hi: 'Hindi',
  hm: 'Hmong',
  hu: 'Hungarian',
  is: 'Icelandic',
  ig: 'Igbo',
  id: 'Indonesian',
  ga: 'Irish',
  it: 'Italian',
  ja: 'Japanese',
  jv: 'Javanese',
  kn: 'Kannada',
  kk: 'Kazakh',
  km: 'Khmer',
  rw: 'Kinyarwanda',
  ko: 'Korean',
  ku: 'Kurdish (Kurmanji)',
  ky: 'Kyrgyz',
  lo: 'Lao',
  la: 'Latin',
  lv: 'Latvian',
  lt: 'Lithuanian',
  lb: 'Luxembourgish',
  mk: 'Macedonian',
  mg: 'Malagasy',
  ms: 'Malay',
  ml: 'Malayalam',
  mt: 'Maltese',
  mi: 'Maori',
  mr: 'Marathi',
  mn: 'Mongolian',
  my: 'Myanmar (Burmese)',
  ne: 'Nepali',
  no: 'Norwegian',
  or: 'Odia',
  ps: 'Pashto',
  fa: 'Persian',
  pl: 'Polish',
  pt: 'Portuguese',
  pa: 'Punjabi',
  ro: 'Romanian',
  ru: 'Russian',
  sm: 'Samoan',
  gd: 'Scots Gaelic',
  sr_Cyrl: 'Serbian Cyrilic',
  st: 'Sesotho',
  sn: 'Shona',
  sd: 'Sindhi',
  si: 'Sinhala',
  sk: 'Slovak',
  sl: 'Slovenian',
  so: 'Somali',
  es: 'Spanish',
  su: 'Sundanese',
  sw: 'Swahili',
  sv: 'Swedish',
  tl: 'Tagalog',
  tg: 'Tajik',
  ta: 'Tamil',
  tt: 'Tatar',
  te: 'Telugu',
  th: 'Thai',
  tr: 'Turkish',
  tk: 'Turkmen',
  uk: 'Ukrainian',
  ur: 'Urdu',
  ug: 'Uyghur',
  uz: 'Uzbek',
  vi: 'Vietnamese',
  cy: 'Welsh',
  xh: 'Xhosa',
  yi: 'Yiddish',
  yo: 'Yoruba',
  zu: 'Zulu',
};


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
  CLIPBOARD: "Error al copiar al portapapeles: ",
  TRY_AGAIN: "An error occurred. Please try again in a few minutes.",
  NO_RESPONSE: "Network response was not ok",
  TRANSLATING: "Error translating: ",
  FAILED: "Translation failed",
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

export const MODEL = "gemini-2.0-flash"

export const ROUTE = "/translate"

export const HOST_BACKEND_URL = "/.netlify/functions"