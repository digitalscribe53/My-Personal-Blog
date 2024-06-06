





function loadBlog() {
   
    //window.location = "./blog.html";
    const firstArticle = document.getElementById("first-article");
    let storedPostsArrayJSON = localStorage.getItem("postsArray");
    let storedPostsArray = JSON.parse(storedPostsArrayJSON);

    console.log(storedPostsArray);

    storedPostsArray.forEach(post => {
      const postDiv = document.createElement('div');

      const usernameEl = document.createElement('h3');
      const titleEl = document.createElement('h3');
      const contentEl = document.createElement('p');

      usernameEl.innerText = `By: ${post.username}`;
      titleEl.innerText = post.title;
      contentEl.innerText = post.content;

      postDiv.appendChild(usernameEl);
      postDiv.appendChild(titleEl);
      postDiv.appendChild(contentEl);

      firstArticle.appendChild(postDiv);
    })
    
    
    //firstArticle.innerText = storedPostsArray.title + "\nby: " + storedPostsArray.username + "\n" + storedPostsArray.content;


    
    
    

}   

  loadBlog();

  function blogDarkMode() {
    let blogContainer = document.getElementById("blog-container");
    blogContainer.classList.toggle("dark");
    
 }

 function goBack() {
    window.location = "./index.html"
    //if (localStorage.getItem('dark-mode')) {
      // body.classList.add('dark-mode');
    //}
 }