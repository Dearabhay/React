import React from " react";
import ReactDOM from "react-dom/client";
let root = document.querySelector("#root");
const h1 = React.createElement("h1",{},"hello this is react");

ReactDOM.createRoot(root).render(h1);
   