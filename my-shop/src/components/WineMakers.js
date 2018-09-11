import React from 'react'
import {Switch,Route,Link} from 'react-router-dom';
import WineMaker from "./WineMaker";

class WineMakers extends React.Component {
  renderWineMakersList(){
    return(<ul>
        <li><Link to ='/winemakers/WM2'>Wine & Co</Link></li>
      </ul>
    )
  }
  render () {
    return <Switch>
        <Route exact path='/winemakers' render={this.renderWineMakersList} />
        <Route path='/winemakers/:code' component={WineMaker}/>
      </Switch>;
  }
}

export default WineMakers;
