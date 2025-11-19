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

  // If no content exists, add default PhonePe Ethics content
  if (heroContent.children.length === 0) {
    const title = document.createElement('h1');
    title.textContent = 'PhonePe Ethics';
    heroContent.appendChild(title);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const button = document.createElement('a');
    button.href = '#code-of-conduct';
    button.textContent = 'Code of Conduct';
    button.classList.add('button', 'purple');

    buttonContainer.appendChild(button);
    heroContent.appendChild(buttonContainer);
  } else {
    // Find and process existing buttons
    const buttons = heroContent.querySelectorAll('a');
    buttons.forEach((button) => {
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');

      button.classList.add('button', 'purple');
      button.parentNode.insertBefore(buttonContainer, button);
      buttonContainer.appendChild(button);
    });
  }

  block.appendChild(heroContent);
}
