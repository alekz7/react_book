import React from 'react'
import PropTypes from 'prop-types'

class WineMaker extends React.Component {
  constructor() {
    super();
    this.wineMakers = [
      {code: "WM1", name: "Wine & Wine",
      country: "Italy", description:"Wine & Wine produces an excellent Italian wine..."},
    ];
  }

  render () {
    return <h4>WineMaker</h4>
  }
}

export default WineMaker;
