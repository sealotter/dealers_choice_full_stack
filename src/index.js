import React from 'react';
import { render } from 'react-dom';
import store from './store';
import {setCompanies} from './store'
import Header from './Header';
import Companies from './Companies';
import Company from './Company'
import {Provider} from 'react-redux'
import {HashRouter, Route} from 'react-router-dom'

class App extends React.Component {
    async componentDidMount(){
        //this.props.setCompanies()
        store.dispatch(setCompanies())  
    }
    render(){
        return(
            <div>
                <Header />

                <Route exact path = "/companies" component = {Companies} />   
                <Route path = "/companies/:id"   component = {Company} />
                    
                
            </div>
        )
    }

    
    
}

render(<Provider store = {store}> 
<HashRouter>
    <App />
</HashRouter>
</Provider>, document.querySelector('#root'));