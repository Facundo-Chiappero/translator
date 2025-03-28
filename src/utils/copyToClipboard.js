import { CSS_VARS } from "./constants";

export function copyToClipBoard(text, copyContainer) {


  navigator.clipboard.writeText(text)
    .then(() => {

      if (!copyContainer) return

      copyContainer.style.setProperty(CSS_VARS.TEXT.VAR, CSS_VARS.TEXT.ON_COPY);
      copyContainer.style.setProperty(CSS_VARS.POSITION.VAR, CSS_VARS.POSITION.ON_COPY);

      const changeCopy = setTimeout(() => {
        copyContainer.style.setProperty(CSS_VARS.TEXT.VAR, CSS_VARS.TEXT.WAITING);
        copyContainer.style.setProperty(CSS_VARS.POSITION.VAR, CSS_VARS.POSITION.WAITING);

        clearInterval(changeCopy)
      }, 1000)
    })
    .catch((err) => {
      console.error(ERRORS.CLIPBOARD, err);
    });
}
