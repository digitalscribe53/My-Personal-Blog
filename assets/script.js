function darkMode () {
   
   let leftBox = document.getElementById("left-box");
   let rightBox = document.getElementById("right-box");
   leftBox.classList.toggle("dark-mode");
   rightBox.classList.toggle("dark-mode");
   
}

let blogPosts = [];



function saveText() {
   /* Load the Blog Posts page when submit btn is clicked */
   window.location = "./blog.html";
   let blogContainer = document.getElementById("blog-container");
   blogContainer.classList.toggle("dark-mode");
   let textArea = document.getElementById("blog-text").value;
   
   document.getElementById("first-article").innerText = textArea;
}

function goBack() {
   window.location = "./index.html";
}