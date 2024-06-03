/* when the form submits, we check if all three input fields are entered. 
   if not, we ask the user to complete all the fields before submitting.
   Else if the user submits all three inputs, then we save the inputs to localStorage.
   The blog page should render the blog posts from localStorage, 
   so that the user can go back and type more blog posts and on submit
   they will be posted below the user's previous posts.
   We will store the blog posts as objects in a JSON array.*/


document.getElementById("submit-btn").onclick = function() {
   /*
   const allFilled = true;
   const userName = document.getElementById("username");
   const title = document.getElementById("title");
   const blogText = document.getElementById("blog-text");
   
   if (userName.value === null || title.value === null || blogText.value === null) 
      */
      alert("Please fill in all the fields.");
   

}
   /*
   const message = ("Please enter a Username, Title and Content before clicking Submit.");
   const msgBox = document.getElementById("warning-msg");
   const userName = document.getElementById("username");
   const title = document.getElementById("title");
   const blogText = document.getElementById("blog-text");
   
   if (userName.value === null || title.value === null || blogText.value === null) {
      
      document.msgBox.innerHTML = message;
   } 
} */

   
function darkMode() {
   
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