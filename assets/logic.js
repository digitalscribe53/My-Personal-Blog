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
submitForm.addEventListener('click', function (event) {
   event.preventDefault();
   //let btnClick = event.currentTarget;


   if (event.target = submitBtn) {
   if (userName.value === '' || title.value === '' || blogText.value === '') {
      
      alert("Please fill in all the fields.");
   } else { 
      /*const user = {
         username: userName.value,
         title: title.value,
         content: blogText.value
      }
      */

      let retrievedArray = localStorage.getItem('postsArray');
      let parsedRetrievedArray = JSON.parse(retrievedArray);
      
      postsArray = parsedRetrievedArray;
      
      


      postsArray.push({username: userName.value, title: title.value, content: blogText.value});
      console.log(postsArray);

      let stringifiedPostsArray = JSON.stringify(postsArray);
      localStorage.setItem('postsArray', stringifiedPostsArray);

      //localStorage.getItem("postsArray", JSON.parse(postsArray));
      
      

      // localStorage.getItem(postsArray) EACH TIME MAIN LOADS
      // THEN LISTEN FOR CLICK AND PUSH VALUES TO ARRAY AGAIN 

      

      //localStorage.setItem("user", JSON.stringify(user));

      /* for each time the submit btn is clicked, push the current iteration of values to the array in localStorage.*/
      //for (let i = 0; i < postsArray.length; i++) {
         
      //}



      //const stringifiedUser = JSON.stringify(user);
      
      window.location = "./blog.html";
      
      //console.log(userParsed);
      

      
      
   }  
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