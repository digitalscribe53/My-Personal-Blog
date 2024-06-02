function darkMode () {
   
   let leftBox = document.getElementById("left-box");
   let rightBox = document.getElementById("right-box");
   leftBox.classList.toggle("dark-mode");
   rightBox.classList.toggle("dark-mode");
}

function blogDarkMode() {
   let blogContainer = document.getElementById("blog-container");
   blogContainer.classList.toggle("dark");

   let article1 = document.getElementById("first-article");
   let article2 = document.getElementById("second-article");
   let article3 = document.getElementById("third-article");
   let article4 = document.getElementById("fourth-article");
   
   article1.classList.toggle("dark-borders");
   article2.classList.toggle("dark-borders");
   article3.classList.toggle("dark-borders");
   article4.classList.toggle("dark-borders");
}

let blogPosts = [];

 /* Load the Blog Posts page when submit btn is clicked */
function loadBlog() {
   window.location = "./blog.html";
   window.onload = function() {
      let userName = localStorage.getItem('username');
      if (userName != "undefined" || userName != "null") {
         document.getElementById('first-article').innerHTML = userName;
      } else {
         document.getElementById('first-article').innerHTML = "Hello there!";
      }
   }
}

/* save form values to local storage */  
window.onload = function() {

   
   document.getElementById('form').addEventListener('submit-btn', function() {
      let userName = document.getElementById('username').value;
      localStorage.setItem('username', userName);
      
   });
  
}

/* Go back to main page when 'back' button is clicked */
function goBack() {
   window.location = "./index.html"
   if (localStorage.getItem('dark-mode')) {
      body.classList.add('dark-mode');
   }
}

let checkbox = document.getElementById("dark-mode");
let body = document.getElementById('body');

checkbox.addEventListener( 'change', function() {
   localStorage.setItem('dark-mode',this.checked);
   if (this.checked) {
      body.classList.add('dark-mode')
   } else {
      body.classList.remove('dark-mode')
   }
   });