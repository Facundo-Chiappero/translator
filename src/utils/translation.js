import { ERRORS, INSTRUCTIONS } from "@utils/constants";
import { GoogleGenAI } from "@google/genai";

const myApiKey = import.meta.env.VITE_API_KEY

const ai = new GoogleGenAI({ apiKey: myApiKey });

export async function translation(msg, languageFrom, languageTo) {
  const msgToSend = `${msg} {{${languageFrom}}} [[${languageTo}]]`

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: msgToSend,
      config: {
        systemInstruction: INSTRUCTIONS,
      },
    });
    return response.text

  } catch (error) {
    // get the error code
    const errorMessage = error.message
    const jsonStart = errorMessage.indexOf('{');
    const errorJsonString = errorMessage.slice(jsonStart);
    const parsedError = JSON.parse(errorJsonString)

    if (parsedError.error.code == 429) {
      alert(ERRORS[429]);
    } else {
      alert(ERRORS.UNEXPECTED);
    }
  }
}