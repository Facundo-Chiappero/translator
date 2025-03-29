const { GoogleGenAI } = require("@google/genai");

exports.handler = async function (event, context) {
  try {
    const { text, languageFrom, languageTo } = JSON.parse(event.body);

    const myApiKey = process.env.API_KEY;
    const ai = new GoogleGenAI({ apiKey: myApiKey });

    const msgToSend = `${text} {{${languageFrom}}} [[${languageTo}]]`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: msgToSend,
      config: {
        systemInstruction: 'you are a translator, do not respond, just translate, i will give you a message like this: hello {{en}} [[es}}. you have to responde: hola. since the language between {{ }} is the source language and the language between [[ ]] is the destination language, what i send you is not the whole language\'s name, is the short form, some examples: en: English, fr: French, es: Spanish. if the source language is auto guess what language should it be',
      },
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://fake-google-translator.netlify.app",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ translation: response.text }),
    };
  } catch (error) {
    console.error("Error translating: ", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "https://fake-google-translator.netlify.app",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: "Translation failed" }),
    };
  }
};
