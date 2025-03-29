import { ERRORS, HOST_BACKEND_URL } from "@utils/constants";

export async function translation(msg, languageFrom, languageTo) {

  // this one is for local
  const backend = import.meta.env.VITE_BACKEND_URL

  // this one is for host, make sure to change its value
  // const backend = HOST_BACKEND_URLconst

  try {
    const response = await fetch(`${backend}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: msg, languageFrom, languageTo }),
    });


    if (!response.ok) {
      throw new Error(ERRORS.NO_RESPONSE);
    }

    const data = await response.json();
    return data.translation;

  } catch (error) {
    console.error(ERRORS.TRANSLATING, error);
    alert(ERRORS.TRY_AGAIN);
    return null;
  }
}