// import React from 'react'
// import ReactDOM from 'react-dom/index'
// let heading = React.createElement("h1",{id : "heading"},"Hello World");
// //{} above is use to set the attribute to the elments 
// console.log(heading) // it will return an object
// let root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // render is reponsible to create an h1 tag out the the pass object and render it
// console.log(root);

const parent = React.createElement('div',{id : "parent"},
React.createElement('div',{id : "child"},
[React.createElement('h1',{},"I am h1 tag"),React.createElement('h2',{},"I am h2 tag")])); // to create sibling we have to pass them in an array 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
console.log(parent);