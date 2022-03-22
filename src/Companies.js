import React from "react";
import { deleteCompany } from "./store";
import { connect } from "react-redux";


const Companies = ({ companies, destroy }) => {
        return (

            <ul>
                {companies.map(company => {
                return (
                    <li key= {company.id}>{ company.name }
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