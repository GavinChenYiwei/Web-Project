# Exam 1 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

## Q: What is the difference between a dynamic asset and a static asset?
The difference is whether there is a server or not. The `static asset` do not need a server, and it can run the html from the local html/client-browser side js/css. However, the `dynamic asset` need the server-side js to run the program.

## Q: What is the difference between a relative and absolute file path in a URL?  What is the "webserver root" and how does this relate to it?
`Absolute paths` is taken from some "root" of the server, and this kind of root is not the root of the file system, but rather the root of whatever the web server considers the root.<br>
However, the `relative paths` is based on navigation from the path of the currently loaded page.

## Q: What is the difference between server-side and client-side JS?
The `server-side JS` resides on the server and this program will never have their resource code exposed to the users. This kind of JS usually retrieve records from database and maintain state.<br>
While at the other hand `client-side JS` resides on browser and runs at the browser, and it generally refers to the class of computer programs on the web that are executed client-side, by the user's web browser, instead of server-side.

## Q: What are the differences between `var`, `const`, and `let`, and when should you use each of them?
Difference: <br>`Var` declarations are globally scoped or function/locally scoped, but it can be re-declared and updated. <br>`let` is block scoped and it can ve updated but not re-declared. <br> `const` maintain constant values and it is also block scoped. But it cannot be updated or re-declared. <br>`Usage`: They are all hoisted to the top of their scope but while `var` variables are initialized with undefined, let and const variables are not initialized. While var and let can be declared without being initialized, const must be initialized during declaration. And then using them case by case.

## Q: What are the 4 ways to create inheritance? (no examples needed, just a sentence describing each)
* Inheritance with the prototype chain
* Inheritance with "call/apply" function
* Using Object.create function
* Using Prototypal inheritance

## Q: Give a demonstration of 1 way to create JS inheritance to _inherit_ a method named "purr".
``` javascript
function purr(){
    this.x = 1;
    this.y = 2;
}
function purr_child(){
    purr.call(this);
}
```

## Q: Give a demonstration of a different way to create JS inheritance to _inherit_ a method named "hiss".
``` javascript
function hiss(){
    this.x = 1;
    this.y = 2;
}
function hiss_child(){
}
hiss_child.prototype = new hiss();
```

## Q: Explain this sentence: "In CSS, you can select an element based on its ancestors, but you can't select an element based on its descendants"  Make an example and say a concept that cannot be selected.
``` html
<div id="floater">
    <ul class="saft">
        <li><div class="textSlide"></li>
    </ul>
</div>
```
``` css
ul.saft div.textSlide {
    /* CSS rules */
}
```

## Q: Explain what a callback is, and give an example.
 In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.
 ``` javascript
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

function alertFinished(){
  alert('Finished my homework');
}

doHomework('math', alertFinished);
 ```

## Q: In CSS, what does it mean "You shouldn't name your classes after what they will appear like"?   Why?  Give an example of a class that is well named and a class that is poorly named.
You cannot give a name to a class by what it wll look like. You should name the class by its section, such as img-info, img-text, etc. It will be much easier when you come back to review this part of code and find the specific css style.
```css
/*Person image css (Poorly named)*/
.size-big-round{
    height: 100px;
    width: auto;
    radius: 50%;
}

/* well named */
.person-img {
    height: 100px;
    width: auto;
    radius: 50%;
}
```



