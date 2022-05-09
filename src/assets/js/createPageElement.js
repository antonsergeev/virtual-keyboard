function createPageElement(parentElement = null, tagName = 'div', className = '', textContent = '') {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = textContent;
  if (parentElement) {
    parentElement.append(element);
  }
  return element;
}

export default createPageElement;
