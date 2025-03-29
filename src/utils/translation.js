import { ERRORS, HOST_BACKEND_URL } from "@utils/constants";

export async function translation(msg, languageFrom, languageTo) {
  const backendUrl = import.meta.env.VITE_BACKEND_URL || HOST_BACKEND_URL
  alert(backendUrl)
  try {
    const response = await fetch(`${backendUrl}/translate`, {
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