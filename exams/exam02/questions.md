# Exam 2 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: The first rule I've given about REST services is that the URL should represent a resource.  What does that mean?  Provide an example where a url DOES not represent a resource, then describe how to modify it so that it does.
A: You should show the name or what this url represent for in the URL, so that the users will figure it out when they saw the website at the first glance.
For example, if you want to present a json list of user list, the bad url example is that `www.example.com/list`. And I think you can change the url into `www.example.com/userList.json`.


## Q: I say that "Once you go async, you have to stay async".  What does this mean?  Give an example that demonstrates.
A: Because if you don't stay async, the async function will not run if the main function has done. And also, we have no idea that when this async function will execute since it is not execute line by line. For example
```Javascript
function double1Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2);
    }, 1000);
  });
}

async function addAsync(x) {
  const a = await double1Seconds(10);
  const b = await double1Seconds(20);
  const c = await double1Seconds(30);
  return x + a + b + c;
}
```

## Q: What is a rule of thumb you can follow to understand when async code can and cannot modify your variables and/or call your methods?
A: Since Javascript is single-threaded, async execution is pushed out of the synchronous flow. That is, the asynchronous code will never execute while the synchronous code stack is executing, which means if it modify the variables, it happens in the end.

## Q: What does it mean to "store your state in the DOM"?  Why shouldn't you do this?
A: If you only have small amounts of data and have full control over your pages, then go ahead and put data in data- attributes and properties. 
However, normally, we need to store a lot of complex data structures, so you shouldn't store it in the DOM. The DOM is supposed to be a view of data. The properties of DOM elements should be metadata for the elements themselves, not data from the model.

## Q: What is the primary rule to follow to prevent poor web security such as injection attacks?  (This is NOT about safely storing passwords)
A: Never craft the SQL from user input, and always use "bound" variables when possible. If not possible to use bound, use the escaping libraries from the vendor and whitelist data.

## Q: What is a polyfill?  When should one be used?  Give an example of a polyfill that follows these rules.
A: A polyfill is a browser fallback, made in JavaScript, that allows functionality you expect to work in modern browsers to work in older browsers.
```Javascript
Array.prototype.forEach = function(callback, thisArg) {
  if(typeof(callback) !== "function") {
    throw new TypeError(callback + " is not a function!");
  }
  const len = this.length;
  for(let i = 0; i < len; i++) {
    callback.call(thisArg, this[i], i, this)
  }
}
```

## Q: Give an example of a piece of information you should not store in a cookie, and why you should not store it that way.
A: For example, password or any other kinds of sensitive information cannot be stored in the cookie. Because  cookies are stored on people's computers so from a website developer's point of view. They're basically out in the wild, potentially accessible to anyone.

## Q: Explain the differences between a multiple-page-web application and single-page-web application.  Be sure to fully demonstrate your understanding.
A: Single-page-web application is an app that works inside a browser and does not require page reloading from server during use. It is just a one-page web and it is heavily based on it local Javascript.
Mutiple-page-web application often has many levels of UI. Every change on the website, for example, displaying the data or submiting data back to server requests, is rendering a new page from the server in the browser. This kind of application has to transfer a large amount of data between browsers and the server.

## Q: What is Progressive Enhancement?  What is the difference in an SPA that uses Progressive Enhancement compared to an SPA that doesn't use Progressive Enhancement?
A: Progressive enhancement is a strategy for web design that emphasizes core web page content first. This strategy then progressively adds more nuanced and technically rigorous layers of presentation and features on top of the content as the end-user’s browser/Internet connection allow.
If an SPA uses Progressive enhancement, it will have following benefits.
Progressive enhancement focuses on the start of your project using only the very basic web technologies before introducing some of the very complex features. It has strong fundations. The SPAs with progressive enhancement are made to work for all users, regardless of their browser choice.

## Q: Explain how a  REST service is or is not similar to a dynamic asset.
A: A dynamic asset consists of HTML, Javascript and CSS files that are partially or entirely rendered by the server, and sent to the web browser in real time.
And SPA with a REST service is that the client consists of a set of static HTML + CSS + Javascript files and then communicate with a web server using the REST architecture. And the web server can be implemented in almost any programming language out there.