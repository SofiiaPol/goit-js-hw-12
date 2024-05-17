export const renderImages = items => {
  const htmlString = items
    .map(
      image => `
    <li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
            />
        </a>
        <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            <span>${image.likes}</span> 
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            <span>${image.views}</span>
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            <span>${image.comments}</span>
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            <span>${image.downloads}</span>
                        </p>
                    </div>
    </li>

`
    )
    .join('');

  document.querySelector('.gallery').innerHTML = htmlString;
};
