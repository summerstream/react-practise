import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Picker from './components/picker/index'
import IndexPage from './pages/index/index'
import pickers from './pages/pickers/index'
import SearchGeek from './containers/search-geek'

class Routes extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/"  component={IndexPage} />
                    <Route path="/index"  component={IndexPage} />
                    <Route path="/pickers" component={pickers} />
                    <Route path="/search" component={SearchGeek} />
                </div>
            </Router>
        );
    }
}
const pages =()=>{
    <div>haha</div>
    
}

export default Routes;