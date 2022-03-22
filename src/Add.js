import React from "react";
import { addCompany } from "./store";
import {connect} from 'react-redux'



const Add = ({ add }) => {
    return (
        <button onClick = { add }>Create</button>
    )
}

const mapDispatch = (dispatch) => {
    return { 
        add : () => {
           dispatch(addCompany())

        }
        
    }

}

export default connect(null, mapDispatch)(Add)