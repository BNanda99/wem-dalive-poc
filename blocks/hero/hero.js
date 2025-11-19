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

  // Clean up the structure - move buttons out of h1 if they're nested inside
  const h1 = heroContent.querySelector('h1');
  if (h1) {
    // Find any button containers or links inside the h1
    const buttonsInH1 = h1.querySelectorAll('.button-container, a');
    const buttonsToMove = [];

    buttonsInH1.forEach((element) => {
      if (element.classList.contains('button-container')) {
        buttonsToMove.push(element);
      } else if (element.tagName === 'A') {
        // Create a button container for standalone links
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        element.classList.add('button', 'purple');
        buttonContainer.appendChild(element.cloneNode(true));
        buttonsToMove.push(buttonContainer);
      }
    });

    // Remove buttons from h1 and clean up h1 text
    buttonsInH1.forEach((element) => {
      if (element.classList.contains('button-container') || element.tagName === 'A') {
        element.remove();
      }
    });

    // Clean up h1 text content
    h1.innerHTML = h1.innerHTML.replace(/<div[^>]*>.*?<\/div>/g, '').trim();

    // Add buttons after h1
    buttonsToMove.forEach((buttonContainer) => {
      heroContent.appendChild(buttonContainer);
    });
  }

  // Process any remaining standalone buttons
  const standaloneButtons = heroContent.querySelectorAll('a:not(.button)');
  standaloneButtons.forEach((button) => {
    if (!button.closest('.button-container')) {
      const buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-container');
      button.classList.add('button', 'purple');
      button.parentNode.insertBefore(buttonContainer, button);
      buttonContainer.appendChild(button);
    }
  });

  block.appendChild(heroContent);
}
