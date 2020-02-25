import React, { Component } from 'react'
import './App.css'
import "./sample.less";

export default class App extends Component {
    constructor(props) {
        super(props)
        // console.log("constructor of App...");
        
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="header_main">
            Hello React...y
            hOW R U..
        </div>
        )
    }
}

