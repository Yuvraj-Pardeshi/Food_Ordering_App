import React from "react"
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"

const App = ()=>{
    return (
         <div className="app">
            <Header />
            <MainContent />
         </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>)

