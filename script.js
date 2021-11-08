async function getPhotos() {
  let response = await fetch("https://api.scrimba.com/photos.json");
  let photos = await response.json();
  console.log(photos);
}

getPhotos().then((photos) => {
  let myPhotos = photos
    .map((photo) => {
      return `<img src="https://picsum.photos/id/${photo.id}/100/100" alt="${photo.title}"/>`;
    })
    .join("");
  console.log(myPhotos);

  document.body.innerHTML = `<div class="my-photos">${myPhotos}</div>`;
});
