const express = require('express');
const { GoogleGenAI } = require('@google/genai');
const dotenv = require('dotenv');
const cors = require('cors');
const { INSTRUCTIONS, ERRORS, MODEL, ROUTE } = require('../src/utils/constants');

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL
}));
app.use(express.json());

const myApiKey = process.env.API_KEY;
const ai = new GoogleGenAI({ apiKey: myApiKey });

app.post(ROUTE, async (req, res) => {
  const { text, languageFrom, languageTo } = req.body;
  const msgToSend = `${text} {{${languageFrom}}} [[${languageTo}]]`;

  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: msgToSend,
      config: {
        systemInstruction:
          INSTRUCTIONS,
      },
    });
    console.log(response);
    res.json({ translation: response.text });
  } catch (error) {
    console.error(ERRORS.TRANSLATING, error);
    res.status(500).json({ error: ERRORS.FAILED });
  }
});

const PORT = process.env.BACKEND_URL.split(':')[2]
app.listen(PORT, () => {
  console.log(`listening ${PORT}`);

});