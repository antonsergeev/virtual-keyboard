import createPageElement from './createPageElement.js';
import Keyboard from './Keyboard.js';
import Textarea from './Textarea.js';

function createPage() {
  const header = createPageElement(document.body, 'header', 'header');
  const headerContainer = createPageElement(header, 'div', 'container');
  createPageElement(headerContainer, 'h1', 'title', 'Virtual Keyboard');
  createPageElement(headerContainer, 'p', '', 'Linux keyboard layout for en/ru languages (press LeftAlt+LeftShift for change)');

  const main = createPageElement(document.body, 'main');
  const mainContainer = createPageElement(main, 'div', 'container');
  const textarea = new Textarea(mainContainer);
  const keyboard = new Keyboard(mainContainer, textarea);
  const languageElement = createPageElement(mainContainer, 'p', 'language', keyboard.language);

  const footer = createPageElement(document.body, 'footer');
  createPageElement(footer, 'div', 'container');

  setInterval(() => {
    languageElement.textContent = keyboard.language;
  }, 250);
}

export default createPage;
