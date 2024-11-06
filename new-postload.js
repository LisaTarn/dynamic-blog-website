const saveButton = document.getElementById("save-btn"); //setting up save button
const clearButton = document.getElementById("clear-btn"); //setting up clear button

saveButton.addEventListener ("click", setBlogPostListing); //adding event listener so input will save to local storage on click

function getBlogPostListing(){
  const title = localStorage.getItem("title");
  const blogpost = localStorage.getItem("blog-post")
  const image = localStorage.getItem("image");

  document.getElementById("title").value = title;
  document.getElementById("blog-post") = blogpost;
  document.getElementById("image") = image;
}

function setBlogPostListing(){
  localStorage.setItem("title", document.getElementById("title").value);
  localStorage.setItem("blog-post", document.getElementById("blog-post").value);
  localStorage.setItem("image", document.getElementById("image").value);

  getBlogPostListing();
}