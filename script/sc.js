function applyHoverStyle(photo) {
    const img = photo.querySelector("img");
    const up = photo.querySelector(".up");
    const h1 = photo.querySelector("h1");
    const more = photo.querySelector(".more");
  
    img.style.opacity = "0.4";
    img.style.filter = "brightness(30%) grayscale(100%)";
    img.style.transform = "scale(1.1)";
    up.style.transform = "translateY(-20px)";
    h1.style.fontsize = "32px";
    more.style.display = "flex";
  }
  
  function removeHoverStyle(photo) {
    const img = photo.querySelector("img");
    const up = photo.querySelector(".up");
    const h1 = photo.querySelector("h1");
    const more = photo.querySelector(".more");
  
    img.style.opacity = "1";
    up.style.transform = "translateY(0px)";
    img.style.filter = "brightness(100%) grayscale(0%)";
    img.style.transform = "scale(1)";
    h1.style.fontsize = "24px";
    more.style.display = "none";
  }
  
  function showMore(element) {
    const photo = element.closest(".photo");
    const imgSrc = photo.querySelector("img").src;
    const imgDescription = photo.querySelector("img").dataset.description;
    document.getElementById("singleImage").src = imgSrc;
    document.getElementById("description").innerHTML = `<p>${imgDescription}`;
    document.getElementById("singleImage-container").style.display = "flex";
  
    const photos = document.querySelectorAll(".photo");
    photos.forEach((photo) => {
      if (photo !== element.closest(".photo")) {
        photo.style.display = "none";
      }
    });
  }
  
  function closeSingleImage() {
    document.getElementById("singleImage-container").style.display = "none";
  
    const photos = document.querySelectorAll(".photo");
    photos.forEach((photo) => {
      photo.style.display = "block";
    });
  }
  