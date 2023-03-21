export const readMore = () => {

  const readMoreParent = document.querySelector('[data-read-more="parent"]');
  const readMoreButton = document.querySelector('[data-read-more="button"]');

  const readMoreButtonToggler = () => {
    if (readMoreParent.classList.contains('is-active')) {
      readMoreButton.textContent = 'Подробнее';
    } else {
      readMoreButton.textContent = 'Свернуть';
    }
  };

  const initReadMoreButton = () => {
    if (readMoreButton) {
      readMoreButton.addEventListener('click', readMoreButtonToggler);
    }
  };

  initReadMoreButton();
};
