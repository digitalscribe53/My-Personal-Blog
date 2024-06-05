/* when the form submits, we check if all three input fields are entered. 
   if not, we ask the user to complete all the fields before submitting.
   Else if the user submits all three inputs, then we save the inputs to localStorage.
   The blog page should render the blog posts from localStorage, 
   so that the user can go back and type more blog posts and on submit
   they will be posted below the user's previous posts.
   We will store the blog posts as objects in a JSON array.*/


   const submitBtn = document.getElementById('form');
   const userName = document.getElementById("username");
   const title = document.getElementById("title");
   const blogText = document.getElementById("blog-text");
   

if (submitBtn) {
   


// change event
submitBtn.addEventListener('click', function (event) {
   event.preventDefault();
   
   if (userName.value === '' || title.value === '' || blogText.value === '') {
      
      alert("Please fill in all the fields.");
   } else { 
      const user = {
         username: userName.value,
         title: title.value,
         content: blogText.value
      }
      
      localStorage.setItem("user", JSON.stringify(user));




      const stringifiedUser = JSON.stringify(user);
      
      window.location = "./blog.html";
      
      //console.log(userParsed);
      

      
      
   }  
});
}
/*
document.getElementById("submit-btn").onclick = function() {
   /*
   const allFilled = true;
   const userName = document.getElementById("username");
   const title = document.getElementById("title");
   const blogText = document.getElementById("blog-text");
   
   if (userName.value === null || title.value === null || blogText.value === null) 
      
      alert("Please fill in all the fields.");
   
} */
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



 // Load the Blog Posts page when submit btn is clicked 

/*   
   window.onload = function() {   
      let userName = localStorage.getItem('username');
      if (userName != "undefined" || userName != "null") {
         document.getElementById('first-article').innerHTML = userName;
      } else {
         document.getElementById('first-article').innerHTML = "Hello there!";
      }
   } 
   */

/*
// save form values to local storage   
window.onload = function() {

   
   document.getElementById('form').addEventListener('submit-btn', function() {
      let userName = document.getElementById('username').value;
      localStorage.setItem('username', userName);
      
   });
  
} */

// Go back to main page when 'back' button is clicked 


/*
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
   */ 