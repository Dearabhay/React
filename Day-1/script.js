import {a} from "./main.js";
let rh1 = React.createElement("h1",{},React.createElement("span",{},"I m under h1"));

let root = document.querySelector("#root");
let rootofReact = ReactDOM.createRoot(root);
rootofReact.render(rh1);
console.log(a);