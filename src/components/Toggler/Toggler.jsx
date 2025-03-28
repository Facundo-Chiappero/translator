import { AUTO } from "@utils/constants";
import { TogglerIcon } from "@components/Icons/Icons";
import './Toggler.css'

export default function Toggler({ setRevertLanguage, languageFrom }) {

  const handleClick = () => {
    setRevertLanguage()
  }

  return (
    <button disabled={languageFrom == AUTO} onClick={handleClick}>
      <TogglerIcon />
    </button>
  )
}