import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import store from './store';
import {setCompanies} from './store'
import Header from './Header';
import Companies from './Companies';
import {Provider} from 'react-redux'

class App extends React.Component {
    async componentDidMount(){
        store.dispatch(setCompanies())  
    }
    render(){
        return(
            <div>
                <Header />
                <Companies />    
                    
                
            </div>
        )
    }

    
    
}

render(<Provider store = {store}> <App /></Provider>, document.querySelector('#root'));