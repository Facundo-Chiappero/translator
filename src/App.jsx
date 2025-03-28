import Column from "@components/Column/Column";
import Toggler from "@components/Toggler/Toggler";
import { DIRECTIONS } from "@utils/constants";
import { useStore } from "@hooks/useStore";
import ThemeChanger from 'simple-theme-changer'

function App() {
  const { setFromLanguage, setToLanguage, setFromText, setRevertLanguage, setResult, setErase, languageFrom, languageTo, result, loading } = useStore();


  return (
    <>
      <main>
        <ThemeChanger defaultTheme='dark' />
        <h1>GOOGLE TRANSLATE CLONE</h1>
        <div className="container">
          <div className="translateFrom">
            <Column
              direction={DIRECTIONS.FROM}
              language={languageFrom}
              otherLanguage={languageTo}
              setFromText={setFromText}
              setLanguage={setFromLanguage}
              setResult={setResult}
              setErase={setErase}
            />
          </div>

          <div className="translateToggler">
            <Toggler setRevertLanguage={setRevertLanguage} languageFrom={languageFrom} />
          </div>

          <div className="translateTo">
            <Column
              direction={DIRECTIONS.TO}
              language={languageTo}
              setLanguage={setToLanguage}
              readOnly={true}
              result={result}
              loading={loading}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
