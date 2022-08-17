//post code
let url;
const post = async (event) => {
  event.preventDefault();
  //query selectors
  document.querySelector(".song-form .sub-button").setAttribute("disabled", "");
  const song_name = document.querySelector('#song_name').value.trim();
  const artist_name = document.querySelector('#artist_name').value.trim();
  const comment_text = document.querySelector('#comment_text').value.trim();

  const response = await fetch(`/api/songs`, {
    method: 'POST',
    body: JSON.stringify({ song_name, artist_name, url, comment_text }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to create project');
  }
  document.querySelector(".song-form .sub-button").removeAttribute("disabled");
};
//widget to upload an image from cloudinary
var myWidget = cloudinary.createUploadWidget({
  cloudName: 'deubd4mph',
  uploadPreset: 'paup0jwu'
}, (error, result) => {
  if (!error && result && result.event === "success") {
    console.log('Done! Here is the image info: ', result.info);
    url = result.info.url;
    const image = document.createElement("img");
    image.setAttribute("src", url);
    const songPhoto = document.querySelector(".song-photo");
    songPhoto.append(image);
  }
}
)

document.getElementById("upload_widget").addEventListener("click", function (event) {
  event.preventDefault();
  myWidget.open();
}, false);

document.querySelector('.song-form').addEventListener("submit", post);

