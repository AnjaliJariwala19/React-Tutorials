<!-- When you clone folders from GitHub don't forget to install node modules for them to run using 'npm install'. -->


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
