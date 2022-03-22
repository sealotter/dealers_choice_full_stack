import React from "react";
import Add from "./Add";
import {connect} from 'react-redux'



const Header = ({companies}) => {
    return (
        <div>
            <h1>Choose the top 5 companies that should be sent to space</h1>
            <h5>(whether they'll come back, we'll never say)</h5>
            <h3>Click the companies to learn more and whether they deserve (good or bad) to be sent to space</h3>
            <h3>You can add some companies and delete, just choose 5 :({companies.length})
            </h3>
            <Add />
        
        </div>
    )
}

const mapStateToProps = function(state) {
    return state
}


export default connect(state => state)(Header)