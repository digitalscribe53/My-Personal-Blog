# My-Personal-Blog

## Description
The web page is an interactive blog that allows a user to write their own blog posts and then see them displayed on a blog page. A user may then press a button to go back to the form page, enter another post and then see it displayed along with their first post. And so on and so on! The web page contains JavaScript that saves the user's posts in their browser's local storage. It saves them as an array of objects, converting them before and after to and from type string by using JSON methods stringify and parse. The form uses an event listener for a click on the submit button to run a function that checks if any input fields are empty. If any are empty, an alert window is displayed in the browser with a message to fill in all the input fields. If all the fields contain a value, the event listener will load the blog page when the submit button is clicked. 
This project challenged me to apply everything I have learned so far, while also working faster than I was used to. I'm mostly happy with what I was able to create within the time frame of the project. I was able to debug or find workarounds for just about all the features that I wanted to implement. Some tricky things I didn't expect while working with JSON methods for the first time were challenging to debug so I re-wrote the submitForm.addEventListener and loadBlog functions several times using different approaches. 

## Usage 
The index.html file is intended to run in a browser. 

## Link to Live Page 
[Link](https://digitalscribe53.github.io/My-Personal-Blog/)

## Screenshot of Web Page 
![image](/assets/images/My-Blog-snip.JPG "My Blog screenshot")





