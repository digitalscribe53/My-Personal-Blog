
   const submitForm = document.getElementById('form');
   const userName = document.getElementById("username");
   const title = document.getElementById("title");
   const blogText = document.getElementById("blog-text");
   const submitBtn = document.getElementById("submit-btn");
   postsArray = [];
   
// Listen for a change event to begin function 
submitForm.addEventListener('submit', function (event) {
   event.preventDefault();
   // If any form field is empty
   if (userName.value === '' || title.value === '' || blogText.value === '') {
      
      alert("Please fill in all the fields.");
   } else { 
      
      // Get the array of blog post objects from localStorage 
      let retrievedArray = localStorage.getItem('postsArray');
      // Convert from string to type array
      let parsedRetrievedArray = JSON.parse(retrievedArray);
      
      postsArray = parsedRetrievedArray;
      // Push the current form values to the posts array
      postsArray.push({username: userName.value, title: title.value, content: blogText.value});
      console.log(postsArray);
      // Convert postsArray to type string
      let stringifiedPostsArray = JSON.stringify(postsArray);
      // Store the stringifiedPostsArray in localStorage
      localStorage.setItem('postsArray', stringifiedPostsArray);

      // Load the blog posts page 
      window.location = "./blog.html";
   }  
});
 
function darkMode() {
   
   let leftBox = document.getElementById("left-box");
   let rightBox = document.getElementById("right-box");
   leftBox.classList.toggle("dark-mode");
   rightBox.classList.toggle("dark-mode");
}


