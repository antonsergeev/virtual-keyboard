import createPageElement from './createPageElement.js';
import keyCodesObj from './keyCodesObj.js';

const keyCodesLayout = [
  [
    'Backquote',
    'Digit1',
    'Digit2',
    'Digit3',
    'Digit4',
    'Digit5',
    'Digit6',
    'Digit7',
    'Digit8',
    'Digit9',
    'Digit0',
    'Minus',
    'Equal',
    'Backspace',
  ],
  [
    'Tab',
    'KeyQ',
    'KeyW',
    'KeyE',
    'KeyR',
    'KeyT',
    'KeyY',
    'KeyU',
    'KeyI',
    'KeyO',
    'KeyP',
    'BracketLeft',
    'BracketRight',
    'Backslash',
  ],
  [
    'CapsLock',
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
    'KeyL',
    'Semicolon',
    'Quote',
    'Enter',
  ],
  [
    'ShiftLeft',
    'KeyZ',
    'KeyX',
    'KeyC',
    'KeyV',
    'KeyB',
    'KeyN',
    'KeyM',
    'Comma',
    'Period',
    'Slash',
    'ArrowUp',
    'ShiftRight',
  ],
  [
    'ControlLeft',
    'MetaLeft',
    'AltLeft',
    'Space',
    'AltRight',
    'ControlRight',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight',
  ],
];

const stretchedKeys = [
  'Backspace',
  'Tab',
  'Backslash',
  'CapsLock',
  'Enter',
  'ShiftLeft',
  'Space',
];

class Keyboard {
  constructor(parentElement, textarea, language = 'en') {
    this.element = createPageElement(parentElement, 'div', 'keyboard');
    this.language = language;
    this.textarea = textarea;
    this.pressedKeys = new Set();
    this.render(language);
    this.addHandlers();
  }

  render() {
    keyCodesLayout.forEach((keysRow) => {
      const row = createPageElement(this.element, 'div', 'keyboard__row');
      keysRow.forEach((keyCode) => {
        const keyObj = keyCodesObj[keyCode][this.language];
        let keyText;
        if (Object.prototype.hasOwnProperty.call(keyObj, 'label')) {
          keyText = keyObj.label;
        } else {
          keyText = keyObj.key.toUpperCase();
        }
        const keyElement = createPageElement(row, 'button', 'keyboard__key', keyText);
        keyElement.dataset.keyCode = keyCode;
        if (stretchedKeys.includes(keyCode)) {
          keyElement.classList.add('keyboard__key_stretched');
        }
      });
    });
  }

  changeLanguage() {
    if (this.pressedKeys.has('AltLeft') && this.pressedKeys.has('ShiftLeft')) {
      ['AltLeft', 'ShiftLeft'].forEach((keyCode) => {
        this.element.querySelector(`.keyboard__key[data-key-code=${keyCode}]`);
        this.pressedKeys.delete(keyCode);
      });
      this.language = this.language === 'en' ? 'ru' : 'en';
    }
  }

  wrightText() {
    [...this.pressedKeys].forEach((pressedKey) => {
      if (!Object.prototype.hasOwnProperty.call(keyCodesObj[pressedKey], 'isFunctional')) {
        this.textarea.add(keyCodesObj[pressedKey][this.language].key);
      } else if (pressedKey === 'Backspace') {
        this.textarea.remove();
      }
    });
  }

  addHandlers() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
    window.addEventListener('click', this.handleClick);
  }

  handleKeyDown = (event) => {
    const keyElement = this.element.querySelector(`.keyboard__key[data-key-code=${event.code}]`);
    // event.preventDefault();
    if (keyElement && !keyElement.classList.contains('pressed')) {
      keyElement.classList.add('pressed');
      this.pressedKeys.add(event.code);
      this.changeLanguage();
      this.wrightText();
    }
  };

  handleKeyUp = (event) => {
    const keyElement = this.element.querySelector(`.keyboard__key[data-key-code=${event.code}]`);
    if (keyElement && keyElement.classList.contains('pressed')) {
      keyElement.classList.remove('pressed');
      this.pressedKeys.delete(event.code);
      this.changeLanguage();
      this.wrightText();
    }
  };

  handleClick = (event) => {
    if (event.target.classList.contains('keyboard__key')) {
      event.target.classList.toggle('pressed');
      if (event.target.classList.contains('pressed')) {
        this.pressedKeys.delete(event.code);
      } else {
        this.pressedKeys.add(event.code);
      }
      this.changeLanguage();
      this.wrightText();
    }
  };
}

export default Keyboard;
