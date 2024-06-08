
function loadBlog() {
    
   
    const firstArticle = document.getElementById("first-article");
    // Retrieve the posts from localStorage
    let storedPostsArrayJSON = localStorage.getItem("postsArray");
    // Convert the posts from a string type back to an array
    let storedPostsArray = JSON.parse(storedPostsArrayJSON);
    
    console.log(storedPostsArray);

    // Iterate over the storedPostsArray
    storedPostsArray.forEach(post => {
      // Create a div for each post
      const postDiv = document.createElement('div');
      // Create elements for username, title and content
      const usernameEl = document.createElement('h3');
      const titleEl = document.createElement('h3');
      const contentEl = document.createElement('p');
      // Set the innerText for each element
      usernameEl.innerText = `By: ${post.username}`;
      titleEl.innerText = post.title;
      contentEl.innerText = post.content;
      // Append the elements to the postDiv
      postDiv.appendChild(usernameEl);
      postDiv.appendChild(titleEl);
      postDiv.appendChild(contentEl);
      // Append the postDiv to the container
      firstArticle.appendChild(postDiv);
    })
}   

  loadBlog();

  // Toggle dark mode 
  function blogDarkMode() {
    let blogContainer = document.getElementById("blog-container");
    blogContainer.classList.toggle("dark");
 }
 // Go back to main page 
 function goBack() {
    window.location = "./index.html"
 }