Shortcuts:
imr -> Import React
sfc ->	Stateless Function Component

Environment Variables: They are named values that store information accessible by running processes. These variables are typically set outside the application's code. They are saved in root i.e. home directory of the project with name '.env'. It is never shipped on Github or production.
Accessing of the env var differs from react App to vite to node etc. The import process can be seen from documentation itself. For Vite:
-> VITE_SOME_KEY=123
   DB_PASSWORD=foobar
-> To prevent accidentally leaking env variables to the client, only variables prefixed with VITE_ are exposed to your Vite-processed code
->  console.log(import.meta.env.VITE_SOME_KEY) // "123"
console.log(import.meta.env.DB_PASSWORD) // undefined

Context API: Context API is used to pass global variables anywhere in the code without the prop drilling. It helps when there is a need for sharing state between a lot of nested components. It exclusively features only for React.

State Management: State management is a critical concept when working with React. React components can hold local state, but as applications grow, managing state across multiple components can become complex. To help manage this complexity, React provides several tools: Hooks, Context API, and Redux.

NOTE: When you clone folders from GitHub don't forget to install node modules for them to run using 'npm install'.

React is a library and not a framework.

A library is a collection of pre-written code modules, functions, and classes that a developer can use within their application to perform specific tasks. 

A framework, on the other hand, provides a pre-designed structure or architecture for building applications. It's like a blueprint or scaffolding for your application.

Some topics only for understanding not for application(Interview POV). They are :-

Hooks: React Hooks are functions that allow functional components in React to manage state, handle side effects, and access other React features without needing class components. React Hooks are tools that let you add features such as keeping track of data (state) and doing things when your component loads or updates, all from within function components. This means you can do a lot without needing to write class components.

DOM: Document Object Model that represents the content of XML or HTML documents as a tree structure so that the programs can be read, accessed and changed in the document structure, style, and content.

Virtual DOM: Virtual DOM is exactly like DOM and it has all the properties that DOM has. But the main difference is Whenever a code runs JavaScript Framework updates the whole DOM at once which gives a slow performance. whereas virtual DOM updates only the modified part of the DOM.

React Fibre: A new implementation of the core algorithm in React for rendering and reconciling components.
Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames. Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.
-> A primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to:<br>
-pause work and come back to it later.<br>
-assign priority to different types of work.<br>
-reuse previously completed work.<br>
-abort work if it's no longer needed.<br>

Reconciliation: Reconciliation is the process of comparing the virtual (REACT) DOM with the actual (Browser) DOM and updating the actual DOM to match the virtual DOM. This process is done by React to ensure that the UI is updated correctly and efficiently. 
The algorithm React uses to differ one tree with another to determine which parts need to be changed.


NOTE: Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."
