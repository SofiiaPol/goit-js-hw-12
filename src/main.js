import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

let page = 1;
const PER_PAGE = 15;
let images = [];
let query = '';
let total = 0;
let rect;

const searchForm = document.querySelector('.search-form');
const loadMoreButton = document.querySelector('.load-button');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a');
updateLoadButton('none');

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
    page = 1;
    const data = await fetchImages(userInput);
    updateLoader('none');
    updateLoadButton('block');

    if (data.totalHits === 0) {
      updateLoadButton('none');
      showMessage(
        `Sorry, there are no images matching your search query. Please try again!`
      );
    }
    renderImages(data.hits);
    lightbox.refresh();
    query = userInput;
    total = data.totalHits;
    images = data.hits;
    let elem = document.querySelector('.gallery-item');
    rect = elem.getBoundingClientRect();
  } catch (error) {
    updateLoader('none');
    showError(error.message);
  }
};

const onLoadMoreButtonClick = async event => {
  event.preventDefault();
  try {
    page = page + 1;
    if (images.length >= total) {
      updateLoadButton('none');
      showMessage(`We're sorry, but you've reached the end of search results.`);
      return;
    }
    const data = await fetchImages(query, page, PER_PAGE);
    updateLoader('none');
    const result = [...images, ...data.hits];
    renderImages(result);
    scrollBy(0, rect.height * 2);
    lightbox.refresh();
    images = result;
  } catch (error) {
    updateLoader('none');
    showError(error.message);
  }
};

searchForm.addEventListener('submit', onFormSubmit);
loadMoreButton.addEventListener('click', onLoadMoreButtonClick);

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

function updateLoadButton(value) {
  loadMoreButton.style.display = value;
}
