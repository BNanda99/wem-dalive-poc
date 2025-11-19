/**
 * loads and decorates the hero
 * @param {Element} block The hero block element
 */
export default function decorate(block) {
  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');

  // Move all existing content into the hero-content wrapper
  while (block.firstElementChild) {
    heroContent.appendChild(block.firstElementChild);
  }

  // Find and process the button
  const buttons = heroContent.querySelectorAll('a');
  buttons.forEach((button) => {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    button.classList.add('button', 'purple');
    button.parentNode.insertBefore(buttonContainer, button);
    buttonContainer.appendChild(button);
  });

  block.appendChild(heroContent);
}
