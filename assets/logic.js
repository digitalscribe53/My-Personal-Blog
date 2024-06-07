/* when the form submits, we check if all three input fields are entered. 
   if not, we ask the user to complete all the fields before submitting.
   Else if the user submits all three inputs, then we save the inputs to localStorage.
   The blog page should render the blog posts from localStorage, 
   so that the user can go back and type more blog posts and on submit
   they will be posted below the user's previous posts.
   We will store the blog posts as objects in a JSON array.*/


   const submitForm = document.getElementById('form');
   const userName = document.getElementById("username");
   const title = document.getElementById("title");
   const blogText = document.getElementById("blog-text");
   const submitBtn = document.getElementById("submit-btn");
   postsArray = [];

if (submitForm) {
   
// change event
submitForm.addEventListener('submit', function (event) {
   event.preventDefault();
   

   
   
   if (userName.value === '' || title.value === '' || blogText.value === '') {
      
      alert("Please fill in all the fields.");
   } else { 
      

      let retrievedArray = localStorage.getItem('postsArray');
      let parsedRetrievedArray = JSON.parse(retrievedArray);
      
      postsArray = parsedRetrievedArray;
      
      postsArray.push({username: userName.value, title: title.value, content: blogText.value});
      console.log(postsArray);

      let stringifiedPostsArray = JSON.stringify(postsArray);
      localStorage.setItem('postsArray', stringifiedPostsArray);

      
      window.location = "./blog.html";
   }  
});
}


   
function darkMode() {
   
   let leftBox = document.getElementById("left-box");
   let rightBox = document.getElementById("right-box");
   leftBox.classList.toggle("dark-mode");
   rightBox.classList.toggle("dark-mode");
}



 

window.onload = function() {

   
   document.getElementById('form').addEventListener('submit-btn', function() {
      let userName = document.getElementById('username').value;
      localStorage.setItem('username', userName);
      
   });
  
} 

