window.addEventListener("load", showList); 

function showList(){
    const savedTitle = localStorage.getItem("title");
    const savedBlogPost = localStorage.getItem("blog-post");
    const savedImage = localStorage.getItem("image");

    document.getElementById("title1").innerHTML = "Title: " + savedTitle;
    document.getElementById("blog-post1").innerHTML= "Blog Post: " + savedBlogPost;
    document.getElementById("image1").innerHTML= "Image: " + savedImage;
}