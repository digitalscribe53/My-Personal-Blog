function loadBlog() {
   
    //window.location = "./blog.html";
    const firstArticle = document.getElementById("first-article");
    const userObject = localStorage.getItem("user");
    
    const userParsed = JSON.parse(userObject);
    console.log(userParsed);
    firstArticle.innerText = userParsed.title + "\nby: " + userParsed.username + "\n" + userParsed.content;
    for (i = 0; i < userParsed.length; i++) {
      firstArticle.textContent = userParsed.username;
    }
    
    

     }   

  loadBlog();

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

 function goBack() {
    window.location = "./index.html"
    if (localStorage.getItem('dark-mode')) {
       body.classList.add('dark-mode');
    }
 }