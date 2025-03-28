import { AUTO, LANGUAGES, PLACEHOLDERS } from "@utils/constants";
import { useRef, useState } from "react";
import { CloseIcon, CopyIcon } from "@components/Icons/Icons";
import { useDebounce } from "hooks/useDebounce";
import './Column.css'
import { copyToClipBoard } from "@utils/copyToClipboard";

export default function Column({ direction, readOnly = false, language, otherLanguage, setLanguage, setFromText, setResult, result, loading, setErase }) {
  const [text, setText] = useState('');
  const resultRef = useRef()
  const copyRef = useRef()

  useDebounce({ text, language, otherLanguage, setFromText, setResult })

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleErase = () => {
    setErase();
    setText('');
  };

  const handleCopy = () => {
    copyToClipBoard(resultRef.current.value, copyRef.current);
  };

  const getPlaceholder = () => {
    if (loading) return PLACEHOLDERS.LOADING;
    if (!loading) return PLACEHOLDERS.TO;
  };

  return (
    <div>
      <select value={language} onChange={handleLanguageChange}>
        {!readOnly && <option value={AUTO}>{AUTO}</option>}
        {Object.entries(LANGUAGES).map(([key, value]) => (
          <option key={key} value={key}>{value}</option>
        ))}
      </select>

      {
        !readOnly ? (
          <div className="textareaContainer">
            <textarea
              name={direction}
              id={direction}
              value={text}
              onChange={handleTextChange}
              autoFocus={true}
              placeholder={PLACEHOLDERS.FROM}
            ></textarea>

            <div onClick={handleErase} className="closeContainer">
              <CloseIcon />
            </div>
          </div>
        ) : (
          <div className="textareaContainer">
            <textarea
              ref={resultRef}
              name={direction}
              id={direction}
              value={result}
              readOnly={true}
              placeholder={getPlaceholder()}
            ></textarea>

            <div
              ref={copyRef}
              onClick={handleCopy}
              className="copyContainer">
              <CopyIcon />
            </div>
          </div>
        )
      }
    </div>
  );
}
