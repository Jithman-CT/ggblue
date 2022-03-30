import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter
} from "react-router-dom";




// import file
import App from "./App"

// import css
import "./index.css"



ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);