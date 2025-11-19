/**
 * loads and decorates the button
 * @param {Element} block The button block element
 */
export default function decorate(block) {
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  // Move all existing content into the button-container wrapper
  while (block.firstElementChild) {
    const element = block.firstElementChild;
    if (element.tagName === 'A') {
      element.classList.add('button');
    }
    buttonContainer.appendChild(element);
  }

  block.appendChild(buttonContainer);
}
