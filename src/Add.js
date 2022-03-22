import React from "react";
import { addCompany } from "./store";
import {connect} from 'react-redux'

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        }
        this.save = this.save.bind(this)
    }
    save(ev) {
        ev.preventDefault()
        const companies = {
           name: this.state.name
        }  
        this.props.add(companies)
    }
    
    render() {      
        const { add }  = this.props
        const { name }  = this.state 
        const {save} = this

        return (
            <form onSubmit={ save }>                                          
                <input onChange = {ev => this.setState({name: ev.target.value})} name ='name' placeholder="Company" value = {name}/>
                    <button>Add A Company</button>
            </form>
        )     
    }
}

const mapDispatch = (dispatch) => {
    return { 
        add : async (company) => {
           await dispatch(addCompany(company))
        }  
    }

}

export default connect(state=>state, mapDispatch)(Add)