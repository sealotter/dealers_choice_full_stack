import React from "react";
import { connect } from "react-redux";
import {deleteCompany} from './store'
import { Link } from "react-router-dom";


const Company = ({ companies, match }) => {


        return (
            <div>
                <h2>About:</h2>
                <Link to= {'/companies'} >Back</Link>

                <ul>
                    {
                    companies.filter(company => company.id === match.params.id).map(company => {
                        
                    return (
                        <li key= {company.id}>
                           
                            { company.name }

                           <p> {company.about}</p>
                        
                        </li>
                    )
                    }
                )
                }
                </ul>
        </div>

        )
    
}

const mapStateToProps = function(state) {
    return state
}

const mapDispatch = function(dispatch) {
    return {
        destroy : async(company) => {
           await dispatch(deleteCompany(company))
        }

    }
}




export default connect((state) => state)(Company)