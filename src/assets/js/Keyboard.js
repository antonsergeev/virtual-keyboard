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
  constructor(parentElement, textarea) {
    this.element = createPageElement(parentElement, 'div', 'keyboard');
    this.getLanguageFromLocalStorage();
    this.textarea = textarea;
    this.pressedKeys = new Set();
    this.render();
    this.addHandlers();
  }

  getLanguageFromLocalStorage() {
    let language = localStorage.getItem('antonsergeev-virtual-keyboard-language');
    if (!language) {
      language = 'en';
    }
    this.language = language;
    return language;
  }

  saveLanguageToLocalStorage() {
    localStorage.setItem('antonsergeev-virtual-keyboard-language', this.language);
  }

  render() {
    this.element.innerHTML = '';
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
        if (!Object.prototype.hasOwnProperty.call(keyObj, 'label') && keyObj.key.toUpperCase() !== keyObj.keyShift) {
          createPageElement(keyElement, 'span', 'keyboard__key-shift', keyObj.keyShift);
        }
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
      this.render();
      this.saveLanguageToLocalStorage();
    }
  }

  wrightText() {
    [...this.pressedKeys].forEach((pressedKey, i, pressedKeys) => {
      // console.log(this, pressedKeys);
      if (!Object.prototype.hasOwnProperty.call(keyCodesObj[pressedKey], 'isFunctional')) {
        let key;
        if ((pressedKeys.includes('ShiftLeft') || pressedKeys.includes('ShiftLeft')) && !pressedKeys.includes('CapsLock')) {
          key = keyCodesObj[pressedKey][this.language].keyShift;
        } else if (!(pressedKeys.includes('ShiftLeft') || pressedKeys.includes('ShiftLeft')) && pressedKeys.includes('CapsLock')) {
          key = keyCodesObj[pressedKey][this.language].keyShift;
        } else {
          key = keyCodesObj[pressedKey][this.language].key;
        }
        this.textarea.add(key);
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

  removeHandlers() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
    window.removeEventListener('click', this.handleClick);
  }

  handleKeyDown = (event) => {
    const keyElement = this.element.querySelector(`.keyboard__key[data-key-code=${event.code}]`);
    this.textarea.element.focus();
    if (keyElement && !keyElement.classList.contains('pressed')) {
      keyElement.classList.add('pressed');
      if (['Tab', 'Enter', 'Space'].includes(event.code)) {
        event.preventDefault();
      }
      if (event.code === 'CapsLock' && this.pressedKeys.has(event.code)) {
        this.pressedKeys.delete(event.code);
      } else {
        this.pressedKeys.add(event.code);
      }
      this.changeLanguage();
      this.wrightText();
    }
  };

  handleKeyUp = (event) => {
    const keyElement = this.element.querySelector(`.keyboard__key[data-key-code=${event.code}]`);
    if (keyElement && keyElement.classList.contains('pressed')) {
      keyElement.classList.remove('pressed');
      if (event.code !== 'CapsLock') {
        this.pressedKeys.delete(event.code);
      }
      this.changeLanguage();
    }
  };

  handleClick = (event) => {
    if (event.target.classList.contains('keyboard__key')) {
      if (event.target.classList.contains('pressed')) {
        event.target.classList.remove('pressed');
        this.pressedKeys.delete(event.target.dataset.keyCode);
      } else {
        event.target.classList.add('pressed');
        this.pressedKeys.add(event.target.dataset.keyCode);
      }
      this.changeLanguage();
      this.wrightText();
      setTimeout(() => {
        if (!Object.prototype.hasOwnProperty.call(keyCodesObj[event.target.dataset.keyCode], 'isFunctional')) {
          if (event.target.classList.contains('pressed')) {
            event.target.classList.remove('pressed');
            this.pressedKeys.delete(event.target.dataset.keyCode);
          } else {
            event.target.classList.add('pressed');
            this.pressedKeys.add(event.target.dataset.keyCode);
          }
        }
      }, 100);
    }
  };
}

export default Keyboard;
