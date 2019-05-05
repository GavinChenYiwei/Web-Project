# Exam 3 Questions

* Answers should be roughly 2-5 sentences, and in your own words.  
* Some questions ask for a code sample - keep them short and to the point.
* Be sure to be clear - be careful not to use vague pronouns like "it" if I can't be completely sure what "it" is.
* I cannot assume knowledge you don't demonstrate, so be clear and explicit.

* NOTE: Because there is no coding portion to Exam 3, each of these questions is worth more to your grade than the questions on previous Exams!  Be sure to have answers you are confident shows your understanding!

## Q: I have said that React JSX components are like functions and follow many of the same best practices.  Give at least 2 such best practices that are good for both JS functions and JSX Components.  (Be substantive!)
``` JavaScript
//javascript
const chatWeb = (props) =>{
    return `This is my ${props.message}`
}

//jsx
const chatWeb = (props) =>{
    return (<div>This is my {props.message}</div>)
}
```


## Q: I have said that using Progressive Enhancement (supporting both MPA and SPA) is best, but many places don't do so because of the effort involved.  What is at least one major reason not to use SPA alone?

1. SPA will course low speed and bad performance.
2. A SPA website costs from much more compared to a non SPA one.
3. A SPA is also hard for developer to have a long term maintainability.
4. Since SPA is the client side JavaScript, it will have a poor security.

## Q: Using class-based components and function-based components is largely a matter of preference.  However, (excluding the recent "hooks" addition to React), there are 2 things class-based components give you that function-based components do not.  What are those 2 things? 

1. state
2. lifecycle method

## Q: The "proxy" setting in your package.json is required for the create-react-app dev server to call a local service, but not if you are calling a service that will always be on a different domain (such as jsonstore.io).  Explain what happens (in terms of network traffic) when your dev server is running on localhost port 3000 and makes a call to `/service` when you have "proxy" set to `http://localhost:4000` and a server running on localhost port 4000 that has the `/service` service. 

A: When you run the dev server and call the service, first of all , the server will find out that the "/service" is the a static asset. Since there is a proxy in the package.json, server will use the proxy to call the ```http://localhost:4000/service``` as the callback function. 

## Q: Follow-up: Using the above scenario, explain what the network calls are like after you run `npm run build` and are only running all of your content on localhost port 4000 when your JSX makes a call to `/service`

A: Since you run all the service on the port of 4000, which means that the React app also runs on that port, ```/service``` call won't reach the server, and there won't be any request and respond.

## Q: Additional follow-up: Using the above scenario, explain what changes you would make to your JSX if you were putting your JSX and server on a host on a site such as `http://favorite-cats-with-hats.com` (Not a real site)

A: You need to change the port and listen to this exact website.

## Q: I have said that you can only pass data "down" in React, not "up".  What does that mean?

A: Props is only to pass the state or the data from parent component to its child component. There's no way to pass the props to its parent component.

## Q: Follow-up: If you can't pass data "up", how can anything that is "down" change data?

A: You can use a callback and state.
 First of all, you can define callback in the parent which takes the data you need in as a parameter. And then, passing that callback as a prop to the child. In the end, calling the callback using this.props.[callback] in the child, and pass in the data as the argument.

## Q: A component should not set its own state (if it has one) based on props it was passed in.  Why?  What is the problem with setting state based on props?

A: Passing the intial state to a component as a prop is an anti-pattern because the getInitialState constructor method is only called the first time the component renders. Never more. Meaning that, if you re-render that component passing a different value as a prop, the component will not react accordingly, because the component will keep the state from the first time it was rendered.

## Q: Why should you have only a few components that have state?  What is wrong with having many components that have state? 

A: Having too many components connected to the state can cause things to go wrong with updating the data and how it gets displayed on the screen. 
What's more, When an overabundance of components are connected, it becomes more difficult to figure out what is causing changes to occur in the page.
