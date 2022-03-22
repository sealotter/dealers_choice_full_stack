import React from "react";
import { deleteCompany } from "./store";
import { connect } from "react-redux";
import Models from "./Models";
import { Link } from "react-router-dom";


const Companies = ({ companies, destroy }) => {
        return (

            <ul>
                {companies.map(company => {
                return (
                    <li key= {company.id}>
                        <Link to = {`/companies/${company.id}`} >{ company.name }</Link>
                    <button onClick={() => destroy(company)}>x</button>

                   
                    
                    </li>
                )
                }
            )}
        </ul>

        )
    
}

const mapStateToProps = function(state) {
    return state
}

const mapDispatch = function(dispatch) {
    return {
        destroy : (company) => {
           dispatch(deleteCompany(company))
        }

    }
}




export default connect(mapStateToProps, mapDispatch)(Companies)