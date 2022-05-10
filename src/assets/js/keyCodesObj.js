const keyCodesObj = {
  ControlLeft: {
    en: { label: 'Ctrl' },
    ru: { label: 'Ctrl' },
    isFunctional: true,
  },
  MetaLeft: {
    en: { label: 'Meta' },
    ru: { label: 'Meta' },
    isFunctional: true,
  },
  AltLeft: {
    en: { label: 'Alt' },
    ru: { label: 'Alt' },
    isFunctional: true,
  },
  Space: {
    en: { key: ' ', keyShift: ' ' },
    ru: { key: ' ', keyShift: ' ' },
  },
  AltRight: {
    en: { label: 'Alt' },
    ru: { label: 'Alt' },
    isFunctional: true,
  },
  ControlRight: {
    en: { label: 'Ctrl' },
    ru: { label: 'Ctrl' },
    isFunctional: true,
  },
  ArrowLeft: {
    en: { key: '⯇', keyShift: '⯇' },
    ru: { key: '⯇', keyShift: '⯇' },
  },
  ArrowDown: {
    en: { key: '⯆', keyShift: '⯆' },
    ru: { key: '⯆', keyShift: '⯆' },
  },
  ArrowRight: {
    en: { key: '⯈', keyShift: '⯈' },
    ru: { key: '⯈', keyShift: '⯈' },
  },
  ShiftLeft: {
    en: { label: 'Shift' },
    ru: { label: 'Shift' },
    isFunctional: true,
  },
  KeyZ: {
    en: { key: 'z', keyShift: 'Z' },
    ru: { key: 'я', keyShift: 'Я' },
  },
  KeyX: {
    en: { key: 'x', keyShift: 'X' },
    ru: { key: 'ч', keyShift: 'Ч' },
  },
  KeyC: {
    en: { key: 'c', keyShift: 'C' },
    ru: { key: 'с', keyShift: 'С' },
  },
  KeyV: {
    en: { key: 'v', keyShift: 'V' },
    ru: { key: 'м', keyShift: 'М' },
  },
  KeyB: {
    en: { key: 'b', keyShift: 'B' },
    ru: { key: 'и', keyShift: 'И' },
  },
  KeyN: {
    en: { key: 'n', keyShift: 'N' },
    ru: { key: 'т', keyShift: 'Т' },
  },
  KeyM: {
    en: { key: 'm', keyShift: 'M' },
    ru: { key: 'ь', keyShift: 'Ь' },
  },
  Comma: {
    en: { key: ',', keyShift: '<' },
    ru: { key: 'б', keyShift: 'Б' },
  },
  Period: {
    en: { key: '.', keyShift: '>' },
    ru: { key: 'ю', keyShift: 'Ю' },
  },
  Slash: {
    en: { key: '/', keyShift: '?' },
    ru: { key: '.', keyShift: ',' },
  },
  ArrowUp: {
    en: { key: '⯅', keyShift: '⯅' },
    ru: { key: '⯅', keyShift: '⯅' },
  },
  ShiftRight: {
    en: { label: 'Shift' },
    ru: { label: 'Shift' },
    isFunctional: true,
  },
  CapsLock: {
    en: { label: 'Caps Lock' },
    ru: { label: 'Caps Lock' },
    isFunctional: true,
  },
  KeyA: {
    en: { key: 'a', keyShift: 'A' },
    ru: { key: 'ф', keyShift: 'Ф' },
  },
  KeyS: {
    en: { key: 's', keyShift: 'S' },
    ru: { key: 'ы', keyShift: 'Ы' },
  },
  KeyD: {
    en: { key: 'd', keyShift: 'D' },
    ru: { key: 'в', keyShift: 'В' },
  },
  KeyF: {
    en: { key: 'f', keyShift: 'F' },
    ru: { key: 'а', keyShift: 'А' },
  },
  KeyG: {
    en: { key: 'g', keyShift: 'G' },
    ru: { key: 'п', keyShift: 'П' },
  },
  KeyH: {
    en: { key: 'h', keyShift: 'H' },
    ru: { key: 'р', keyShift: 'Р' },
  },
  KeyJ: {
    en: { key: 'j', keyShift: 'J' },
    ru: { key: 'о', keyShift: 'О' },
  },
  KeyK: {
    en: { key: 'k', keyShift: 'K' },
    ru: { key: 'л', keyShift: 'Л' },
  },
  KeyL: {
    en: { key: 'l', keyShift: 'L' },
    ru: { key: 'д', keyShift: 'Д' },
  },
  Semicolon: {
    en: { key: ';', keyShift: ':' },
    ru: { key: 'ж', keyShift: 'Ж' },
  },
  Quote: {
    en: { key: "'", keyShift: '"' },
    ru: { key: 'э', keyShift: 'Э' },
  },
  Enter: {
    en: { label: 'Enter', key: '\n', keyShift: '\n' },
    ru: { label: 'Enter', key: '\n', keyShift: '\n' },
  },
  Tab: {
    en: { label: 'Tab', key: '\t', keyShift: '\t' },
    ru: { label: 'Tab', key: '\t', keyShift: '\t' },
  },
  KeyQ: {
    en: { key: 'q', keyShift: 'Q' },
    ru: { key: 'й', keyShift: 'Й' },
  },
  KeyW: {
    en: { key: 'w', keyShift: 'W' },
    ru: { key: 'ц', keyShift: 'Ц' },
  },
  KeyE: {
    en: { key: 'e', keyShift: 'E' },
    ru: { key: 'у', keyShift: 'У' },
  },
  KeyR: {
    en: { key: 'r', keyShift: 'R' },
    ru: { key: 'к', keyShift: 'К' },
  },
  KeyT: {
    en: { key: 't', keyShift: 'T' },
    ru: { key: 'е', keyShift: 'Е' },
  },
  KeyY: {
    en: { key: 'y', keyShift: 'Y' },
    ru: { key: 'н', keyShift: 'Н' },
  },
  KeyU: {
    en: { key: 'u', keyShift: 'U' },
    ru: { key: 'г', keyShift: 'Г' },
  },
  KeyI: {
    en: { key: 'i', keyShift: 'I' },
    ru: { key: 'ш', keyShift: 'Ш' },
  },
  KeyO: {
    en: { key: 'o', keyShift: 'O' },
    ru: { key: 'щ', keyShift: 'Щ' },
  },
  KeyP: {
    en: { key: 'p', keyShift: 'P' },
    ru: { key: 'з', keyShift: 'З' },
  },
  BracketLeft: {
    en: { key: '[', keyShift: '{' },
    ru: { key: 'х', keyShift: 'Х' },
  },
  BracketRight: {
    en: { key: ']', keyShift: '}' },
    ru: { key: 'ъ', keyShift: 'Ъ' },
  },
  Backslash: {
    en: { key: '\\', keyShift: '|' },
    ru: { key: '\\', keyShift: '/' },
  },
  Backquote: {
    en: { key: '`', keyShift: '~' },
    ru: { key: 'ё', keyShift: 'Ё' },
  },
  Digit1: {
    en: { key: '1', keyShift: '!' },
    ru: { key: '1', keyShift: '!' },
  },
  Digit2: {
    en: { key: '2', keyShift: '@' },
    ru: { key: '2', keyShift: '"' },
  },
  Digit3: {
    en: { key: '3', keyShift: '#' },
    ru: { key: '3', keyShift: '№' },
  },
  Digit4: {
    en: { key: '4', keyShift: '$' },
    ru: { key: '4', keyShift: ';' },
  },
  Digit5: {
    en: { key: '5', keyShift: '%' },
    ru: { key: '5', keyShift: '%' },
  },
  Digit6: {
    en: { key: '6', keyShift: '^' },
    ru: { key: '6', keyShift: ':' },
  },
  Digit7: {
    en: { key: '7', keyShift: '&' },
    ru: { key: '7', keyShift: '?' },
  },
  Digit8: {
    en: { key: '8', keyShift: '*' },
    ru: { key: '8', keyShift: '*' },
  },
  Digit9: {
    en: { key: '9', keyShift: '(' },
    ru: { key: '9', keyShift: '(' },
  },
  Digit0: {
    en: { key: '0', keyShift: ')' },
    ru: { key: '0', keyShift: ')' },
  },
  Minus: {
    en: { key: '-', keyShift: '_' },
    ru: { key: '-', keyShift: '_' },
  },
  Equal: {
    en: { key: '=', keyShift: '+' },
    ru: { key: '=', keyShift: '+' },
  },
  Backspace: {
    en: { label: 'Backspace' },
    ru: { label: 'Backspace' },
    isFunctional: true,
  },
};

export default keyCodesObj;
