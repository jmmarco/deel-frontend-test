1. What is the difference between Component and PureComponent? give an example where it might break my app.
A React PureComponent performs only a shallow object comparison, if the component contains a complex object then the comparison might produce what is known as a false positive, leading to potential rendering errors.

2. Context + shouldComponentUpdate might be dangerous. Can think of why is that?
Not sure about this, but generally speaking a component is to re-render every time state is udpated or changed. I suspectt that if we for example, we implement `shouldComponentUpdate` incorrectly we might not get the updated value provided by Context API.

1. Describe 3 ways to pass information from a component to its PARENT.
   1.  Pass information via callback functions
   2.  Pass information via setState callback
   3.  Using action creators provided by a reducer function (via Hooks or using state management library like Redux)

2. Give 2 ways to prevent components from re-rendering
   1.  Using `shouldComponentUpdate` for a class Component
   2.  Function component that leverages `useMemo`

3. What is a fragment and why do we need it? Give an example where it might break my app.
  A fragment provides a way of creating a React element that doesn't require an additional DOM node or wrapper element to hold the elements within it.
  Honestly (at least right now) I can't think of an example were it might break an app.

6. Give 3 examples of the HOC pattern.
  1. A tooltip HOC
  2. React Router uses it withRouter(YourComponent)

7. What's the difference in handling exceptions in promises, callbacks and async...await.
  Basically the way that they are written. For example, using `.then` and `.catch` vs. using `try` and `catch`.
 
8. How many arguments does setState take and why is it async.
  `setState` takes two arguements, an object to update, and an optional callback. The updates to `setState` are queued and handled by React as a request. Because of this changes to state might not be immediate unless we use the `setState` callback.

9. List the steps needed to migrate a Class to Function Component
   1.  Remove the class keyword along with `extends React.Component`
   2.  Remove the `render` method
   3.  Make sure the component now looks like a reguar JavaScript function that returns some valid JSX and optionally accepts props (if any).

10. List a few ways styles can be used with components
  Styles can be applied by importing a CSS file, or by appling styles dirrectly on elements using the `style` attribute. Alternatively objects with styles that follow the CSS-in-JS pattern can be used in conjunction with the style attribute.

11. How to render an HTML string coming from the server.
  Use `dangerouslySetInnerHTML` to set the incoming HTML string on specific element
