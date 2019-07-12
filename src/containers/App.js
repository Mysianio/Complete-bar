import React, {Component} from 'react';
import '../index.css';
import Goal from '../components/Goal.js'

class App extends Component{
  render(){
    return(
      <div className='appWrap'>
        <div className='app'>
          <div className='appHeader'>
            <span>Target Indicator Demo</span>
          </div>
          <Goal/>
        </div>
      </div>
    )
  }
}

export default App;
