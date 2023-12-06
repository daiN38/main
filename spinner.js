export function createSpinner(parent) {
  const spinnerAreaEl = document.createElement('div').className = 'spinner-area';
  const imageEl = document.createElement('img');
  // spinnerAreaEl.className = 'spinner-area'
  imageEl.alt = 'spinner';
  imageEl.src = './src/image/spinner.gif';

  spinnerAreaEl.imageEl(imageEl.alt, imageEl.src);
}
