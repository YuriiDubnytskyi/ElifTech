import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Create from './components/Create';
import Index from './components/Index';
import Sucsses from './components/Sucsses';

import SucssesUp from './components/SucssesUp';
import Update from './components/Update';


import './App.css'

class App extends Component {
 
  render() { 
    let number = 20;
    return (
      <Router>
        <div className="container row">
          <aside className="d-block float-left col-sm-4">
        <h1 style={{margin: number+'px'}}>Hot Dog List</h1>
        <button className="btn btn-primary btn-secondary m-2" type="button" ><Link to={'/create'}>Add Hot Dog</Link></button>
        <button className="btn btn-primary btn-secondary m-2" type="button" style={{margin: '9px'}}><Link  to={'/index'}>List of Hot Dogs</Link></button>
        </aside>

        <section className="d-block float-right col-sm-8">
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/index' component={ Index } />
              <Route path='/sucsses' component={ Sucsses } />

              <Route path='/sucssesup' component={ SucssesUp } />
              <Route  path='/update'  component={ Update } />


          </Switch>
        </section>
          
        </div>
      </Router>

    );
  }
}

export default App;