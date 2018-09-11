import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Catalogo from './components/Catalogo';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WineMakers from './components/WineMakers';
import {Switch,Route,Link} from 'react-router-dom';

var someData = 'Made by Alejandro Aragon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>Catalogo App</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><Link to ='/'>Catalog</Link></li>
              <li><Link to ='/about'>About</Link></li>
              <li><Link to ='/contact'>Contact</Link></li>              
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Catalogo}/>
          <Route path='/about' component={About}/>
          <Route path='/winemakers' component={WineMakers}/>
          <Route path='/contact' render={() => (<Contact data={someData}/>)}/>
          <Route path='/footer' children={() => (<Footer />)}/>
        </Switch>
      </div>
    );
  }
}

export default App;
