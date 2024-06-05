function loadBlog() {
   
    //window.location = "./blog.html";
    const firstArticle = document.getElementById("first-article");
    //const userParsed = JSON.parse("user");
    firstArticle.textContent = localStorage.getItem("user");
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