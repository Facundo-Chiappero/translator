import { translation } from "../utils/translation";
import { useEffect } from "react";

export function useDebounce({ text, language, otherLanguage, setFromText, setResult }) {
  useEffect(() => {
    const debounce = setTimeout(() => {
      const cleanText = text.trim();
      if (!cleanText) return;

      setFromText(cleanText);

      async function getResponse() {
        const response = await translation(cleanText, language, otherLanguage);
        setResult(response);
      }
      getResponse();
    }, 300);

    return () => {
      clearTimeout(debounce);
    };
  }, [text, language, otherLanguage]);
}