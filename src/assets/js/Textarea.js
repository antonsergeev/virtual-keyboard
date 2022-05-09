import createPageElement from './createPageElement.js';

class Textarea {
  constructor(parentElement) {
    this.element = createPageElement(parentElement, 'textarea', 'textarea');
    this.element.setAttribute('readonly', 'true');
  }

  add(str) {
    this.element.value += String(str);
  }

  remove() {
    this.element.value = this.element.value.slice(0, -1);
  }
}

export default Textarea;
