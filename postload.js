window.addEventListener("load", loadBlog); 
const editButton = document.getElementById("edit-btn"); //setting up edit button

editButton.addEventListener ("click", editBlog); //adding event listener so input will edit local storage

const deleteButton = document.getElementById("delete-btn");

deleteButton.addEventListener ("click", clearBlogPosts);


function loadBlog(){
    const savedTitle = localStorage.getItem("title");
    const savedBlogPost = localStorage.getItem("blog-post");
    const savedImage = localStorage.getItem("image");

    document.getElementById("title").innerHTML = savedTitle;
    document.getElementById("blog-post").innerHTML = savedBlogPost;
    document.getElementById("image").innerHTML = savedImage;
}

function editBlog(){
    const title = localStorage.getItem("title")
    document.getElementById("title").value = title

    const blogpost = localStorage.getItem("blog-post")
    document.getElementById("blog-post").value = blogpost

    const image= localStorage.getItem("image")
    document.getElementById("image").value = image
}

function clearBlogPosts(){  //function to clear local storage
    localStorage.clear();
    document.getElementById("title").innerHTML = "   ";
    document.getElementById("blog-post").innerHTML = "  ";
    document.getElementById("image").innerHTML = "    ";
    }
