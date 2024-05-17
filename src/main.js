import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a');

const onFormSubmit = async event => {
  event.preventDefault();
  updateLoader('block');
  const form = event.target;
  const userInput = form.elements.searchInput.value;
  if (userInput.trim() === '') {
    alert('please fill in the line');
    return;
  }
  try {
    const data = await fetchImages(userInput);
    updateLoader('none');
    if (data.totalHits === 0) {
      showMessage(
        `Sorry, there are no images matching your search query. Please try again!`
      );
    }
    renderImages(data.hits);
    lightbox.refresh();
  } catch (error) {
    updateLoader('none');
    showError(error.message);
  }
};

searchForm.addEventListener('submit', onFormSubmit);

function showError(errorMessage) {
  iziToast.show({
    title: 'Error',
    message: errorMessage,
    messageColor: 'white',
    backgroundColor: 'tomato',
  });
}

function showMessage(message) {
  iziToast.show({
    title: 'Message',
    message: message,
    messageColor: 'white',
    backgroundColor: 'teal',
  });
}

function updateLoader(value) {
  loader.style.display = value;
}
// fetchImages(userInput)
//   .then(data => {
//     updateLoader('none');
//     if (data.totalHits === 0) {
//       showMessage(
//         `Sorry, there are no images matching your search query. Please try again!`
//       );
//     }
//     renderImages(data.hits);
//     lightbox.refresh();
//   })
//   .catch(error => {
//     updateLoader('none');
//     showError(error.message);
//   });
