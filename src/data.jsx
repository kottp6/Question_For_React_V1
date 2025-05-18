export const Questions = [
    {
        id : 1,
        question : "What is React?",
        answer : `React is a front-end and open-source JavaScript library which
        is useful in developing user interfaces specifically for applications with a
        single page. It is helpful in building complex and reusable user interface(UI)
        components of mobile and web applications as it follows the component-based approach.`
    },
    {
      id : 2,
      question : "What are the features of React ?",
      answer : `1- It supports server-side rendering.
      2- It will make use of the virtual DOM rather than real DOM (Data Object Model) as RealDOM manipulations are expensive.
      3- It follows unidirectional data binding or data flow.
      4-t uses reusable or composable UI components for developing the view.
      `
    },
    {
      id : 3,
      question : "What is useState() in React?",
      answer : "useState() is a hook in React that allows you to add state to functional components."
    },
    {
      id : 4,
      question : "What are keys in React?",
      answer : "Keys are used to identify which items have changed, are added, or are removed.A key is a special string attribute that needs to be included when using lists of elements."
    },
    {
      id : 5,
      question : "What is JSX?",
      answer : "JSX is a syntax extension for JavaScript, allowing you to write HTML-like code within your JavaScript files.JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( )."
    },
    {
      id : 6,
      question : "how JSX convert to JS ?",
      answer : "JSX is converted to JS using Babel."
    },
    {
      id : 7,
      question : "What are the differences between functional and class components?",
      answer : `1- Syntax and Structure
      2- State Management
      3- Lifecycle Methods
      4- Performance 
      5- Hooks Support
      6- Simplicity 
      using function components and hooks is more simple than class components.`
    },
    {
      id : 8,
      question : "What is the Virtual DOM in React?",
      answer : `The virtual DOM is a lightweight copy of the actual DOM. It is used to optimize the performance of React applications by reducing the number of DOM updates.`
    },
    {
      id : 9,
      question : "What is the difference between props and state in React?",
      answer : `Props are read-only and immutable, while state is mutable and can be changed.`
    },
    {
      id : 10,
      question : "What is controlled components?",
      answer : `Controlled components are components that are controlled by React.
      1- React controls the value via useState() or this.state.
      2- Input changes are handled by an onChange event.
      3- The source of truth is React state.
      `
    },
    {
      id : 11,
      question : "What is uncontrolled components?",
      answer : `Uncontrolled components are components that are not controlled by React.
      1- The value is controlled by the DOM.
      2- Input changes are handled by an onChange event.
      3- The source of truth is the DOM.
      4- Use ref to access the DOM element.
      `
    },
    {
      id : 12,
      question : "What Are Hooks in React?",
      answer : `Hooks are special functions that let you use React features like state, lifecycle methods, and context inside functional components — without writing a class.`
    },
    {
      id : 13,
      question : "What Are the Different Types of Hooks in React?",
      answer : `There are two types of hooks in React:
      1- Function Hooks
      2- Custom Hooks`
    },
    {
      id : 14,
      question : "Rules of Hooks in React?",
      answer : `1- Only Call Hooks at the Top Level
      2- Only Call Hooks from React Functions
      3- Call Hooks Before Returning JSX
      4-Don’t call hooks inside loops, conditions, or nested functions.`
    },
    {
      id : 15,
      question : "difference between vite vs create-react-app?",
      answer : `Vite : Ultra-fast reloads, Easier config, Modern defaults, Works great with React, Vue, Svelte, etc.
      Create-react-app : Slower build and reloads, Hard to customize unless you eject, Good for beginners but outdated for larger projects
      `
    },
    {
      id : 16,
      question : "What is the difference between useState() and useEffect() in React?",
      answer : `useState() is used to add state to functional components, while useEffect() is used to perform side effects in functional components.`
    },
    {
      id : 17,
      question : "How I make conditional render?",
      answer : `1- Multiple return
      2- Ternary operator
      3- && operator`
    },
    {
      id : 18,
      question : "What is component life cycle ?",
      answer : `Three Main Phases : 1-Mounting (Component is being created and inserted into the DOM)
      constructor() (Class components only)
      componentDidMount() (Class)
      useEffect(() => {}, []) (Function component equivalent)

      2-Updating (Component re-renders due to state/props changes)
      componentDidUpdate(prevProps, prevState) (Class)
      useEffect(() => {}, [dependencies]) (Function)

      3-Unmounting (Component is removed from the DOM)
      componentWillUnmount() (Class)
      useEffect(() => { return () => {} }, []) (Function)`
    }
    
 
    
  ];