import createPageElement from './createPageElement.js';

class Textarea {
  constructor(parentElement) {
    this.element = createPageElement(parentElement, 'textarea', 'textarea');
  }

  add(str) {
    this.element.value += String(str);
  }

  remove() {
    this.element.value = this.element.value.slice(0, -1);
  }
}

export default Textarea;
