import React from "react";
import Add from "./Add";
import store from "./store";
import {connect} from 'react-redux'
import { Link } from "react-router-dom";


const Header = ({companies}) => {
    return (
        <div>
            <h1>Choose the top 5 companies that should be sent to space in the very car model they make
            </h1>
            <h5>(whether they'll come back or not, we'll never say)</h5>
            <h3>Click the companies to learn more and whether they deserve (good or bad) to be sent to space</h3>
            <h3>You can add some companies and delete, just choose 5 :<Link to= '/companies' > ({companies.length})</Link> 
            </h3>
            <Add />
        
        </div>
    )
}


const mapStateToProps = function(state) {
    return state
}


export default connect(state => state)(Header)